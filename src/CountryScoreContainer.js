import TableBody from "./TableBody.js";

const CountryScoreContainer = (props) => {
  return (
    <div className="green-boarder">
      <h2>High Scores:{props.singleCountryData.name}</h2>
      <TableBody scores={props.singleCountryData.scores}/>
    </div>
  );
};

export default CountryScoreContainer;
