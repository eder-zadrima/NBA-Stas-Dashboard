import React from 'react'

const ShotLegend = () => {
    return (
        <g>
            <text className="sl-text" x={25} y={25}>FG%: 32%</text>
            <circle 
            className="mark"
            cx={352}
            cy={20}
            r={15}
            />
            <text className="sl-text" x={370} y={25} >Make</text>
            <circle className="mark miss"
            cx={437}
            cy={20}
            r={15}
            />
               <text className="sl-text" x={455} y={25} >Miss</text>
        </g>
    )
}

export default ShotLegend
