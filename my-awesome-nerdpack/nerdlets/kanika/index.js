import React from 'react';
import {LineChart, SparklineChart, PieChart} from "nr1";


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class KanikaNerdlet extends React.Component {
  render() {
    return <>
    <p style={{color: "red", padding:"10px", alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is LineChart</p>
    <LineChart style={{width:"90%", height:"95%"}}
    accountId = {3930395}
    query = "SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'MzkzMDM5NXxJTkZSQXxOQXw0MjM2NDE5ODQwNDI3MTYwOTc5' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    
    <p style={{color: "red", padding:"10px" , alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is Pie-Chart</p>
    <PieChart
    accountId = {3930395}
    query = "SELECT average(host.memoryUsedPercent) AS 'Memory used %' FROM Metric WHERE `entityGuid` = 'MzkzMDM5NXxJTkZSQXxOQXw0MjM2NDE5ODQwNDI3MTYwOTc5' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    {/* <NRQL/> */}
    </>;
  }
}
