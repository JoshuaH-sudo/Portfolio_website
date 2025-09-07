"use client";
import useScreen from "@/components/hooks/useScreen";
import Email from "@/components/svgs/email";
import Github from "@/components/svgs/github";
import LinkedIn from "@/components/svgs/linked-in";
import { BackgroundLines } from "@/components/ui/background-lines";
import { GlareCard } from "@/components/ui/glare-card";
import { useAppStore } from "@/providers/app-store-provider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const staggerDuration = 0.5; // Base stagger time
const ContactPage = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  const { resolvedTheme } = useTheme();
  const { isMobile } = useScreen();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by using fallback color until mounted
  // Use a neutral gray color as fallback that works on both themes
  const iconColor = mounted ? (resolvedTheme === "dark" ? "white" : "black") : "#666666";
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#contact")}
    >
      <BackgroundLines>
        <div
          id="contact"
          className="page flex flex-col items-center justify-center gap-2"
        >
          <h1 className="mb-2 whitespace-nowrap">Want to get in touch?</h1>
          <motion.div
            initial={{ scale: 1, opacity: 0.9 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <div className="expand h-40 w-40 md:h-96 md:w-96">
              <DotLottieReact src="/lottie/profile-pic.json" loop autoplay />
            </div>
          </motion.div>
          <div className="mt-2 flex flex-col items-center justify-center md:mt-10">
            <h4>You can find me here!</h4>
            <div
              id="socials"
              className="breath flex items-center justify-center gap-2"
            >
              <a
                href="https://www.linkedin.com/in/joshua-hoban/"
                target="_blank"
                className="expand"
              >
                <LinkedIn
                  width={60}
                  height={60}
                  fill={iconColor}
                />
              </a>
              <a
                href="https://github.com/JoshuaH-sudo?tab=repositories"
                target="_blank"
                className="expand"
              >
                <Github
                  width={60}
                  height={60}
                  fill={iconColor}
                />
              </a>
              <a href="mailto:joshua_hoban@proton.me" className="expand">
                <Email
                  width={60}
                  height={60}
                  fill={iconColor}
                />
              </a>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </motion.div>
  );
};

export default ContactPage;
