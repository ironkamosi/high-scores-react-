import CountryScoreContainer from "./CountryScoreContainer";
import React, { useState } from "react";
import SortButton from "./SortButton";

function compare(countryOne, countryTwo) {
  // This helps put the array in order
  if (countryOne.name < countryTwo.name) {
    return -1;
  }
  if (countryOne.name > countryTwo.name) {
    return 1;
  }
  return 0;
}

// 0 descending 1 ascending
const descendingCompare = (scoreOne, scoreTwo) => scoreTwo.s - scoreOne.s;
const ascendingCompare = (scoreOne, scoreTwo) => scoreOne.s - scoreTwo.s;

const CountriesScoreContainer = (props) => {
  const [toggle, setToggle] = useState({
    state: 0,
    compare: descendingCompare
  });
  const toggleCompare = () => {
  
    if (toggle.state === 0) {
      setToggle({
        state: 1,
        compare: ascendingCompare
      });
    } else {
      setToggle({
        state: 0,
        compare: descendingCompare
      })
    }
  };
 
  let sortedData = props.scoresForCountries.sort(compare);
  return (
    <div className="blue-boarder">
     
      <SortButton handler={toggleCompare}/> 
      <h1 className="high-scores-countries-title">High Scores Per Country</h1>
      {sortedData.map((singleCountry, index) => {
        return (
          <CountryScoreContainer
            key={index}
            singleCountryData={singleCountry}
            compare={toggle.compare} // compare function 
          />
        );
      })}
    </div>
  );
};

export default CountriesScoreContainer;
