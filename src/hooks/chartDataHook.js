import {useEffect, useState} from "react";

export const useChartData = ()=>{
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await fetch("data/chartData.json");
      const data = await response.json();
      setChartData(data);
    };

    fetchChartData();
  }, []);

  return [chartData, setChartData];
}