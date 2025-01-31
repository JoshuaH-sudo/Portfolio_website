"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EverVault = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomJSCode(15000);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5",
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full font-mono text-xs font-bold break-words whitespace-pre-wrap text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
const jsKeywords = [
  "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield"
];

const jsIdentifiers = [
  "foo", "bar", "baz", "qux", "quux", "corge", "grault", "garply", "waldo", "fred", "plugh", "xyzzy", "thud"
];

const jsOperators = ["+", "-", "*", "/", "=", "==", "===", "&&", "||", "!", ">", "<", ">=", "<="];

const symbols = ["(", ")", "{", "}", "[", "]", ";", ","];

const generateRandomJSCode = (length: number) => {
  let result = "";
  let depth = 0;

  const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  for (let i = 0; i < length; i++) {
    const rand = Math.random();
    if (rand < 0.05 && depth > 0) {
      result += "} ";
      depth--;
    } else if (rand < 0.1) {
      result += getRandomElement(symbols) + " ";
    } else if (rand < 0.15) {
      result += getRandomElement(jsOperators) + " ";
    } else if (rand < 0.2) {
      result += "console.log('" + getRandomElement(jsIdentifiers) + "'); ";
    } else if (rand < 0.25) {
      result += getRandomElement(jsIdentifiers) + " ";
    } else if (rand < 0.3) {
      result += getRandomElement(jsKeywords) + " ";
    } else if (rand < 0.35) {
      result += "function " + getRandomElement(jsIdentifiers) + "() { ";
      depth++;
    } else if (rand < 0.4) {
      result += "if (" + getRandomElement(jsIdentifiers) + " " + getRandomElement(jsOperators) + " " + getRandomElement(jsIdentifiers) + ") { ";
      depth++;
    } else if (rand < 0.45) {
      result += "for (let " + getRandomElement(jsIdentifiers) + " = 0; " + getRandomElement(jsIdentifiers) + " < " + Math.floor(Math.random() * 10) + "; " + getRandomElement(jsIdentifiers) + "++) { ";
      depth++;
    } else if (rand < 0.5) {
      result += "while (" + getRandomElement(jsIdentifiers) + " " + getRandomElement(jsOperators) + " " + getRandomElement(jsIdentifiers) + ") { ";
      depth++;
    } else if (rand < 0.55) {
      result += "switch (" + getRandomElement(jsIdentifiers) + ") { case " + getRandomElement(jsIdentifiers) + ": console.log('" + getRandomElement(jsIdentifiers) + "'); break; ";
      depth++;
    } else if (rand < 0.6) {
      result += "Math." + getRandomElement(["abs", "ceil", "floor", "max", "min", "random", "round", "sqrt"]) + "(" + getRandomElement(jsIdentifiers) + "); ";
    } else if (rand < 0.65) {
      result += "Array.prototype." + getRandomElement(["push", "pop", "shift", "unshift", "slice", "splice", "forEach", "map", "filter", "reduce"]) + ".call(" + getRandomElement(jsIdentifiers) + ", " + getRandomElement(jsIdentifiers) + "); ";
    } else {
      result += getRandomElement(jsIdentifiers) + " ";
    }
  }

  while (depth > 0) {
    result += "} ";
    depth--;
  }

  return result.trim();
};

// const generateRandomJSCode = (length: number) => {
//   let result = "";
//   let depth = 0;

//   const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

//   for (let i = 0; i < length; i++) {
//     const rand = Math.random();
//     if (rand < 0.05 && depth > 0) {
//       result += "} ";
//       depth--;
//     } else if (rand < 0.1) {
//       result += getRandomElement(symbols) + " ";
//     } else if (rand < 0.15) {
//       result += getRandomElement(jsOperators) + " ";
//     } else if (rand < 0.2) {
//       result += getRandomElement(jsIdentifiers) + " ";
//     } else if (rand < 0.25) {
//       result += getRandomElement(jsKeywords) + " ";
//     } else if (rand < 0.3) {
//       result += "function " + getRandomElement(jsIdentifiers) + "() { ";
//       depth++;
//     } else if (rand < 0.35) {
//       result += "if (" + getRandomElement(jsIdentifiers) + " " + getRandomElement(jsOperators) + " " + getRandomElement(jsIdentifiers) + ") { ";
//       depth++;
//     } else if (rand < 0.4) {
//       result += "switch (" + getRandomElement(jsIdentifiers) + ") { case " + getRandomElement(jsIdentifiers) + ": break; ";
//       depth++;
//     } else {
//       result += getRandomElement(jsIdentifiers) + " ";
//     }
//   }

//   while (depth > 0) {
//     result += "} ";
//     depth--;
//   }

//   return result.trim();
// };

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
