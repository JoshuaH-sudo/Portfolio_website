"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useAppStore } from "@/providers/app-store-provider";
import { motion } from "motion/react";
import Image from "next/image";

const ContactPage = () => {
  const { onViewPortEnter } = useAppStore((state) => state);
  return (
    <motion.div
      viewport={{ amount: 0.8 }}
      onViewportEnter={() => onViewPortEnter("#contact")}
      className="relative"
    >
      <BackgroundLines>
        <div
          id="contact"
          className="flex h-screen flex-col items-center justify-center gap-2"
        >
          <h1>Want to get in touch?</h1>
          <CardContainer className="inter-var" containerClassName="p-0">
            <Image
              src="/images/josh-card.png"
              alt="me"
              width={372}
              height={520}
            />
          </CardContainer>
          <div className="flex h-screen flex-col items-center justify-center">
            <h4>You can find me here!</h4>
            <div
              id="socials"
              className="flex items-center justify-center gap-2"
            >
              <a
                href="https://www.linkedin.com/in/joshua-hoban/"
                target="_blank"
              >
                <Image
                  src="/images/icons/linkedIn.png"
                  width={50}
                  height={50}
                  alt="linkedIn"
                />
              </a>
              <a
                href="https://github.com/JoshuaH-sudo?tab=repositories"
                target="_blank"
              >
                <Image
                  src="/images/icons/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </a>
              <a href="mailto:joshua_hoban@proton.me">
                <Image
                  src="/images/icons/mail.svg"
                  width={50}
                  height={50}
                  alt="e-mail"
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
