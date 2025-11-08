import { motion } from "motion/react";

interface AnimatedTextProps {
  word: string;
}

export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

function AnimatedText({ word }: AnimatedTextProps) {
  return (
    <motion.p
      className="mb-6 text-balance font-bold text-7xl text-secondary tracking-tight md:text-4xl lg:text-8xl"
      key={word}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
    >
      {word.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

export { AnimatedText };
