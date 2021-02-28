import React from "react"
import {scaleLinear, lineRadial} from "d3"

export const BasketballCourt = ({height, usableWidth, margins}) => {
const pi = Math.PI / 180
const threeAngle = Math.atan( (10 - 0.75) / 22 ) * 180 / Math.PI



const x = scaleLinear()
	.range([0, usableWidth- margins * 2])
	.domain([-25,25])
const y = scaleLinear()
	.range([0, height- margins * 2])
	.domain([0, 47])

const basket = y(4)
const basketRadius = y(4.75) - basket

  
  

  
const arc = (radius, start, end) => {

  const points = [...Array(30)].map((d,i) => i);

  const angle = scaleLinear()
    .domain([ 0, points.length - 1 ])
    .range([ start, end ]);

  const line = lineRadial()
    .radius(radius)
    .angle((d,i) => angle(i));

  return line(points);
  
}


        
  

return (
<>
  <circle
  r={basketRadius} 
    cx={x(0)}
    cy={y(4.75)}
    />
  <rect
    x={x(-3)}
    y={basket}
    width={x(3) - x(-3)}
    height={1}
  />
  
 <rect
  x={ x(-8)}
  y={ y(0)}
  width={x(8) - x(-8)}
  height={y(15) + basket}
   />
  
  <rect
    x={x(-6)}
    y={y(0)}
    width={x(6) - x(-6)}
    height={y(15) + basket}
    />

  <path
    d={arc(x(4) - x(0), 90 * pi, 270 * pi)}
    transform= {`translate(${[x(0), basket]})`}
    />
    

<path
    d={arc(x(6) - x(0), 90 * pi, 270 * pi)}
    transform = {`translate(${[x(0), y(15) + basket]})`}
  />
  <path
    d={arc(x(6) - x(0), -90 * pi, 90 * pi)}
    strokeDasharray={'3,3'}
    transform={`translate(${[x(0), y(15) + basket]})`}
  />
 <line
    x1={x(-21.775)}
    x2={x(-21.775)}
    y2={y(14)}
  />
 <line
    x1={x(21.775)}
    x2={x(21.775)}
    y2={y(14)}
  />
 <path
    d={arc(y(23.75), (threeAngle + 90) * pi, (270 - threeAngle) * pi)}
    transform={`translate(${[x(0), basket + basketRadius]})`}
/>
 <path
    d={arc(x(6) - x(0), -90 * pi, 90 * pi)}
    transform={`translate(${[x(0), y(47)]})`}
  />
<path
    d={arc(x(2) - x(0), -90 * pi, 90 * pi)}
    transform={`translate(${[x(0), y(47)]})`}
  />

  <line
    x1={x(-25)}
    x2={x(25)}
    y1={y(47)}
    y2={y(47)}
  />
 <rect
    style={{stroke: '#ddd'}}
    x={x(-25)}
    y={y(0)}
    width={x(25)}
    height={y(47)}
  />  
</>
  
)
}