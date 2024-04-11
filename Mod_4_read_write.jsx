import React, { useEffect } from "react";

function Mod4_read_write() {
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
      <div data-pym-src="https://www.jdoodle.com/embed/v1/89b9d4b70c042d4f"></div>
    </div>
  );
}

export default Mod4_read_write;