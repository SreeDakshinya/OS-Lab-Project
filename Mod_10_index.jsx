import React, { useEffect } from "react";

function Mod10_index() {
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
      <div data-pym-src="https://www.jdoodle.com/embed/v1/cdfdd49ae368a902"></div>
    </div>
  );
}

export default Mod10_index;