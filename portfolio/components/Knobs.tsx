"use client";

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import UseAnimations from "react-useanimations";
import settings2 from "react-useanimations/lib/settings2";

export default function Knobs() {
  const [isOpen, setIsOpen] = useState(false);
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Floating Button */}
      <button
        className="btn btn-primary w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <UseAnimations animation={settings2} size={200} strokeColor="black" autoplay  />
      </button>

      {/* Expandable Panel */}
      {isOpen && (
        <div className="absolute bottom-14 right-4 p-4 shadow-md rounded-lg w-48 border bg-white">
          <h3 className="text-lg font-semibold">Settings</h3>

          {/* Theme Selector */}
          <div className="mt-2">
            <label className="block text-sm font-medium">Theme</label>
            <DarkModeToggle />
          </div>

          {/* Text Color Selector */}
          <div className="mt-2">
            <label className="block text-sm font-medium">Text Color</label>
            <select
              className="w-full mt-1 p-2 border rounded"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            >
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
