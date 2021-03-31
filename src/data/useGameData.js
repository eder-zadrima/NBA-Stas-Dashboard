import {useState, useEffect} from "react"
import {csv} from "d3"


const row = d => {
    d["AST"] = +d["AST"]
    d["BLK"] = +d["BLK"]
    d["STL"] = +d["STL"]
    d["TOV"] = +d["TOV"]
    d["REB"] = +d["REB"]
    d["FGA"] = +d["FGA"]
    d["FGM"] = +d["FGM"]
    d["FG_PCT"] = +d["FG_PCT"]
    d["FG3A"] = +d["FG3A"]
    d["FG3M"] = +d["FG3M"]
    d["FG3_PCT"] = +d["FG3_PCT"]
    d["FTM"] = +d["FTM"]
    d["FTA"] = +d["FTA"]
    d["FT_PCT"] = +d["FT_PCT"]
    d["OREB"] = +d["OREB"]
    d["MIN"] = +d["MIN"]
    d["PLUS_MINUS"] = +d["PLUS_MINUS"]
    d["PF"] = +d["PF"]
    d["PTS"] = +d["PTS"]
    d["DREB"] = +d["DREB"]
  return d;
};



export const useGameData = (gameUrl) => {
const [data, setData] = useState([])


  useEffect(() => {
    csv(gameUrl, row).then(setData);
   

  }, [gameUrl]);
  console.log(data)

return data
}