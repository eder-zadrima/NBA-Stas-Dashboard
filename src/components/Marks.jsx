export const Marks = ({xScale, yScale , player, xValue, yValue, radius, comp}) => {


    return player.map((d, i) => (
              <circle key={i} className={comp === "Heatmap" ? "dot" :`mark ${d["SHOT_MADE_FLAG"] === 0 ? "miss" : null}`} 
                cx={xScale(xValue(d))}
                cy={yScale(yValue(d))}
                r={radius}
              >
                    </circle>
            ))
    }