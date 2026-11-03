import { cn } from "@/lib/utils";
import React from "react";






export const Component = ({ className, text = "LOADING..." }) => {
  return (
    <div className={cn("relative flex items-center justify-center p-8", className)}>
      {/* Background Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-red-600/10 blur-[60px] pointer-events-none animate-pulse"></div>

      {/* Main 3D Cylinder Plate */}
      <div className="pl">
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__text">{text}</div>
      </div>
    </div>);

};

export const ThreeDEffectLoader = Component;
export default Component;