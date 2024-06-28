import React from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IsolatedStateProps {
  message: string;
}

const IsolatedStateComponent: React.FC<IsolatedStateProps> = ({ message }) => (
  <div className="flex m-auto text-error gap-2 items-center w-fit text-center p-1 border border-error rounded">
    <span>{message}</span>
    <FontAwesomeIcon icon={faCircleExclamation} className="text-sm cursor-pointer" />
  </div>
);

export default IsolatedStateComponent;
