import {useState, useEffect} from "react"
import {csv} from "d3"



const row = d => {
 d.x = +d["LOC_X"];
d.y = +d["LOC_Y"];
d['SHOT_MADE_FLAG'] = +d["SHOT_MADE_FLAG"];
d['SHOT_DISTANCE'] = +d["SHOT_DISTANCE"]
d['FG_PCT'] = +d['FG_PCT']
d['LG_FG_PCT'] = +d['LG_FG_PCT']
  return d;
};



export const usePlayerData = (playerUrl) => {
const [data, setData] = useState([])


  useEffect(() => {
  
  csv(playerUrl, row).then(setData);


  }, []);
  console.log(data)

return data
}