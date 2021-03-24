import React from "react";
import allCountryScores from "./scores.js";

const WorldTableBody = (_) => {
  const descendingCompare = (scoreOne, scoreTwo) => scoreTwo.s - scoreOne.s;
  // old idea to sort the data 
  // method channing return a object that returns another method
  // const worldData = allCountryScores.sort(descendingCompare).map(element => {
  //   return element.scores;
  // })
  // const sortedData = allCountryScores.sort(descendingCompare)

  // const worldData = allCountryScores.sort(descendingCompare).map((element) => {
  //   // console.log("test", element.scores);
  //   // console.log(element.scores)
  //   return element.scores;
  // });

  let dataWithNoCountries = [];
  
  allCountryScores.forEach(element => {
    dataWithNoCountries = dataWithNoCountries.concat(element.scores)
  })
    dataWithNoCountries.sort(descendingCompare)

  return (
    <div className="world-table-border"> 
      <table className="table table-hover table-dark">
        <tbody className="table-body-border">
          {dataWithNoCountries.map((scoreData, index) => {
  
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
