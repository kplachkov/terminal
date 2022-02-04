import React from 'react';
import config from "../../../config.json";

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">guest</span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.social.github}.github.io
      </span>
      <span className="text-light-gray dark:text-dark-gray">:</span>
      <span className="text-light-blue dark:text-dark-blue">~/terminal</span>
      <span className="text-light-gray dark:text-dark-gray">$ </span>
    </div>
  );
};

export default Ps1;
