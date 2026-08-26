import React from "react";

const ProjectCard = ({ title, image, description, tech }) => {
  return (
    <div
      className="bg-gray-800 rounded-2xl overflow-hidden
      hover:-translate-y-2 transition duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full
              bg-green-500/20 text-purple-300 border border-green-500/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;