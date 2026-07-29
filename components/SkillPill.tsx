"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillPillProps = {
  skillName: string;
  icon?: React.ReactNode;
};

const SkillPill = ({ skillName, icon }: SkillPillProps) => {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-sm flex items-center gap-2 w-fit cursor-pointer overflow-hidden hover:bg-white/10 hover:border-white/20 transition-colors"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {icon && (
        <div className="w-4 h-4 md:w-5 md:h-5 relative flex-shrink-0 overflow-hidden">
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>

          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { y: "100%", opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        </div>
      )}

      <span className="font-medium whitespace-nowrap text-white">{skillName}</span>
    </motion.div>
  );
};

export default SkillPill;
