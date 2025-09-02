export interface SchoolValues{
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: number;
  email_id: string;
  image: FileList | string;
};

export const formSubmit = async (data: SchoolValues) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("address", data.address);
  formData.append("city", data.city);
  formData.append("state", data.state);
  formData.append("contact", data.contact.toString());
  formData.append("email_id", data.email_id);
  if (data.image && data.image[0]) {
    formData.append("image", data.image[0]); // Save file
  }

  try {
    const res = await fetch("/api/schools", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Failed to save school");

    const result = await res.json();
    console.log("Saved:", result);
    alert("School added successfully! Go to schools page to view entry.");
  } catch (err) {
    console.error(err);
    alert("Error saving school");
  }
};
