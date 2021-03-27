import React from 'react'
import {hexbin} from 'd3-hexbin'

const HexLegend = () => {
    const hex = hexbin()
    return (
        <g>
        <path
          className="Hex-leg"
          transform={`translate(${18},${20})`}
          d={hex.hexagon(5)}
          fill={{fill: "red"}}
          /> 
            <path
          className="Hex-leg"
          transform={`translate(${35},${20})`}
          d={hex.hexagon(10)}
          fill={{fill: "red"}}
          /> 
          <path
          className="Hex-leg"
          transform={`translate(${60},${20})`}
          d={hex.hexagon(15)}
          fill={{fill: "red"}}
          /> 
          <text x={10} y={50}className="sl-text">Frequency</text>
        </g>
    )
}

export default HexLegend
