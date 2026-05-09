import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import { BsSendFill } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        "service_ny0otir",
        "template_s44pfbu",
        formRef.current,
        "kik_fA8L8cdR8JK_G",
      )
      .then(
        () => {
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully ✅");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.dismiss(loadingToast);
          toast.error("Failed to send message ❌");
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-berkshire text-slate-900">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* MAP */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl group"
          >
            <iframe
              src="https://www.google.com/maps?q=11.0270673,78.0655670&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location"
              className="absolute inset-0 w-full h-full transition duration-700 group-hover:scale-110"
            />

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col space-y-8">
            {/* CONTACT INFO */}
            <div className="grid gap-4 text-zinc-900">
              {[
                {
                  icon: <HiOutlineMapPin />,
                  title: "Location",
                  detail:
                    "170/B Merkkur, Kalipalayam Road, Manmangalam, Karur - 639006",
                },
                {
                  icon: <HiOutlinePhone />,
                  title: "Phone",
                  detail: "+91 98653 90925",
                },
                {
                  icon: <HiOutlineEnvelope />,
                  title: "Email",
                  detail: "karuppiahsirpi69@gmail.com",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition duration-300 group"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-white rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-md text-zinc-900  font-bold tracking-normal">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium text-slate-800 tracking-tight">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 bg-slate-50 p-8 rounded-[2.5rem] shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="mail@example.com"
                  required
                  className="w-full px-5 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                required
                className="w-full px-5 py-3 border rounded-2xl min-h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className={`w-full px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-white font-semibold transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg"
                }`}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <BsSendFill />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
