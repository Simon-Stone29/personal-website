"use client";

import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

type ProjectDetailProps = {
  title: string;
  tagline: string;
  description: string;
  techStack: { name: string; category: "frontend" | "backend" | "database" | "deployment" | "other" }[];
  features?: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  expandableSections?: {
    title: string;
    content: React.ReactNode;
  }[];
};

const techCategoryColors = {
  frontend: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  backend: "bg-green-500/20 text-green-300 border-green-500/30",
  database: "bg-red-500/20 text-red-300 border-red-500/30",
  deployment: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  other: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function ProjectDetail({
  title,
  tagline,
  description,
  techStack,
  features,
  liveLink,
  githubLink,
  image,
  expandableSections = [],
}: ProjectDetailProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">{title}</h1>
          <p className="text-xl text-white/70 mb-6">{tagline}</p>

          <div className="flex gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Screenshot/Demo */}
        {image && (
          <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full" />
          </div>
        )}

        {/* Overview */}
        <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
          <p className="text-white/70 leading-relaxed">{description}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${techCategoryColors[tech.category]}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {features && features.length > 0 && (
          <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="text-white/70 flex items-start">
                  <span className="text-white/40 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expandable Sections */}
        {expandableSections.map((section, index) => (
          <div key={index} className="mb-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
              <ChevronDown
                className={`w-5 h-5 text-white/60 transition-transform ${
                  expandedSections.has(index) ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedSections.has(index) ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 text-white/70 border-t border-white/10 pt-4">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
