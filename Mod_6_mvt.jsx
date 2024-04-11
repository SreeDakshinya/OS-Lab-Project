import React, { useEffect } from "react";

function Mod6_mvt() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-pym-src="https://www.jdoodle.com/embed/v1/6a7acba57fd930f3?config={&quot;showFooter&quot;: false}"></div>
    </div>
  );
}

export default Mod6_mvt;

