"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { EverVault } from "../ui/EverVault";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div id="home">
      <div className="relative flex h-screen flex-col items-center justify-center">
        <EverVault>
          <div className="relative flex h-screen flex-col items-center justify-center">
            <h1>Joshua Hoban</h1>
            <h2>Front-end Specialized Full-stack Freelance Developer.</h2>
            <Image
              src="/images/profile.png"
              width={322}
              height={322}
              alt="profile photo"
            />
          </div>
        </EverVault>
        <div
          className="absolute bottom-0"
          style={{ width: "100px", height: "100px" }}
        >
          <DotLottieReact src="/lottie/arrow-indicator.json" loop autoplay />
        </div>
      </div>
    </div>
  );
};
