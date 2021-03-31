export const AxisBottom = ({xScale, innerHeight, tickFormat, tickOffset = 3 }) =>
		xScale.domain().map(tickValue => (
          <g key={tickValue} className="tick"
            transform = {`translate(${xScale(tickValue)},0)`}
            >
            <text 
              key={tickValue}            
              dy=".91em" 
              x={35}
              y={innerHeight+5}
              style={{textOrientation: 'mixed', writingMode: 'vertical-rl'}}
              >
              {tickValue}
          </text>
          </g>
        ));
