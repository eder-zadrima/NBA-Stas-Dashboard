import React, {useRef, useEffect} from 'react';
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


const width = 960;
// const margin = { top: 30, right: 30, bottom: 30, left: 30 };
// const innerWidth = width - margin.right - margin.left;
// const innerHeight = height - margin.top - margin.bottom;
const usableWidth = 500
const height = usableWidth / 50 * 47
const margins = 0
const xValue = d => d.x
const yValue = d => d.y

const PlayerScreen = () => {
    const player = usePlayerData()
    const game = useGameData()
    const svgRef = useRef()
   
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
  
  
      // <Marks
        // xValue={xValue}
        // xScale={xScale}
        // yValue={yValue}
        // yScale={yScale}
        // player={player}
      // radius={2}
        // />
  
      // <Hexbin
      // player={player}
      // margins={margins}
      // usableWidth={usableWidth}
      // height={height}
      // xScale={xScale}
      // yScale={yScale}
      // colors={colors}
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
    <div className="grid grid-cols-10">
        <svg
        className="col-start-2 col-span-8"
      viewBox={`0 0 ${usableWidth} ${height}`}
      transform ={`translate(${[margins,margins]})`}
      style={{fill:'none', stroke:"#000"}}
      ref={svgRef}
      >
    <g >
    <BasketballCourt
      height={height}
      usableWidth={usableWidth}
      margins={margins}
      />
  
  <Heatmap
      player={player}
      xScale={xScale}
      yScale={yScale}
      xValue={xValue}
      yValue={yValue}
      />
    
  
        </g>
    </svg>
    </div>
    <div className="overflow-x-auto">
      <DataTable data={game}/>
    </div>
    </div>
  </div>
  )
}

export default PlayerScreen







