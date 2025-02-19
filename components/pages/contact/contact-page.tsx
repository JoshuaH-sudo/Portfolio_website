"use client";
import Email from "@/components/svgs/email";
import { BackgroundLines } from "@/components/ui/background-lines";
import { GlareCard } from "@/components/ui/glare-card";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ContactPage = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  const { resolvedTheme } = useTheme();
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#contact")}
      className="relative"
    >
      <BackgroundLines>
        <div
          id="contact"
          className="flex h-screen flex-col items-center justify-center gap-2 page"
        >
          <h1>Want to get in touch?</h1>
          <GlareCard>
            <Image
              src="/images/josh-card.png"
              alt="me"
              width={372}
              height={520}
            />
          </GlareCard>
          <div className="mt-10 flex h-screen flex-col items-center justify-center">
            <h4>You can find me here!</h4>
            <div
              id="socials"
              className="flex items-center justify-center gap-2"
            >
              <a
                href="https://www.linkedin.com/in/joshua-hoban/"
                target="_blank"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src={`/images/icons/${resolvedTheme === "dark" ? "linkedIn-white.png" : "linkedIn.png"}`}
                  width={50}
                  height={50}
                  alt="linkedIn"
                />
              </a>
              <a
                href="https://github.com/JoshuaH-sudo?tab=repositories"
                target="_blank"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src={`/images/icons/${resolvedTheme === "dark" ? "github-white.png" : "github.png"}`}
                  width={50}
                  height={50}
                  alt="github"
                />
              </a>
              <a
                href="mailto:joshua_hoban@proton.me"
                className="transition-transform hover:scale-110"
              >
                <Email
                  width={50}
                  height={50}
                  fill={resolvedTheme === "dark" ? "white" : "black"}
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
