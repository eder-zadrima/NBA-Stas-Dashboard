export const Marks = ({xScale, yScale , player, xValue, yValue, radius}) => {


    return player.map((d, i) => (
              <circle key={i} className={`mark ${d["SHOT_MADE_FLAG"] === 0 ? "miss" : null}`} 
                cx={xScale(xValue(d))}
                cy={yScale(yValue(d))}
                r={radius}
              >
                    </circle>
            ))
    }