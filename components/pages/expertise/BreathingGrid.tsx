import { motion } from "framer-motion";
import Image from "next/image";

const staggerDuration = 0.5; // Base stagger time

const BreathingGrid = ({ logos }: { logos: string[] }) => {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const columns = isMobile ? 4 : 3; // Adjust to match your grid cols
  const rows = Math.ceil(logos.length / columns);

  return (
    <div
      id="tools"
      className="grid my-auto grid-cols-4 items-start gap-2 pr-2 md:grid-cols-3 md:gap-5 md:pr-0"
    >
      {logos.map((logo, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const diagonalIndex = row + col; // Determines wave sequence

        return (
          <motion.div
            key={logo}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              delay: diagonalIndex * staggerDuration,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.3}
            className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-black bg-white p-2 shadow-lg md:h-30 md:w-30"
          >
            <div className="pointer-events-none flex items-center justify-center p-1">
              <Image
                src={`/images/logos/${logo}.svg`}
                width={80}
                height={80}
                alt={logo}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BreathingGrid;