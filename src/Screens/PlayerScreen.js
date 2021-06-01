import React, {useMemo, useState, Suspense} from 'react';
import {scaleLinear, scaleSequential, interpolateRdYlBu} from "d3"

import {usePlayerData} from "../data/usePlayerData"
import {useGameData} from "../data/useGameData"
import {BarChart} from "../components/barchart/BarChart"
import SeasonTotals from "../components/SeasonTotals"
import {columns as cols} from "../data/columns"
import Atl from "../components/teamSVG/Atl"
import Lakers from "../components/teamSVG/Lakers"
import Bucks from "../components/teamSVG/Bucks"
import Blazers from "../components/teamSVG/Blazers"
import Rockets from "../components/teamSVG/Rockets"

const ShotCharts = React.lazy(() => import('../components/ShotCharts'))
const Table = React.lazy(() => import('../components/Table'))




const usableWidth = 500
const height = usableWidth / 50 * 47
const margins = 0
const xValue = d => d.x
const yValue = d => d.y

const PlayerScreen = ({playerUrl, gameUrl, playerImg, name, team, number, teamColors, teamLogo, seasonTotals}) => {
  console.log("rendered: PlayerScreen")
    const [shot, setShot] = useState("Marks")
    // const [playerData, setPlayerData] = useState()
    const playerData = usePlayerData(playerUrl)
    const gameData = useGameData(gameUrl)
  

    const game = useMemo(() => gameData, [gameData])
    const player = useMemo(() => playerData, [playerData])
    const columns = useMemo(() =>  cols, [])

   
      const xScale = useMemo(() => scaleLinear()
      .domain([-250, 250])
      .range([0, usableWidth- margins * 2]), [])
    const yScale = useMemo(() => scaleLinear()
      .domain([-52, 418])
      .range([0, height- margins * 2]), [])
  
  const colors = useMemo(() => scaleSequential(interpolateRdYlBu)
        .domain([.09, -.09]), [])
  


      
    return (
  <div className="">
    <div className={`grid grid-cols-5 md:grid-cols-7 bg-${teamColors}`}>
      <h1 className={`col-span-5 md:col-span-7 text-center ${teamColors === "bucks" ? "text-white" : null} text-3xl font-bold py-4`}>{name} #{number}</h1>
      <div className="col-span-3 md:col-start-2">
      <img className="w-full h-full" src={playerImg} alt={name}/>
      </div>
      <div className="relative col-span-2 bottom-8 grid place-items-center">
      {teamColors === "rockets" ? <span className="absolute rounded-full bg-rockets-secondary h-28 sm:h-32 md:h-36 lg:h-52  w-28 sm:w-32 md:w-36 lg:w-52"></span>: null}
        {teamColors === "lakers" ? <Lakers/> :
        teamColors === "blazers" ? <Blazers/> :
        teamColors === "rockets" ? <Rockets className="z-10"/> :
        teamColors === "hawks" ? <Atl/>:
        <Bucks/>}
      </div>
    </div>
    <div className={`bg-${teamColors}-secondary py-1`}>
      <h2 className="font-bold text-lg text-center text-white">2019-2020 Regular Season</h2>
      <SeasonTotals seasonTotals={seasonTotals}/>
  
      
    </div>
    <div className="bg-wood-pattern lg:grid pt-5 lg:pt-0">
    <div className="lg:grid lg:grid-cols-10">
    <div className="col-start-2 col-span-4 lg:mt-16  place-content-center">
      <BarChart className="place-content-center" data={game}/>
    </div>
  
    <div className="col-start-6 col-span-4 grid grid-cols-10">
    <div className="space-x-4 bg-gray-800 col-span-10 md:col-start-2 md:col-span-8">
        <button className={`text-white text-xl py-3 ${shot === "Marks" ? "bg-gray-800" : null}`} onClick={() => setShot("Marks")}>Shot</button>
        <button onClick={() => setShot("Hex")} className="text-white text-xl py-3">Hex</button>
        <button onClick={() => setShot("Heatmap")} className="text-white text-xl py-3">Heatmap</button>
      </div>
    <Suspense fallback={<div>Loading...</div>}>
      <ShotCharts
      shot={shot}
      player={player}
      usableWidth={usableWidth}
      height={height}
      xScale={xScale}
      xValue={xValue}
      yScale={yScale}
      yValue={yValue}
      colors={colors}
      margins={margins}
      />
      </Suspense>

    </div>
    </div>
    <div className="overflow-x-scroll">
    <Suspense fallback={<div>Loading...</div>}>
      <Table className="" data={game} columns={columns}/>
      </Suspense>
    </div>
    </div>
  </div>
  )
}


export default PlayerScreen




