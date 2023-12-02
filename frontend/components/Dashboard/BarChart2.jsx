import { getCategoriesAndZones, getCategoryPerZone, zoneAnalysis } from "@/constants/filter";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart2 = () => {
  const filteredData = useSelector((state) => state.data.filteredData);


  const { categories, zones } = getCategoriesAndZones(filteredData);

  const datasets = [];


  categories.forEach((category) => {
    const dataset = {
      label: category,
      data: zones.map((zone) => {
        const data=getCategoryPerZone(filteredData,[category],[zone])
        return data.length
      }),

      backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`,
    };
    datasets.push(dataset);
  });


  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: true,
        title: {
          display: true,
          text: "Zones",
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        display: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  const data = {
    labels: zones,
    datasets,
  };

  const result =zoneAnalysis(filteredData)


  return (
    <div className="relative">
      <Bar data={data} options={options} width={"250%"} />
    </div>
  );
};

export default BarChart2;
