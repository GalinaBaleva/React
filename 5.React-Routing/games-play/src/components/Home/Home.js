import { useEffect, useState } from "react";
import { getAll } from "../../services/gameServices";

import * as gameServices from '../../services/gameServices'
import LatestGame from "./LatestGame/LatestGame";


const Home = () => {

  const [games, setGamas] = useState([]);

  useEffect(() => {
    gameServices.getAll()
      .then(result => {
        setGamas(result)
      });
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        <h1>Latest Games</h1>
        {games.length > 0
          ? games.map(x => <LatestGame key={x._id} game={x} />)
          : <p className="no-articles">No games yet</p>}




      </div>
    </section>
  );
};

export default Home;