import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function TableauChart() {
  const [url] = useState(
    "https://public.tableau.com/shared/8QQCYH2HP?:display_count=n&:origin=viz_share_link"
  );
  const vizContainerRef = useRef(null);
  let viz = useRef(null);

  const initViz = () => {
    // Dispose of existing Tableau visualization (if any)
    if (viz.current) {
      viz.current.dispose();
    }

    // Create new Tableau visualization
    viz.current = new tableau.Viz(vizContainerRef.current, url);
  };

  useEffect(() => {
    // Initialize visualization on component mount
    initViz();

    // Clean up on component unmount
    return () => {
      if (viz.current) {
        viz.current.dispose();
      }
    };
  }, [url]); // Re-run effect when the URL changes

  return (
    <div>
      <h1>Tableau Visualization</h1>
      <div style={vizStyle} ref={vizContainerRef} />
    </div>
  );
}

const vizStyle = {
  width: "1200px", 
  height: "1400px"
};

export default TableauChart;
