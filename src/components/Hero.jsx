import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/assets/profile.jpeg";

function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="home"
            className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                {/* Left Side */}
                <div className="md:w-1/2 mb-10 md:mb-0">

                    <h1 className="text-white text-4xl font-bold md:text-6xl mb-4">
                        Hi, I'm{" "}
                        <span className="text-purple-500">
                            Honey Aswani
                        </span>
                    </h1>

                    {/* Typing Animation */}
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-purple-500">
                        <TypeAnimation
                            sequence={[
                                "Aspiring Full Stack Developer",
                                2000,
                                "Mern Stack Developer",
                                2000,
                                "Frontend Developer",
                                2000,
                                "Bakend Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>

                    <p className="text-lg text-gray-400 mb-8">
                        I build modern, responsive web experiences using
                        React, JavaScript, and modern web technologies.
                    </p>

                    <div className="flex space-x-4">

                        <a
                            className="px-6 py-3 bg-purple-500 rounded-lg font-medium
                            hover:bg-purple-700 transition duration-300"
                            href="#project"
                        >
                            View Work
                        </a>

                        <a
                            className="px-6 py-3 bg-purple-500 rounded-lg font-medium
                            hover:bg-purple-700 transition duration-300"
                            href="#contacts"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>


                {/* Right Side Image */}
                <div className="md:w-1/2 flex justify-center">

                    <div className="relative w-64 h-64 md:w-80 md:h-80">

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-300">

                            <motion.img
                                animate={{ y: [0, -25, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                className="relative rounded-full w-64 h-64 md:h-80 md:w-80 object-cover"
                                src={profile}
                                alt="profile"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    );
}

export default Hero;