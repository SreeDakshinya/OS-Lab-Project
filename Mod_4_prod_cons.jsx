import React, { useEffect } from "react";

function Mod4_prod_cons() {
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
      <div data-pym-src="https://www.jdoodle.com/embed/v1/8126910dfa1086c0"></div>
    </div>
  );
}

export default Mod4_prod_cons;