import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

interface NavbarProps {
    setClick: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({setClick}:NavbarProps) => {
  return (
    <motion.nav
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3, type:"spring", stiffness:100}}
        className="absolute left-0 top-0 w-full pt-10 z-[9999]"
    >
        <div className="container">
            <div className="text-white flex justify-between items-center">
            <img
              
              src={logoImage}
              className="w-[100px]"
              alt=""
            />
                <div>
                    <GiHamburgerMenu onClick={() => setClick((prev)=> !prev)} className="cursor-pointer text-3xl" />
                </div>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar