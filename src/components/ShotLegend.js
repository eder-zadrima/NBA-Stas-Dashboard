import React from 'react'

const ShotLegend = () => {
    return (
        <g>
            <text className="sl-text" x={25} y={25}>FG%: 32%</text>
            <circle 
            className="mark"
            cx={315}
            cy={20}
            r={10}
            />
            <text className="sl-text" x={330} y={25} >Makes</text>
            <circle className="mark miss"
            cx={400}
            cy={20}
            r={10}
            />
               <text className="sl-text" x={415} y={25} >Misses</text>
        </g>
    )
}

export default ShotLegend
