import React, { useState } from "react";

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your actual bot token and chat ID
    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const message = `
📌 *New Consultation Request* 📌
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
💬 *Message:* ${formData.message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" }),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="bg-gray-200 py-12 px-4">

<div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#0a043c] uppercase relative inline-block">
        Request Consultation
          {/* Underline */}
          <span className="block w-16 h-[3px] bg-[#0a043c] mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>


      <div className="max-w-4xl mx-auto">
      

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Message Field */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="p-4 border border-gray-300 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white py-3 px-8 hover:border hover:border-black hover:text-black hover:bg-white transition"
            >
              CONTACT US
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
