import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="w-full bg-[url('/planes_cover.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">

      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, stiffness: 100 }}
          className="flex flex-col items-center bg-black/60 rounded-2xl p-4 text-white shadow-lg shadow-black/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Image
              src={assets.profile_img}
              alt=""
              className="rounded-full w-32 shadow-xl"
            />
          </motion.div>
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
          >
            Hi! I'm Imam Fauji{" "}
            <Image src={assets.hand_icon} alt="" className="w-6" />
          </motion.h3>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
          >
            Fullstack Web Developer based in Indonesia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto font-Ovo"
          >
            I am a fullstack web developer from Salatiga, Indonesia with have
            strong problemsolving skills and realiable partner to work with in a
            team.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-10 py-3 border border-white/20 rounded-full bg-black text-white flex items-center gap-2 
            dark:bg-gray-800 hover:bg-gray-700 hover:shadow-md duration-500"
            >
              contact me
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </motion.a>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="/sample-resume.pdf"
              download
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white 
            dark:text-black hover:bg-gray-100 hover:shadow-md duration-500"
            >
              my resume
              <Image src={assets.download_icon} alt="" className="w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
