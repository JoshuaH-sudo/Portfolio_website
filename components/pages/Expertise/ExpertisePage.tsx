"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };
const logos = [
  "react",
  "react-native",
  "nodejs",
  "next-js",
  "typescript",
  "tailwind-css",
  "docker",
  "mongodb",
  "postgresql",
];
const ExpertisePage = () => {
  return (
    <div
      id="expertise"
      className="flex h-screen flex-col items-center justify-start"
    >
      <h1>Expertise</h1>
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        {logos.map((logo) => (
          <motion.div
            key={logo}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.95 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.5}
            style={circle}
            drag
          >
            <div
              style={{
                pointerEvents: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={`/images/logos/${logo}.svg`}
                width={100}
                height={100}
                alt={logo}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const circle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#9911ff",
  width: 150,
  height: 150,
  borderRadius: 10000,
  padding: 10,
};

export default ExpertisePage;
