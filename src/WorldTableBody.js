import React from "react";
import allCountryScores from "./scores.js";

const WorldTableBody = (_) => {
  const descendingCompare = (scoreOne, scoreTwo) => scoreTwo.s - scoreOne.s;
  // method channing return a object that returns another method
  // const worldData = allCountryScores.sort(descendingCompare).map(element => {
  //   return element.scores;
  // })
  // const sortedData = allCountryScores.sort(descendingCompare)

  const worldData = allCountryScores.sort(descendingCompare).map((element) => {
    // console.log("test", element.scores);
    console.log(element.scores)
    return element.scores;
  });

  // let sortedWorldData = worldData.sort(compare)
  return (// use wtb in dark mode
    <div className="world-table-border"> 
      <table className="table table-hover table-dark">
        <tbody className="table-body-border">
          {worldData.map((scoreData, index) => {
            // console.log("test", worldData);
            console.log("test",scoreData[0].n)
            return (
              <tr key={index} className="rowScoreData">
                <td className="retro-font-names">
                  {scoreData[0].n.toUpperCase()}
                  {scoreData[0].s}
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
