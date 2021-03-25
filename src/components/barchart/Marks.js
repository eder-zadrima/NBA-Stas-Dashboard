export const Marks = ({
    data, 
    xScale, 
    yScale, 
    xValue, 
    yValue,
    tooltipFormat,
    innerHeight
  }) => 
      data.map(d => (
          <rect 
            class="bar"
            key={xValue(d)}
            x={xScale(xValue(d))+30} 
            y={yScale(yValue(d))} 
            width={xScale.bandwidth()-2.5} 
            height={innerHeight-yScale(yValue(d))}
            >
                    <title>{yValue(d) + " " + d["MATCHUP"]}</title>
                  </rect>
            
        
            ));