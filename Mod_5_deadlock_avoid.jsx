import React, { useEffect } from "react";

function Mod5_deadlock_avoid() {
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
      <div data-pym-src="https://www.jdoodle.com/embed/v1/6f43682b8695492d?config={&quot;showFooter&quot;: false}"></div>
    </div>
  );
}

export default Mod5_deadlock_avoid;