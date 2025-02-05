import coffeCover from "@/assets/coffee-cover.jpg";
import appStore from "@/assets/app_store.png";
import playStore from "@/assets/play_store.png";
import { motion } from "framer-motion";

const bgImage = {
  backgroundImage: `url(${coffeCover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // ajusta el delay entre hijos, aparecen de uno en uno
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

const DownloadTheApp = () => {
  return (
    <section className="my-14">
      <div className="container">
        <div
          style={bgImage}
          className="rounded-xl sm:min-h-[400px] sm:flex sm:justify-end sm:items-center"
        >
          {/* content */}
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-5 text-center max-w-lg"
          >
            <motion.h2
              variants={childrenVariants}
              className="font-semibold text-2xl sm:text-4xl"
            >
              Download the app
            </motion.h2>

            <motion.p variants={childrenVariants} className="px-20">
              Lorem ipsum dolor sit amet consedolor sit amet consectetur
              adipisicing elit. Officiis
            </motion.p>
            <motion.div
              variants={parentVariants}
              className="flex justify-center items-center gap-4"
            >
              <a href="#">
                <motion.img
                  variants={childrenVariants}
                  src={appStore}
                  className="w-[120px] sm:w-[150px]"
                  alt=""
                />
              </a>
              <a href="#">
                <motion.img
                  variants={childrenVariants}
                  src={playStore}
                  className="w-[120px] sm:w-[150px]"
                  alt=""
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadTheApp;
