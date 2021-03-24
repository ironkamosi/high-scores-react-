import React from "react";
import WorldTableBody from "./WorldTableBody.js";

const WorldScoreContainer = () => {
  return (
    <div className="blue-boarder">
      <h1 className="high-scores-countries-title">WorldWide HighScores</h1>
      <div className="green-boarder">
        <h2 className="retro-font-h2">Worldwide players</h2>
        <WorldTableBody />
      </div>
    </div>
  );
};

export default WorldScoreContainer;
