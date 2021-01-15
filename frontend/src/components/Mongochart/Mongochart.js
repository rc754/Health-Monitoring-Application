import React, { useRef, useCallback } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Mongochart.modules.css";
import { Button } from "@material-ui/core";
const Mongochart = ({ deviceid }) => {
  const refChart = useRef(null);

  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-healthmonitoring-irkwy",
  });

  const chart = sdk.createChart({
    chartId: "171b335f-ce2e-4b9f-aaec-f5f56a0aee9b",
    width: 570,
    height: 400,
    
    theme: "dark",
    // filter: { DeviceID: { deviceid } },
  });

  const renderChart = useCallback(
    async (ref) => {
      try {
        await chart.render(ref);
      } catch (e) {
        console.error(e);
      }
    },
    [chart]
  );

  const setRefChart = useCallback(
    (ref) => {
      if (ref) {
        renderChart(ref);
      }
      // Save a reference to the node
      refChart.current = ref;
    },
    [renderChart]
  );

  const chart2 = sdk.createChart({
    chartId: "cfe8c562-dc59-44bd-8df4-56204590fa11",
    width: 570,
    height: 400,
    display: "inline-block",
    theme: "dark",
    // filter: { DeviceID: { deviceid } },
  });

  const renderChart2 = useCallback(
    async (ref) => {
      try {
        await chart2.render(ref);
      } catch (e) {
        console.error(e);
      }
    },
    [chart2]
  );

  const setRefChart2 = useCallback(
    (ref) => {
      if (ref) {
        renderChart2(ref);
      }
      // Save a reference to the node
      refChart.current = ref;
    },
    [renderChart2]
  );

  const chart3 = sdk.createChart({
    chartId: "4e6eb2bb-2e92-454b-bb18-bf03979a3b4e",
    width: 570,
    height: 400,
    
    theme: "dark",
    // filter: { DeviceID: { deviceid } },
  });

  const renderChart3 = useCallback(
    async (ref) => {
      try {
        await chart3.render(ref);
      } catch (e) {
        console.error(e);
      }
    },
    [chart3]
  );

  const setRefChart3 = useCallback(
    (ref) => {
      if (ref) {
        renderChart3(ref);
      }
      // Save a reference to the node
      refChart.current = ref;
    },
    [renderChart3]
  );
  const RefreshButton = (e) => {
    chart.refresh();
  };
  const RefreshButton2 = (e) => {
    chart2.refresh();
  };
  const RefreshButton3 = (e) => {
    chart3.refresh();
  };

  const datachange = (e) => {
    const date1 = new Date(e.target.value);
    chart.setFilter({ DateTime: { $gte: date1 } });
  };
  const datachange2 = (e) => {
    const date2 = new Date(e.target.value);
    chart2.setFilter({ DateTime: { $gte: date2 } });
  };
  const datachange3 = (e) => {
    const date3 = new Date(e.target.value);
    chart3.setFilter({ DateTime: { $gte: date3 } });
  };

  return (
    
      <div className="container">
        

        <div className="chart">
          <div id="Chart1" ref={setRefChart}></div>
          <Button onClick={RefreshButton}>Refresh</Button>
          <label>
            from:<input type="date" onChange={datachange}></input>
          </label>
          </div>

          <div className="charts2">
          <div id="Chart2" ref={setRefChart2}></div>
          <Button onClick={RefreshButton2}>Refresh</Button>
          <label>
            from:  <input type="date" onChange={datachange2}></input>
          </label>
          
         
          </div>

          <div className="charts3">
          <div id="Chart3" ref={setRefChart3}></div>
          <Button onClick={RefreshButton3}>Refresh</Button>
          <label>
            from:<input type="date" onChange={datachange3}></input>
          </label>
          </div>
        
      </div>
    
  );
};

export default Mongochart;
