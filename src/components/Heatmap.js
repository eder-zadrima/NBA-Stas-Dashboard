import React, {useRef, useEffect, useMemo} from 'react';
import {Marks} from "./Marks"
import {select, geoPath, contourDensity, interpolateInferno, extent, scaleSequential} from "d3"


export const Heatmap = ({player, xScale, yScale, xValue, yValue, comp }) => {
  const gRef = useRef()
 
    
  const contours = useMemo(() =>contourDensity()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .bandwidth(30)(player), [xScale, yScale, player])
  
  const densityColors = useMemo(() => scaleSequential(interpolateInferno)
    .domain(extent(contours, d => d.value)), [contours])
  
  
  
  
  useEffect(() => {
    const g = select(gRef.current)
  
    g.selectAll("path")
      .data(contours)
      .join("path")
      .attr("d", geoPath())
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
      comp={comp}
      />
    </g>
    </>
  )
  
  
   
  }