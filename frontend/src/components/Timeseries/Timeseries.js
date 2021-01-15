import React, { useRef, useCallback } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "./Timeseries.modules.css";
import { Button } from "@material-ui/core";
const Timeseries = () => {
  const refChart = useRef(null);

  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-healthmonitoring-irkwy",
  });

  const chart = sdk.createChart({
    chartId: "6407c021-5b50-45b7-b59c-36d3739e26a9",
    width: 1800,
    height: 400,
    display: "flex",
    position: "relative",
    margin: "auto",

    theme: "dark",
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

  const RefreshButton = (e) => {
    chart.refresh();
  };
  return (
    <div className="container">
      <div className="charts">
        <div id="barChart" ref={setRefChart}></div>
        <Button onClick={RefreshButton}>Refresh</Button>
      </div>
    </div>
  );
};

export default Timeseries;
