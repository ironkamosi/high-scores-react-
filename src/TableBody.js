import React from "react";
const TableBody = ({ scores }) => {
  const compare = (scoreOne, scoreTwo) => scoreTwo.s - scoreOne.s;
    // if (scoreOne.s < scoreTwo.s) {
    //   return 1;
    // }
    // if (scoreOne.s > scoreTwo.s) {
    //   return -1;
    // } 
    //   return 0;
  
  const sortedCountryScores = scores.sort(compare);

  return (
    
    <table className="table table-hover table-dark">
      <tbody className="table-body-border">
        {sortedCountryScores.map((scoreData, index) => {
          return (
            <tr key={index + 200} className="rowScoreData">
              <div className="score-table">
                <td className="retro-font-names" key={index}>
                  {scoreData.n}
                </td>
                <td className="retro-font-scores" key={index + 100}>
                  {scoreData.s}
                  </td>
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableBody;
