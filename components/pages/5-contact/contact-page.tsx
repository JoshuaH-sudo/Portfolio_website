"use client";
import useScreen from "@/components/hooks/useScreen";
import Email from "@/components/svgs/email";
import { BackgroundLines } from "@/components/ui/background-lines";
import { GlareCard } from "@/components/ui/glare-card";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";

const staggerDuration = 0.5; // Base stagger time
const ContactPage = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  const { resolvedTheme } = useTheme();
  const { isMobile } = useScreen();
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
          <GlareCard>
            <Image
              src="/images/josh-card.png"
              alt="me"
              width={372}
              height={520}
            />
          </GlareCard>
          <div className="mt-2 flex flex-col items-center justify-center md:mt-10">
            <h4>You can find me here!</h4>
            <div
              id="socials"
              className="breath flex items-center justify-center gap-2"
            >
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  delay: 1 * staggerDuration,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <a
                  href="https://www.linkedin.com/in/joshua-hoban/"
                  target="_blank"
                  className="expand"
                >
                  <Image
                    src={`/images/icons/${resolvedTheme === "dark" ? "linkedIn-white.png" : "linkedIn.png"}`}
                    width={50}
                    height={50}
                    alt="linkedIn"
                  />
                </a>
              </motion.div>
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  delay: 2 * staggerDuration,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <a
                  href="https://github.com/JoshuaH-sudo?tab=repositories"
                  target="_blank"
                  className="expand"
                >
                  <Image
                    src={`/images/icons/${resolvedTheme === "dark" ? "github-white.png" : "github.png"}`}
                    width={50}
                    height={50}
                    alt="github"
                  />
                </a>
              </motion.div>
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  delay: 3 * staggerDuration,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <a href="mailto:joshua_hoban@proton.me" className="expand">
                  <Email
                    width={60}
                    height={60}
                    fill={resolvedTheme === "dark" ? "white" : "black"}
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </motion.div>
  );
};

export default ContactPage;
