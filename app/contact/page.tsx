"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // 👇 Replace this with the Access Key you got from Web3Forms
    formData.append("access_key", "bf34ed09-60bf-45fd-9540-7dc6ef672423");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Have a question or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 text-orange-500 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-500 text-sm">dranzerfit@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 text-orange-500 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-500 text-sm">+91 00000 00000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 text-orange-500 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-500 text-sm">Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  Thanks for reaching out — we&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 transition-colors text-white font-semibold px-6 py-3 rounded-xl"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}