import React from 'react';
import config from "../../../config.json";

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-orange dark:text-dark-orange">guest</span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span id="ps1-hostname" className="text-light-green dark:text-dark-green">
        {config.social.github}.github.io
      </span>
      <span className="text-light-gray dark:text-dark-gray">:</span>
      <span className="text-light-blue dark:text-dark-blue">~</span>
      <span className="text-light-gray dark:text-dark-gray">$ </span>
    </div>
  );
};

export default Ps1;
