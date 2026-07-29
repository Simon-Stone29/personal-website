"use client";

import Script from "next/script";

import BatmanTurnaround from "@/components/BatmanTurnaround";

export default function Playground() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 gap-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Playground</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Aside from coding, I like the creative aspects of 3D modeling in
          softwares like Blender. Here is some of my work:
        </p>
      </div>

      <div className="w-full max-w-2xl bg-black rounded-xl p-8">
        <BatmanTurnaround />
      </div>

      <div className="max-w-2xl w-full">
        <model-viewer
          src="/models/siena.glb"
          alt="Siena Hall 3D model"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "600px" }}
        />
      </div>
      <div className="max-w-2xl w-full">
        <model-viewer
          src="/models/Batman3dPrint.glb"
          alt="Batman 3D model"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "600px" }}
        />
      </div>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}