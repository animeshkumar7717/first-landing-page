/** @format */
"use client";
import React from "react";

interface ButtonProps extends React.PropsWithChildren {
  className?: string;
  type?: "button" | "submit" | "reset"; // Add type prop to handle form actions
  onClick?: () => void; // Add onClick prop for click events
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  onClick, // Accept onClick prop
}) => {
  return (
    <button
      type={type} // Use the type prop
      className={`relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ${
        className || ""
      }`}
      onClick={onClick} // Attach the onClick handler
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};

export default Button;
