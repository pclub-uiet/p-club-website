import React from "react";
import { Github, Linkedin } from "lucide-react";

const Card = ({ member }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 flex flex-col items-center space-y-4 hover:shadow-xl">
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center space-y-1 w-full">
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        {member.position && (
          <p className="text-sm text-gray-600 font-medium bg-gray-100 rounded-full px-3 py-1 inline-block">
            {member.position}
          </p>
        )}
      </div>

      <div className="flex space-x-4 mt-2">
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={22} />
          </a>
        )}
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
