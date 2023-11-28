import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { calculateCategorySums, getCategoriesAndZones } from "@/constants/filter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);



const BarChart = () => {
  const filteredData = useSelector((state) => state.data.filteredData);
 
  const categorySumsByDay = calculateCategorySums(filteredData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const Days = Object.keys(categorySumsByDay);

  const labels = Days;
  const datasets = [];

  const {categories} = getCategoriesAndZones(filteredData);

  categories.forEach((category, index) => {
    const data = labels.map((day) => categorySumsByDay[day][category] || 0);

    datasets.push({
      label:category,
      data,
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
    });
  });

  const data = {
    labels,
    datasets,
  };


  return (
    <div className="relative">
      <Bar data={data} options={options} width={"250%"} />
    </div>
  )
}

export default BarChart
