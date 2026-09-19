import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HandwritingSvg } from '@/components/ui/handwriting-svg';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f7f3ea] dark:bg-[#171412] select-none cursor-pointer"
      onClick={onComplete}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center">
        <HandwritingSvg
          text="Hello"
          width={340}
          height={170}
          fontSize={78}
          strokeWidth={2.2}
          duration={6.0}
          delay={0.2}
          ease="easeOut"
          className="text-[#5d3c2a] dark:text-[#ede2d5]"
          strokeClassName="stroke-[#5d3c2a] dark:stroke-[#ede2d5]"
        />
      </div>
    </motion.div>
  );
};
