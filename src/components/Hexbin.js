import React, {useMemo} from "react"
import {hexbin} from 'd3-hexbin'
export const Hexbin = ({player, margins, usableWidth, height, xScale, yScale, colors }) => {


    const hex = useMemo(() =>hexbin()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
        .radius(15), [xScale, yScale])
    const data = hex(player)

    return (
      <>
      <g>
        {data.map((d) => (
          <path key={d.x + d.y}
          className="Hex"
          transform={`translate(${d.x},${d.y})`}
          d={hex.hexagon(d.length > 80 ?  15: d.length > 10 ? 10: 5)}
          fill={colors(d[0]["FG_PCT"]- d[0]["LG_FG_PCT"])}
          />
        ))}
      </g>
      </>
    
    )
    }