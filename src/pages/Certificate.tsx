import React, { useState } from "react";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import "./Certificate.css";
import Certificate from "../asset/certificate.png";
import { useLocation } from "react-router-dom";

const CertificateWithName = () => {
  const location = useLocation();
  const [showCelebration, setShowCelebration] = useState(true);
  const { name } = location.state || { name: "Default Name" };

  const downloadImage = async () => {
    try {
      const certificate = document.getElementById("certificate");
      if (!certificate) return;

      // Delay to ensure all elements render
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(certificate);
      const imgData = canvas.toDataURL("image/png");

      // Create a link element, set it to download, and trigger it
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "certificate.png";
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto p-8">
      {/* Celebration Effects */}
      {showCelebration && (
        <>
          {/* Firework Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="firework left-1/4 animate-firework1"></div>
            <div className="firework left-2/4 animate-firework2"></div>
            <div className="firework left-3/4 animate-firework3"></div>
          </div>

          {/* Falling Confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full animate-confetti`}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1"][
                    Math.floor(Math.random() * 4)
                  ],
                }}
              ></div>
            ))}
          </div>
        </>
      )}

      {/* Certificate Container */}
      <div
        id="certificate"
        className="relative"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
      >
        <img
          src={Certificate}
          alt="Certificate Template"
          className="w-full select-none" // Disable text selection and drag
          onDragStart={(e) => e.preventDefault()} // Prevent image dragging
          onError={(e) => {
            console.error("Error loading image:", e);
            e.currentTarget.src = "fallback-image-url"; // Optional: Add a fallback image
          }}
        />

        {/* Name Overlay */}
        <div className="absolute left-0 right-0 top-[42%] text-center select-none">
            <h2 className="text-sm md:text-4xl sacramento-regular text-amber-800 font-serif italic px-4 md:pt-4 animate-fadeIn">
            {name}
            </h2>
        </div>
      </div>
    </div>
  );
};

export default CertificateWithName;
