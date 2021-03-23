import React from "react";
import allCountryScores from "allCountryScores";

const WorldTableBody = (_) => {
  const descendingCompare = (scoreOne, scoreTwo) => scoreTwo.s - scoreOne.s;
  // method channing return a object that returns another method
  // const worldData = allCountryScores.sort(descendingCompare).map(element => {
  //   return element.scores;
  // })
  // const sortedData = allCountryScores.sort(descendingCompare)

  const worldData = allCountryScores.sort(descendingCompare).map((element) => {
    return element.scores;
  });

  // let sortedWorldData = worldData.sort(compare)
  return (// use wtb in dark mode
    <div className="world-table-border"> 
      <table className="table table-hover table-dark">
        <tbody className="table-body-border">
          {worldData.map((scoreData, index) => {
            return (
              <tr key={index} className="rowScoreData">
                <td className="retro-font-names">
                  {scoreData.n.toUpperCase()}
                </td>
                <td className="retro-font-scores">{scoreData.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WorldTableBody;
