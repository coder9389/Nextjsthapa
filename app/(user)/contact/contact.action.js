"use server";
import { db } from "@/config/db";

export async function contactaction(formData) {
  try {
    const email = formData.get("email");
    const name = formData.get("mname");  
    const description = formData.get("description");

    if (!email || !name || !description) {
      return { success: false, error: "All fields are required." };
    }

    // ✅ Insert data into MySQL
    await db.execute(
      "INSERT INTO contact_form (email, mname, description) VALUES (?, ?, ?)",
      [email, name, description]
    );

    return { success: true };
  } catch (err) {
    console.error("❌ Database error:", err);
    return { success: false, error: "Database error." };
  }
}
