"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[18]" : "lg:flex-[0.5] flex-[4]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden rounded-[24px]`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 sm:pt-[19.5px] p-[0.9rem] sm:p-8 h-[100%] sm:h-auto flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] rounded-t-[24px] lg:rounded-t-[0]">
        <div
          className={`${styles.flexCenter} lg:static absolute bottom-0 right-1 w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[24px] glassmorphism mb-[10px] sm:mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className=" object-contain w-1/2 h-1/2"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[10px] sm:mt-[24px] font-semibold text-[22px] sm:text-[30px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
