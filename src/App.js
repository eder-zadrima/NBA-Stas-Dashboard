import React, {useRef, useEffect} from 'react';
// import {scaleLinear, scaleSequential, interpolateOranges, scaleSqrt, max, interpolateRdYlBu, contourDensity, interpolateInferno, geoPath, create, selectAll} from "d3"
import * as d3 from "d3"
// import {contour} from "d3-contour"
import "./App.css"
import {BasketballCourt} from "./components/BasketballCourt"
import {Hexbin} from "./components/Hexbin"
import {usePlayerData} from "./data/usePlayerData"
import {Marks} from "./components/Marks"

const width = 960;
// const margin = { top: 30, right: 30, bottom: 30, left: 30 };
// const innerWidth = width - margin.right - margin.left;
// const innerHeight = height - margin.top - margin.bottom;
const usableWidth = 500
const height = usableWidth / 50 * 47
const margins = 0
const xValue = d => d.x
const yValue = d => d.y

const Heatmap = ({player, xScale, yScale, xValue, yValue }) => {
  const gRef = useRef()
const contours = d3.contourDensity()
  .x(d => xScale(d.x))
  .y(d => yScale(d.y))
  .bandwidth(30)(player)

const densityColors = d3.scaleSequential(d3.interpolateInferno)
  .domain(d3.extent(contours, d => d.value))




useEffect(() => {
  const g = d3.select(gRef.current)

  g.selectAll("path")
    .data(contours)
    .join("path")
    .attr("d", d3.geoPath())
    .attr("fill", d => densityColors(d.value))
    .attr("fill-opacity", .2)
    .attr("stroke", "none")

}, [densityColors, contours])
 

return (
  <>
  <g ref={gRef}>
  </g>
  <g>
    <Marks 
    xValue={xValue} 
    yValue={yValue} 
    xScale={xScale} 
    yScale={yScale} 
    player={player}
    radius={1}
    />
  </g>
  </>
)


 
}

  
const App = () => {
  const player = usePlayerData()
  const svgRef = useRef()
 
  if (!player) {
    return <pre>Loading...</pre>;
  }

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
<div>
  	<svg
    height={height}
    width={usableWidth}
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
)
};
export default App;
