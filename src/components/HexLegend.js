import React from 'react'
import {hexbin} from 'd3-hexbin'



const HexLegend = ({colors}) => {
    const hex = hexbin()

    return (
        <g>
        <path
          className="Hex-leg"
          transform={`translate(${18},${35})`}
          d={hex.hexagon(5)}
          fill={{fill: "red"}}
          /> 
            <path
          className="Hex-leg"
          transform={`translate(${35},${35})`}
          d={hex.hexagon(10)}
          fill={{fill: "red"}}
          /> 
          <path
          className="Hex-leg"
          transform={`translate(${60},${35})`}
          d={hex.hexagon(15)}
          fill={{fill: "red"}}
          /> 
          <text x={10} y={15}className="sl-text">Frequency</text>

          <path
          className=""
          transform={`translate(${330},${35})`}
          d={hex.hexagon(12)}
          fill={colors(-.09)}
          /> 
            <path
          className=""
          transform={`translate(${355},${35})`}
          d={hex.hexagon(12)}
          fill={colors(-.06)}
          /> 
          <path
          className=""
          transform={`translate(${380},${35})`}
          d={hex.hexagon(12)}
          fill={colors(-.03)}
          /> 
            <path
          className=""
          transform={`translate(${405},${35})`}
          d={hex.hexagon(12)}
          fill={colors(0)}
          /> 
          <path
          className=""
          transform={`translate(${430},${35})`}
          d={hex.hexagon(12)}
          fill={colors(.03)}
          /> 
           <path
          className=""
          transform={`translate(${455},${35})`}
          d={hex.hexagon(12)}
          fill={colors(.06)}
          /> 
           <path
          className=""
          transform={`translate(${480},${35})`}
          d={hex.hexagon(12)}
          fill={colors(.09)}
          /> 
          <text className="text-sm sl-text" x={320} y={62}>-9%</text>
          <text className="text-sm sl-text" x={401} y={62}>0%</text>
          <text className="text-sm sl-text" x={476} y={62}>9%</text>
          <text x={330} y={15}className="sl-text">FG% vs League Avg</text>
   
        </g>
    )
}

export default HexLegend
