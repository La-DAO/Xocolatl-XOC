import React from "react";
import { InfoTagProps } from "@/types/assets/assets";

/**
 * InfoTag component to display information tags with optional click functionality.
 * @param className Additional class names for styling.
 * @param children The content to be displayed inside the tag.
 * @param onClick Optional click handler function.
 * @returns A styled div element representing an info tag.
 */
const InfoTag: React.FC<InfoTagProps> = ({ className, children, onClick }) => {
  return (
    <div className={`bg-gray-200 px-2 py-1 rounded-md text-gray-500 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default InfoTag;
