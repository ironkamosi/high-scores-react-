import React from "react";
const TableBody = ({ scores, compare }) => {
console.log("compare",compare)
  // const compare = (scoreOne, scoreTwo) => scoreTwo.s - scoreOne.s;
  //   if (scoreOne.s < scoreTwo.s) {
  //     return 1;
  //   }
  //   if (scoreOne.s > scoreTwo.s) {
  //     return -1;
  //   } 
  //     return 0;
  
  const sortedCountryScores = scores.sort(compare);
  console.log(sortedCountryScores)
  return (
    <table className="table table-hover table-dark">
      <tbody className="table-body-border">
        {sortedCountryScores.map((scoreData, index) => {
          return (
            <tr key={index} className="rowScoreData">
              <td className="retro-font-names">{scoreData.n.toUpperCase()}</td>
              <td className="retro-font-scores">{scoreData.s}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableBody;
