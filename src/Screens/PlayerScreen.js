import React, {useRef, useEffect, useMemo, useState} from 'react';
// import {scaleLinear, scaleSequential, interpolateOranges, scaleSqrt, max, interpolateRdYlBu, contourDensity, interpolateInferno, geoPath, create, selectAll} from "d3"
import * as d3 from "d3"
// import {contour} from "d3-contour"
import "../App.css"
import {BasketballCourt} from "../components/BasketballCourt"
import {Hexbin} from "../components/Hexbin"
import {usePlayerData} from "../data/usePlayerData"
import {useGameData} from "../data/useGameData"
import {Marks} from "../components/Marks"
import {Heatmap} from "../components/Heatmap"
import {BarChart} from "../components/barchart/BarChart"
import DataTable from '../components/DataTable';
import Table from '../components/Table';
import {columns as cols} from "../data/columns"
import Court from "../components/Court"
import ShotLegend from '../components/ShotLegend';
import HexLegend from '../components/HexLegend';


const width = 470;
// const margin = { top: 30, right: 30, bottom: 30, left: 30 };
// const innerWidth = width - margin.right - margin.left;
// const innerHeight = height - margin.top - margin.bottom;  usableWidth / 50 * 47 usableWidth = 500
const usableWidth = 500
const height = usableWidth / 50 * 47
const margin = { top: 20, right: 200, bottom: 65, left: 90 };
const margins = 0
const xValue = d => d.x
const yValue = d => d.y

const PlayerScreen = () => {
    const [shot, setShot] = useState("Marks")
    const player = usePlayerData()
    const game = useGameData()
    const svgRef = useRef()
   
    const data = useMemo(() => game, [game])
    const columns = useMemo(() =>  cols, [])

    if (!player && !game) {
      return <pre>Loading...</pre>;
    }
   

    // const courtColor = ""
      const xScale = d3.scaleLinear()
      .domain([-250, 250])
      .range([0, usableWidth- margins * 2])
    const yScale = d3.scaleLinear()
      .domain([-52, 418])
      .range([0, height- margins * 2])
  
  const colors = d3.scaleSequential(d3.interpolateRdYlBu)
        .domain([.09, -.09])
  

  
        // <BasketballCourt
        // height={height}
        // usableWidth={usableWidth}
        // margins={margins}
        // />
  
      
        


      
    return (
  <div className="px-2">
    <div className="grid grid-cols-5 bg-lakers">
      <div className="col-span-3">
      <img className="w-full h-full" src="../images/lebron.png" alt="Lebron James"/>
      </div> 
    </div>
    <div className="bg-lakers-secondary py-10">
     
    </div>
    <div className="bg-wood-pattern py-3">
    <div className="">
      <BarChart data={game} />
    </div>
    <div className="space-x-4 bg-gray-800 py-3">
        <button onClick={() => setShot("Marks")} className="text-white text-xl">Default</button>
        <button onClick={() => setShot("Hex")} className="text-white text-xl">Hex</button>
        <button onClick={() => setShot("Heatmap")} className="text-white text-xl">Heatmap</button>
      </div>
    <div className="grid grid-cols-10">
  
        <svg
        className="col-start-2 col-span-8"
      viewBox={`0 0 ${usableWidth} ${650}`}
      style={{fill:'none', stroke:"#000"}}
      ref={svgRef}
      >
    <g >
      
      {shot ==="Marks" ? null : <rect width={usableWidth} height={height} className={`fill-current ${shot === "Heatmap" ? "text-gray-300" : "text-blue-300"}`}/>}
      <Court usableWidth={usableWidth} height={height} comp={shot}/>
        {shot === "Marks" ?   
      <Marks
        xValue={xValue}
        xScale={xScale}
        yValue={yValue}
        yScale={yScale}
        player={player}
      radius={2}
        /> : shot === "Hex" ?
        <Hexbin
        player={player}
        margins={margins}
        usableWidth={usableWidth}
        height={height}
        xScale={xScale}
        yScale={yScale}
        colors={colors}
        /> : shot === "Heatmap" ? 
        <Heatmap
        player={player}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        comp={shot}
        /> : null}


        </g>
        <g transform={`translate(0, 471)`}>
          <rect className="fill-current text-white" width={usableWidth} height={150}/>
          <HexLegend/>
        </g>
    </svg>
    </div>
    <div className="overflow-x-scroll">
      <Table className="" data={data} columns={columns}/>
    </div>
    </div>
  </div>
  )
}

export default PlayerScreen







