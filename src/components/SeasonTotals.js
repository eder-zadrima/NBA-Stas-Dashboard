import React from 'react'

const SeasonTotals = ({seasonTotals}) => {
    const { 
        PLAYER_AGE,
        GP,
        GS,
        MIN,
        FGM,
        FGA,
        FG_PCT,
        FG3M,
        FG3A,
        FG3_PCT,
        FTM,
        FTA,
        FT_PCT,
        OREB,
        DREB,
        REB,
        AST,
        STL,
        BLK,
        TOV,
        PF,
        PTS} = seasonTotals[0]
    return (
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">Age</h3></div>
      <div className="border-2 border-gray-400 text-white">{PLAYER_AGE}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">GP</h3></div>
      <div className="border-2 border-gray-400 text-white">{GP}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">GS</h3></div>
      <div className="border-2 border-gray-400 text-white">{GS}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">MIN</h3></div>
      <div className="border-2 border-gray-400 text-white">{MIN}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FGM</h3></div>
      <div className="border-2 border-gray-400 text-white">{FGM}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FGA</h3></div>
      <div className="border-2 border-gray-400 text-white">{FGA}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FG PCT</h3></div>
      <div className="border-2 border-gray-400 text-white">{FG_PCT}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FG3M</h3></div>
      <div className="border-2 border-gray-400 text-white">{FG3M}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FG3A</h3></div>
      <div className="border-2 border-gray-400 text-white">{FG3A}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FG3 PCT</h3></div>
      <div className="border-2 border-gray-400 text-white">{FG3_PCT}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FTM</h3></div>
      <div className="border-2 border-gray-400 text-white">{FTM}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FTA</h3></div>
      <div className="border-2 border-gray-400 text-white">{FTA}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">FT PCT</h3></div>
      <div className="border-2 border-gray-400 text-white">{FT_PCT}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">OREB</h3></div>
      <div className="border-2 border-gray-400 text-white">{OREB}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">DREB</h3></div>
      <div className="border-2 border-gray-400 text-white">{DREB}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">REB</h3></div>
      <div className="border-2 border-gray-400 text-white">{REB}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">AST</h3></div>
      <div className="border-2 border-gray-400 text-white">{AST}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">STL</h3></div>
      <div className="border-2 border-gray-400 text-white">{STL}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">BLK</h3></div>
      <div className="border-2 border-gray-400 text-white">{BLK}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">TOV</h3></div>
      <div className="border-2 border-gray-400 text-white">{TOV}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">PF</h3></div>
      <div className="border-2 border-gray-400 text-white">{PF}</div>
      </div>
      <div>
      <div className="border-2 border-gray-400"><h3 className="font-bold text-white">PTS</h3></div>
      <div className="border-2 border-gray-400 text-white">{PTS}</div>
      </div>
      
        </div>
    )
}

export default SeasonTotals
