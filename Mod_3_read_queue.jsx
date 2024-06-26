import React, { useEffect } from "react";

function Mod3_read_queue() {
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
      <div data-pym-src="https://www.jdoodle.com/embed/v1/6ef566d0a1dcd10f"></div>
    </div>
  );
}

export default Mod3_read_queue;
