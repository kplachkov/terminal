import React from "react";
import config from "../../../config.json";

export const Banner = () => {
  return (
    <div>
      <p id="banner" className="whitespace-pre-wrap mb-1"
           style={{ lineHeight: "normal" }}
           dangerouslySetInnerHTML={{ __html:
`██╗  ██╗██████╗ ██╗      █████╗  ██████╗██╗  ██╗██╗  ██╗ ██████╗ ██╗   ██╗
██║ ██╔╝██╔══██╗██║     ██╔══██╗██╔════╝██║  ██║██║ ██╔╝██╔═══██╗██║   ██║
█████╔╝ ██████╔╝██║     ███████║██║     ███████║█████╔╝ ██║   ██║██║   ██║
██╔═██╗ ██╔═══╝ ██║     ██╔══██║██║     ██╔══██║██╔═██╗ ██║   ██║╚██╗ ██╔╝
██║  ██╗██║     ███████╗██║  ██║╚██████╗██║  ██║██║  ██╗╚██████╔╝ ╚████╔╝ 
╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═══╝  
`
        }}
      />
      <p
        className="whitespace-pre-wrap mb-1"
        style={{ lineHeight: "normal" }}
        dangerouslySetInnerHTML={{ __html:
`
Type 'help' to see list of available commands.

For a simplified version, click <a class="underline" href="https://${config.social.github}.github.io">here</a>.
--
`
        }}
      />
    </div>
  );
};

export default Banner;
