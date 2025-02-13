"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import BackgroundBeams from "@/components/ui/background-beams";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import { useAppStore } from "@/providers/app-store-provider";

export const HomePage = () => {
  const { setActiveTab } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => setActiveTab("#home")}
    >
      <div
        id="home"
        className="relative flex h-screen flex-col items-center justify-center"
        // When the user scrolls to this section set the active tab to home
      >
        <div className="relative z-10 flex h-screen flex-col items-center justify-center">
          <h1>Joshua Hoban.</h1>
          <h2>Front-end Specialized Full-stack Freelance Developer.</h2>
          <div
            style={{
              width: "322px",
              height: "322px",
            }}
          >
            <DotLottieReact src="/lottie/profile-pic.json" loop autoplay />
          </div>
        </div>
        <div
          className="absolute bottom-0"
          style={{ width: "100px", height: "100px" }}
        >
          <DotLottieReact src="/lottie/arrow-indicator.json" loop autoplay />
        </div>
        <Footer />
        <BackgroundBeams />
      </div>
    </motion.div>
  );
};
