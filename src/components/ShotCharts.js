import React, {memo} from 'react'
import Court from "./Court"
import {Marks} from "./Marks"
import ShotLegend from "./ShotLegend"
import {Hexbin} from "./Hexbin"
import HexLegend from "./HexLegend"
import {Heatmap} from "./Heatmap"

const ShotCharts = memo(({shot, usableWidth, height, player, xScale, yScale, xValue, yValue, margins, colors}) => {
    console.log(`rendered: ShotCharts`)
    return (
        <svg
        className="col-start-2 col-span-8"
      viewBox={`0 0 ${usableWidth} ${560}`}
      style={{fill:'none', stroke:"#000"}}
  
      >
    <g >
      
      {shot ==="Marks" ? null : <rect width={usableWidth} height={height} className={`fill-current ${shot === "Heatmap" ? "text-gray-300" : "text-red-900 text-opacity-30"}`}/>}
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
        <g className={`${shot === "Heatmap" ? `hidden` : null}`} transform={`translate(0, 471)`}>
        {shot === "Heatmap" ? null : <rect className={`fill-current text-white`} width={usableWidth} height={90}/>}
          
          {shot === "Marks" ? <ShotLegend/> : shot === "Hex" ? <HexLegend colors={colors}/> : null}
        </g>
    </svg>
    )
})

export default ShotCharts
