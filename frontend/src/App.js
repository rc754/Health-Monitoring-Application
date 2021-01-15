import React, { useState, useEffect } from "react";
import Footer from './Footer'
import Header from './Header'
import {BrowserRouter as Router} from "react-router-dom"
import axios from "axios";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { Pie } from "react-chartjs-2";
import "./App.css";
import Mongochart from "./components/Mongochart/Mongochart";
import Timeseries from "./components/Timeseries/Timeseries";
import Linechart from "./components/Linechart/Linechart";

function App() {
  const [items, setItems] = useState([]);
  const [select, setSelect] = useState("Select Device");
  const [chartData, setChartData] = useState();
  // const [dropsites, setDropSites] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "http://localhost:5000/devicetransaction/alert/safe"
      );
      console.log(result.data);
      const devices = result.data.map((device) => ({
        device: device._id,
        count: device.count,
      }));
      console.log(devices);
      setItems(devices);
    };

    fetchItems();
  }, []);

  const onSelectChange = async (e) => {
    const deviceid = e.target.value;
    if (deviceid === "Select Device") {
      window.alert("Please choose a device.");
    } else {
      setSelect(deviceid);

      const url = `http://localhost:5000/devicetransaction/alert/safe/${deviceid}`;
      const devicedata = await axios(url);
      console.log(devicedata.data);
      const deviceslol = devicedata.data.map((dev) => ({
        device: dev._id,
        count: dev.count,
        safe: dev.totalsafe,
        unsafe: dev.unsafe,
      }));
      console.log(deviceslol);
      const pieSafe = deviceslol.map((plot) => {
        return plot.safe;
      });
      const pieUnsafe = deviceslol.map((plot) => {
        return plot.unsafe;
      });

      setChartData({
        labels: ["Safe", "Unsafe"],
        datasets: [
          { 
            label: "Pie chart",
            data: [pieSafe, pieUnsafe],
            backgroundColor: ["#C9DE00", "#B21F00"],
            hoverBackgroundColor: ["#4B5000", "#501800"],
            borderWidth: 4,
          },
        ],
      });
      console.log(chartData);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header/>
      <div className="dropdown-container">
        <FormControl className="app_dropdown">
          <Select variant="outlined" value={select} onChange={onSelectChange}>
            <MenuItem value="Select Device"><label className = "lol">Select Device</label></MenuItem>
            {items.map((item) => (
              <MenuItem value={item.device}>{item.device}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        
          </div>
          
         <div className="pie-container"><Pie  data={chartData} width={3}  height= {3} options={{ responsive:true, maintainAspectRatio: true }}/></div>       
         <div className="term">
          <div className="mongochart">
            <Mongochart />  
          </div>
          <div className="timeseries">
            <Timeseries />
            </div>
          <div className="linechart">
            <Linechart />
          </div>
          </div>
          <Footer/>
        </Router>
        </div>
    
  );
}

export default App;
