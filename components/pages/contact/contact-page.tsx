"use client";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";

const ContactPage = () => {
  const { setActiveTab } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => setActiveTab("#contact")}
    >
      <div id="contact" className="flex h-screen justify-center items-center">
        <h1>Contact</h1>
      </div>
    </motion.div>
  );
};

export default ContactPage;
