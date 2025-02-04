import { motion, AnimatePresence } from "framer-motion";
import coffeImage from "../../assets/black.png";
import bgImage from "../../assets/bg-slate.png"
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
const Hero = () => {
  const [click, setClick] = useState(false)
  
  
  return (
    <main
        className="overflow-x-hidden overflox-y-hidden"
        style={{
            backgroundImage:`url(${bgImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}
    >
      <section className="min-h-[750px] relative w-full">
        <div className="container">
            {/* NabvarSection */}
          <Navbar setClick={setClick} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20">
            {/* text */}
            <div className="text-lightOrange space-y-28">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 150 }}
                    className="text-7xl font-bold leading-tight ml-14 mt-[100px]"
                >
                    Blvck Tumbler
                </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                className="relative z-0"
              >
                <div>
                  <h2 className="text-2xl">Black Lifestyle Lovers,</h2>
                  <p className="text-sm leading-loose opacity-30">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur, cumque eos neque dolorem architecto
                    deserunt quis voluptatibus in quisquam quia ducimus</p>
                </div>
                <div className="w-[250px] h-[180px] absolute z-[-1] -top-6 bg-gray-700/25 -left-5"></div>
              </motion.div>
            </div>
            {/* Image */}
            <div className="relative z-0">
              <div className="place-items-center">
                <motion.img
                    initial={{opacity:0, scale:0,}}
                    whileInView={{opacity:1, scale:1}}
                    viewport={{once:true}}
                    transition={{delay: 0.8, type:"spring",}}
                    src={coffeImage}
                    className="h-[400px] md:min-h-[700px] img-shadow relative"
                    alt=""

                />
              </div>
              <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: 0.8, type:"spring"}}
                className="border-primary border-[18px] h-[150px] w-[150px] rounded-full absolute z-[-1] top-24 right-5"
              >

              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                className="absolute -top-2 left-[52%] z-[-2]"
              >
                <h2 className="font-bold text-[140px] leading-none text-darkGray/40 scale-150">
                  Blvck Tumbler
                </h2>{" "}
              </motion.div>
            </div>
             {/* text */}
            <div className="text-lightOrange space-y-28 hidden lg:block">
              <h1 className="text-7xl font-bold leading-tight ml-14 mt-[200px] opacity-0">
                Blvck Tumbler
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                className="relative z-0"
              >
                <div>
                  <h2 className="text-2xl text-primary">Blvck Tumbler</h2>
                  <p className="text-sm leading-loose opacity-30">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus aspernatur,Delectus aspernatur, Delectus
                    aspernatur,Delectus aspernatur,
                  </p>
                </div>
                <div className="w-[250px] h-[180px] absolute z-[-1] -top-6 bg-darkGray/50 -right-5"></div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <AnimatePresence>
          {click &&(
            <motion.div
            initial={{ x: "110%" }}
            animate={{ x: 0 }}
            exit={{ x: "110%" }} 
            transition={{ type: "spring"}}
            className="w-[140px] bg-gradient-to-b from-primary/80 to-primaryDark/80 absolute top-0 right-0 bottom-0"
          >
            <div className="flex flex-col justify-center items-center gap-6 h-full">
              <div className="w-[0.5px] h-[65px] bg-white"></div>
              <ul className="space-y-6">
                <li className="border border-[white] size-9 flex flex-col justify-center items-center rounded-full">
                  <FaFacebook className="text-xl text-white" />
                </li>
                <li className="border border-[white] size-9 flex flex-col justify-center items-center rounded-full">
                  <FaTwitter className="text-xl text-white" />
                </li>
                <li className="border border-[white] size-9 flex flex-col justify-center items-center rounded-full">
                  <FaInstagram className="text-xl text-white" />
                </li>
              </ul>
              <div className="w-[0.5px] h-[65px] bg-white"></div>
            </div>
          </motion.div>
          )}


        </AnimatePresence>
      </section>
    </main>
  );
};

export default Hero;
