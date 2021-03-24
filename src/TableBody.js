import React from "react";
const TableBody = ({ scores, compare }) => {
  const sortedCountryScores = scores.sort(compare);
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
