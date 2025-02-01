"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { EverVault } from "../../ui/ever-vault";
import Image from "next/image";
import BackgroundBeams from "@/components/ui/background-beams";

export const HomePage = () => {
  return (
    <div
      id="home"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      <EverVault>
        <div className="relative flex h-screen flex-col items-center justify-center">
          <h1>Joshua Hoban</h1>
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
      </EverVault>
      <div
        className="absolute bottom-0"
        style={{ width: "100px", height: "100px" }}
      >
        <DotLottieReact src="/lottie/arrow-indicator.json" loop autoplay />
      </div>
      <BackgroundBeams />
    </div>
  );
};
