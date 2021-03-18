import CountryScoreContainer from "./CountryScoreContainer";
const CountriesScoreContainer = (props) => {
  
  return (
    <div className="blue-boarder">
      {props.scoresForCountries.map((singleCountry) => {
        return (
          <CountryScoreContainer singleCountryData={singleCountry}/>
        )
      })}
    </div>
  );
}

export default CountriesScoreContainer;

//{props.name}