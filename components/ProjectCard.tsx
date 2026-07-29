"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ProjectStatus = "live" | "building" | "discontinued";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  status?: ProjectStatus;
  liveLink?: string;
  githubLink?: string;
};

const statusColorMap: Record<ProjectStatus, string> = {
  live: "bg-green-500",
  building: "bg-yellow-500",
  discontinued: "bg-red-500",
};

const ProjectCard = ({
  image,
  title,
  description,
  status = "live",
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  const statusColor = statusColorMap[status];

  return (
    <div className="h-full group bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition duration-300 flex flex-col overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 md:h-52 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-1 flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

          <div className="flex gap-2 items-center">
            <span className={`w-2 h-2 rounded-full ${statusColor}`} />
            <span className="text-xs text-gray-600 capitalize">{status}</span>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-600 mb-4 flex-1">
          {description}
        </p>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
