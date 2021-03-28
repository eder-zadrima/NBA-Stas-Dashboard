import {useState, useEffect} from "react"
import {csv} from "d3"



const lillardUrl = 'https://gist.githubusercontent.com/anxietyattacked/868d0e67d3dae4826b73b10366bdd138/raw/a5eeeb1ea8c6c2a4fc19e9e666802258b8b66dac/Lillard-shots-lg-avg.csv'


const lebronUrl = 'https://gist.githubusercontent.com/anxietyattacked/a2dec97d8de649664e3871f26c983e46/raw/06c5c8e2c9fd327e04e7c590bdc535e944c35d8b/Lebron-shots-lg-avg.csv'

const giannisUrl = 'https://gist.githubusercontent.com/anxietyattacked/3cf7b0b9c2bdc973995ce99a251a47aa/raw/6042c7d3fb4c77345569d12c95a204a168647f24/Giannis-shots-lg-avg.csv'

const hardenUrl = 'https://gist.githubusercontent.com/anxietyattacked/2e0947499b2c2facfe375ece9fc19043/raw/e8638e3e22f776b3a695b6084cd25268c145856a/Harden-shots-lg-avg.csv'

const youngUrl = 'https://gist.githubusercontent.com/anxietyattacked/c89784d09cc9b7ba47e0cc1daa35a722/raw/680cd8a45be7eb36aaebe811bcdb4de5a268abe6/Young-shots-lg-avg.csv'

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
const [data, setData] = useState([])
console.log(data)

  useEffect(() => {
    csv(lebronUrl, row).then(setData);
    

  }, []);


return data
}