import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { select, csv, scaleBand, scaleLinear, max, axisLeft,
  axisBottom, format } from 'd3';
import {useGameData} from '../../data/useGameData';
import {AxisBottom} from './AxisBottom';
import {AxisLeft} from './AxisLeft';
import {Marks} from './Marks';
import {Dropdown} from './Dropdown';

const height = 500;
const width = 960;
const margin = { top: 50, right:100, bottom: 210, left: 20};
const xAxisLabelOffset = 100;
const yAxisLabelOffset = 45;

const attributes = [
    {value: "PTS", label: "Points"},
    {value: "BLK", label: "Blocks"},
    {value: "AST", label: "Assists"},
      {value: "STL", label: "Steals"},
      {value: "TOV", label: "Turnovers"},
      {value: "REB", label: "Rebounds"},
      {value: "DREB", label: "Defensive Rebounds"},
      {value: "OREB", label: "Offensive Rebounds"},
    {value: "FG_PCT", label: "Field Goal Percentage"},
    {value: "FG3_PCT", label: "Three Point Percentage"}
  ];

const getLabel = value=>{
  for(let i = 0; i<attributes.length; i++){
    if(attributes[i].value===value){
    	return attributes[i].label;
    }
}
};

const xValue = d => d["GAME_DATE"];
const yValue = d => d["FG_PCT"];



export const BarChart  = ({data}) => {


  const initialYAttribute = 'PTS';
  const [yAttribute, setYAttribute]=useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  if (!data) {
    return <pre>Loading...</pre>;
  }
  
  const innerWidth = width-margin.left-margin.right;
  const innerHeight = height-margin.top-margin.bottom;
  
  const xScale = scaleBand()
  	.domain(data.map(xValue))
  	.range([innerWidth, 0])
  	.padding(0.15);
  
  const yScale = scaleLinear()
  	.domain([max(data, yValue), 0])
  	.range([0, innerHeight]);
      <label for="y-select">Y:</label>

  return (
    <>
    <div class="dropdown-menu">
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
        <text class="xlabel" x={innerWidth-450} y={410}>Games</text>
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
};