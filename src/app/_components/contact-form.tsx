// components/ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Skickar...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Meddelande skickat!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Något gick fel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Namn"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="E-post"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border p-2"
      />
      <textarea
        name="message"
        placeholder="Meddelande"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border p-2 h-32"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Skicka
      </button>
      <p>{status}</p>
    </form>
  );
}