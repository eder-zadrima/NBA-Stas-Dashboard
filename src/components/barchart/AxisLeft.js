export const AxisLeft = ({yScale, innerWidth, tickOffset = 3, tickFormat}) => 
	yScale.ticks().map(tickValue => (
          <g className="tick" key={tickValue} transform = {`translate(0,${yScale(tickValue)})`}>
            <line 
              x1={40} 
              y1={yScale(tickValue) - 289} 
              x2={innerWidth + 30} 
              y2={yScale(tickValue) - 289} 
              />
            <text 
              style={{ textAnchor: 'end' }}
       			  x={-tickOffset+30}
              y={-3}
              dy=".32em"
            >
              {tickValue}
      			</text>
          </g>
        ));