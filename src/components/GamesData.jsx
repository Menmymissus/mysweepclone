import React from 'react';
import GameGrid from './GameGrid';

// Import your image files
import firekirinImg from '../assets/images/firekirin.jpg';
import orionestImg from '../assets/images/Orionstars.jpg';
import juwaImg from '../assets/images/juwa.jpg';
import gamevaultImg from '../assets/images/gamevault.jpg';
import casinoroyaleImg from '../assets/images/casinoroyale.jpg';
import vegassweepImg from '../assets/images/vegas-sweep.jpg';
import milkywayImg from '../assets/images/milky-way.jpg';
import ultrapandaImg from '../assets/images/ultra-panda.jpg';
import cashfrenzyImg from '../assets/images/cash-frenzy.jpg';
import pandamasterImg from '../assets/images/panda-master.jpg';
import vblinkImg from '../assets/images/vblink.jpg';
import riversweepsImg from '../assets/images/river-sweeps.png';

const GamesData = () => {
  const gamesData = [
    {
      name: "Firekirin",
      image: firekirinImg,
      url: "https://firekirin.com"
    },
    {
      name: "Orionestar", 
      image: orionestImg,
      url: "https://orionestar.com"
    },
    {
      name: "Juwa",
      image: juwaImg,
      url: "https://juwa.com"
    },
    {
      name: "GameVault",
      image: gamevaultImg,
      url: "https://gamevault.com"
    },
    {
      name: "CasinoRoyale",
      image: casinoroyaleImg,
      url: "https://casinoroyale.com"
    },
    {
      name: "VegasSweep",
      image: vegassweepImg,
      url: "https://vegassweep.com"
    },
    {
      name: "MilkyWay",
      image: milkywayImg,
      url: "https://milkyway.com"
    },
    {
      name: "Ultra Panda",
      image: ultrapandaImg,
      url: "https://ultrapanda.com"
    },
    {
      name: "Cash Frenzy",
      image: cashfrenzyImg,
      url: "https://cashfrenzy.com"
    },
    {
      name: "Pandamaster",
      image: pandamasterImg,
      url: "https://pandamaster.com"
    },
    {
      name: "Vblink",
      image: vblinkImg,
      url: "https://vblink.com"
    },
    {
      name: "River Sweeps",
      image: riversweepsImg,
      url: "https://riversweeps.com"
    }
  ];

  return <GameGrid games={gamesData} />;
};

export default GamesData;