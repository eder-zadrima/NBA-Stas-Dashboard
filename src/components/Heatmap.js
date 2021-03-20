import React, {useRef, useEffect} from 'react';
import {Marks} from "./Marks"
import * as d3 from "d3"

export const Heatmap = ({player, xScale, yScale, xValue, yValue }) => {
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
      .attr("fill-opacity", .4)
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