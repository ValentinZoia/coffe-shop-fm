

import { FaPhone } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import footerImage from "../../assets/credit-cards.webp";
import { FaFacebook, FaInstagram, FaTelegram, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-primaryDark to-primary text-white ">
      <div className="container mt-12 py-12">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b-2 border-white pb-8"
        >
          {/* Details section */}
          <motion.div variants={childVariants} className="space-y-6 " viewport={{once:true}}>
            <h2 className="text-4xl font-bold uppercase">Coders Cafe</h2>
            <p className="max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <FaPhone />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapLocation />
                <span>Noida, Uttar Pradesh</span>
              </div>
            </div>
          </motion.div>

          {/* Links section */}
          <motion.div variants={childVariants} className="space-y-6 " viewport={{once:true}}>
            <h2 className="text-4xl font-bold uppercase">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="flex flex-col gap-3">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col gap-3">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social media section */}
          <motion.div variants={childVariants} className="space-y-6 " viewport={{once:true}}>
            <h2 className="text-4xl font-bold uppercase">Follow Us</h2>
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <FaFacebook className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </li>
                <li>
                  <FaInstagram className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </li>
                <li>
                  <FaTelegram className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </li>
                <li>
                  <FaGoogle className="text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <span>Payment Methods</span>
              <img src={footerImage} className="w-[80%]" alt="" />
            </div>
          </motion.div>
        </motion.div>
        <p className="pt-8 text-center">
          Copyright © 2025 Morning Roast. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;