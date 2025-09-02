import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { pool } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    if(id){
      const [rows] = await pool.query("SELECT * FROM schools WHERE id=?", [id]);
      return NextResponse.json(rows); // single school returned as id is PK
    } else{
      const [rows] = await pool.query("SELECT * FROM schools");
      return NextResponse.json(rows);
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const contact = formData.get("contact") as string;
  const email_id = formData.get("email_id") as string;

  // Get the file
  const file = formData.get("image") as File;

  // Generate a unique filename
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), "public/schoolImages", file.name);

  // Save file into public/schoolImages
  await fs.writeFile(filePath, buffer);

  // Store path in DB (relative to /public)
  const imagePath = `/schoolImages/${file.name}`;

  // save to DB
  await pool.query("INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, address, city, state, contact, email_id, imagePath]);

  return NextResponse.json({ success: true, imagePath });
}
