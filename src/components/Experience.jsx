import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets/assets";
function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl font-semibold">Work <span className="text-green-500">Experience</span></h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My learning journey and experience in frontend development,
            React, and problem solving.
          </p>
        </motion.div> 

        {/* Experience Cards */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-700"></div>

          <div className="space-y-12">
            {workData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x:50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                viewport={{ once: false }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                <div
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950
                  ${
                    item.color === "green"
                      ? "bg-purple-500"
                      : item.color === "pink"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                ></div>

                {/* Card */}
                <div className="ml-10 md:ml-0 w-full md:w-[45%]">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>

                      <span className="text-med text-green-400">
                        {item.duration}
                      </span>
                    </div>

                    <h4 className="text-gray-300 text-xl font-semibold mb-3">
                      {item.company}
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;