"use client";

import { contactaction } from "./contact.action";
import { useActionState } from "react";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(contactaction, null);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="border-2 border-red-100 bg-white p-6 rounded shadow-lg">
        <h1 className="font-bold text-xl mb-4 text-center text-black">
          Get In Touch
        </h1>

        {/* ✅ Removed method="post" */}
        <form action={formAction} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="p-2 border rounded w-64 text-black focus:outline-blue-500"
            required
          />  
          <input
            type="text"
            placeholder="Enter Your Name"
            name="mname"
            className="p-2 border rounded w-64 text-black focus:outline-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Enter Your Comment"
            name="description"
            className="p-2 border rounded w-64 text-black focus:outline-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className="p-2 bg-blue-500 text-white rounded w-32 self-center hover:bg-blue-600 transition disabled:opacity-50"
          >
            {isPending ? <span>Loading...</span> : <span>Send Message</span>}
          </button>
        </form>

        {/* ✅ Show success/error message */}
        {state && (
          <p
            className={`p-4 mt-5 text-center rounded ${
              state.success ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {state.success
              ? "Message sent successfully!"
              : state.error || "An error occurred."}
          </p>
        )}
      </div>
    </div>
  );
}
