import React, { useRef, useCallback } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "./Linechart.modules.css";
import { Button } from "@material-ui/core";
const Linechart = () => {
  const refChart = useRef(null);

  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-healthmonitoring-irkwy",
  });

  const chart = sdk.createChart({
    chartId: "6049b25d-55f6-41e1-a4fb-06b2e194d003",
    width: 570,
    height: 400,
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
  const chart2 = sdk.createChart({
    chartId: "7270b96a-df98-4bd5-a426-94d18df4968b",
    width: 570,
    height: 400,
    display: "inline-block",
    theme: "dark",
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
    chartId: "cff7f336-f6c7-484f-9f47-2ae2ec47efc1",
    width: 570,
    height: 400,
    theme: "dark",
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
  return (
    <div class="container">
      <div className="charts">
        <div id="barChart" ref={setRefChart}></div>
        <Button onClick={RefreshButton}>Refresh</Button>
      </div>
      <div className="charts2">
        <div id="barChart2" ref={setRefChart2}></div>
        <Button onClick={RefreshButton2}>Refresh</Button>
      </div>
      <div className="charts3">
        <div id="barChart3" ref={setRefChart3}></div>
        <Button onClick={RefreshButton3} variant="outlined">
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default Linechart;
