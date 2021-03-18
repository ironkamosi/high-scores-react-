import CountriesScoreContainer from "./CountriesScoreContainer.js";
import allCountryScores from "./scores.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <CountriesScoreContainer scoresForCountries={allCountryScores} />
    </div>
  );
}

export default App;
/*
Components

HighScoresForCountries Boarder main component // be descriptive
 h1 HighScore title components 
  HighScore components  green inner boarder
     HighScore light blue h2 
     HighScoreData component table 


*/