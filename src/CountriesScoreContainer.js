import CountryScoreContainer from "./CountryScoreContainer";

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

const CountriesScoreContainer = (props) => {
  
 let sortedData = props.scoresForCountries.sort(compare);  
  return (
    <div className="blue-boarder">
      {sortedData.map((singleCountry, index) => {
        return <CountryScoreContainer key={index} singleCountryData={singleCountry} />;
      })}
    </div>
  );
}

export default CountriesScoreContainer;

//{props.name}