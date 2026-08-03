"use client";

import Script from "next/script";

import BatmanTurnaround from "@/components/BatmanTurnaround";
import LegoTurnaround from "@/components/LegoTurnaround";
import ArtTurnaround from "@/components/ArtTurnaround";
import LesPaulTurnaround from "@/components/LesPaulTurnaround";
export default function Playground() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 gap-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Playground</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Aside from coding, I like the creative aspects of 3D modeling, animation, and rendering in
          softwares like Blender. Here is some of my work:
        </p>
      </div>

      <h3>Batman Animated Sculpt</h3>
      <div className="w-full max-w-2xl bg-black rounded-xl p-8">
        <BatmanTurnaround />
      </div>
      <h3>Les Paul Guitar Model</h3>
            <div className="w-full max-w-2xl bg-black rounded-xl p-8">
        <LesPaulTurnaround/>
      </div>
      <h3>Siena Hall Lego Model</h3>
            <div className="w-full max-w-2xl bg-black rounded-xl p-8">
        <LegoTurnaround/>
      </div>
      <h3>Art the Clown Sculpt</h3>
            <div className="w-full max-w-2xl bg-black rounded-xl p-8">
        <ArtTurnaround/>
      </div>
{/*             <div className="max-w-2xl w-full">
        <model-viewer
          src="/models/Batman3dPrint.glb"
          alt="Batman 3D model"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "600px" }}
        />
      </div> */}
      <h3>Dinosaur VFX Breakdown</h3>
      <div className="w-full max-w-2xl bg-black rounded-xl overflow-hidden shadow-xl border border-neutral-800">
        <video
          className="w-full h-auto cursor-pointer"
          controls
          preload="metadata"
          playsInline
        >
          <source src="/DinosaurBreakdown.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}