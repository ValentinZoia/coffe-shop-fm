import { motion } from "framer-motion";
import mapImage from "@/assets/world-map.png";

const WhereToBuy = () => {
  return (
    <section className="py-36">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 place-items-center">
          {/* form section */}
          <form className="space-y-7">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="font-bold text-4xl font-serif text-darkGray"
              viewport={{once:true}}
            >
              Buy our products from anywhere
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.4 }}
              className="flex gap-4"
              viewport={{once:true}}
            >
              <input
                type="text"
                placeholder="Name"
                className="input-style w-full lg:w-[150px]"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-style w-full lg:w-[150px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.6 }}
              className="flex gap-4"
              viewport={{once:true}}
              
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full lg:w-[150px]"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="w-full btn-style"
              viewport={{once:true}}
            >
              Order Now
            </motion.button>
          </form>
          {/* map section */}
          <div className="col-span-2">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
              src={mapImage}
              className="w-full sm:w-[500px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
