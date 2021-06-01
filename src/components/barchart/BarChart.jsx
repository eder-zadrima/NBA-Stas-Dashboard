import React, { memo, useState, useMemo} from 'react';

import { scaleBand, scaleLinear, max, } from 'd3';
import {AxisBottom} from './AxisBottom';
import {AxisLeft} from './AxisLeft';
import {Marks} from './Marks';
import {Dropdown} from './Dropdown';

const height = 500;
const width = 960;
const margin = { top: 50, right:100, bottom: 210, left: 20};


const attributes = [
    {value: "PTS", label: "Points"},
    {value: "AST", label: "Assists"},
    {value: "BLK", label: "Blocks"},
      {value: "STL", label: "Steals"},
      {value: "TOV", label: "Turnovers"},
      {value: "REB", label: "Rebounds"},
      {value: "DREB", label: "Defensive Rebounds"},
      {value: "OREB", label: "Offensive Rebounds"},
      {value: "FGA", label: "Field Goal Attempts"},
      {value: "FGM", label: "Field Goal Made"},
    {value: "FG_PCT", label: "Field Goal Percentage"},
    {value: "FG3A", label: "Three Point Attempts"},
    {value: "FG3M", label: "Three Point Made"},
    {value: "FG3_PCT", label: "Three Point Percentage"},
    {value: "FTA", label: "Free Throw Attempts"},
    {value: "FTM", label: "Free Throw Made"},
    {value: "FT_PCT", label: "Free Throw Percentage"},
    {value: "MIN", label: "Minutes"},
    {value: "PF", label: "Personal Fouls"},
    
  ];


const xValue = d => d["GAME_DATE"];

const innerWidth = width-margin.left-margin.right;
const innerHeight = height-margin.top-margin.bottom;
 const initialYAttribute = 'PTS';


export const BarChart = memo(({data}) => {
  console.log(`rendered: BarChart`)

 
  const [yAttribute, setYAttribute]=useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  

  const xScale = useMemo(() =>scaleBand()
  	.domain(data.map(xValue))
  	.range([innerWidth, 0])
  	.padding(0.15), [data])
  
  const yScale = scaleLinear()
  	.domain([max(data, yValue), 0])
  	.range([0, innerHeight]);

      // <label for="y-select">Y:</label>

  return (
    <>
    <div className="dropdown-menu">
	    <Dropdown
      options={attributes} 
      id="y-select"
      selectedValue={yAttribute}
      onSelectedValueChange={setYAttribute}
    />
   </div>
    <div className="">
    <svg
      className=""
      viewBox={`0 0 ${width} ${height}`}
      >
    	<g transform = {`translate(${margin.left},${margin.top})`}>
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight}
          tickOffset={5}
        />
        <text className="xlabel" x={innerWidth-450} y={410}>Games</text>
      	<AxisLeft 
          yScale={yScale} 
          innerWidth={innerWidth}
          tickOffset={5}
       
        />
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          yValue={yValue} 
          xValue={xValue}
          innerHeight = {innerHeight}
       
        />
      </g>
    </svg>
    </div>
  </>
  );
});