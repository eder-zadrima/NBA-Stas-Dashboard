import React, {useMemo, useState, Suspense} from 'react';
import {scaleLinear, scaleSequential, interpolateRdYlBu} from "d3"

import {usePlayerData} from "../data/usePlayerData"
import {useGameData} from "../data/useGameData"
import {BarChart} from "../components/barchart/BarChart"
import {columns as cols} from "../data/columns"
// import Table from '../components/Table';

const ShotCharts = React.lazy(() => import('../components/ShotCharts'))
const Table = React.lazy(() => import('../components/Table'))




const usableWidth = 500
const height = usableWidth / 50 * 47
const margins = 0
const xValue = d => d.x
const yValue = d => d.y

const PlayerScreen = ({playerUrl, gameUrl, playerImg, name, team, number, teamColors, teamLogo}) => {
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
  <div className="px-2">
    <div className={`grid grid-cols-5 bg-${teamColors}`}>
      <h1 className="col-span-5 text-center text-3xl font-bold py-4">{name} #{number}</h1>
      <div className="col-span-3">
      <img className="w-full h-full" src={playerImg} alt={name}/>
      </div>
      <div className="col-span-2 bottom-8">
        <img className="w-full h-full" src={teamLogo} alt={team}/>
      </div>
    </div>
    <div className={`bg-${teamColors}-secondary py-10`}>
     
    </div>
    <div className="bg-wood-pattern py-3 lg:grid ">
    <div className="">
      <BarChart data={game}/>
    </div>
    <div className="space-x-4 bg-gray-800">
        <button className={`text-white text-xl py-3 ${shot === "Marks" ? "bg-gray-800" : null}`} onClick={() => setShot("Marks")}>Shot</button>
        <button onClick={() => setShot("Hex")} className="text-white text-xl py-3">Hex</button>
        <button onClick={() => setShot("Heatmap")} className="text-white text-xl py-3">Heatmap</button>
      </div>
    <div className="grid grid-cols-10">
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




