import {useState, useEffect} from "react"
import {csv} from "d3"



const csvUrl = 
      'https://gist.githubusercontent.com/anxietyattacked/a2dec97d8de649664e3871f26c983e46/raw/06c5c8e2c9fd327e04e7c590bdc535e944c35d8b/Lebron-shots-lg-avg.csv'


const row = d => {
 d.x = +d["LOC_X"];
d.y = +d["LOC_Y"];
d['SHOT_MADE_FLAG'] = +d["SHOT_MADE_FLAG"];
d['SHOT_DISTANCE'] = +d["SHOT_DISTANCE"]
d['FG_PCT'] = +d['FG_PCT']
d['LG_FG_PCT'] = +d['LG_FG_PCT']
  return d;
};



export const usePlayerData = () => {
const [data, setData] = useState(null)
console.log(data)

  useEffect(() => {
    csv(csvUrl, row).then(setData);
    

  }, []);


return data
}