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
    // console.log(toggle)
    // alert("Wake up")
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
  // const [title, setTitle] = useState("Per Country");

  // function worstScores() {
  //   if (title === "Per Country") {
  //     setTitle("Worst scores");
  //   } else {
  //     setTitle("Per Country");
  //   }
  // }
  let sortedData = props.scoresForCountries.sort(compare);
  // console.log(title, "title");
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

//{props.name}
 {
   /* <button onClick={() => {setTitle("Worldwide")}}>
        Toggle
      </button>
       */
 }
 {
   /* <button onClick={worstScores}>Worst Scores</button>
    */
 }