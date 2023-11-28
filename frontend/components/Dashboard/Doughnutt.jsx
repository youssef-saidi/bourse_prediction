import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { calculateCategorySums, getCategoriesAndZones } from "@/constants/filter";

ChartJS.register(ArcElement, Tooltip, Legend);



const Doughnutt = () => {

  const filteredData = useSelector((state) => state.data.filteredData);

  const categorySumsByDay = calculateCategorySums(filteredData);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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

  const datasets = [];
  const { categories } = getCategoriesAndZones(filteredData);
  const labels = categories;

  const dataa = labels.map((category) => categorySumsByDay[Days[0]][category] || 0);
  const colors = labels.map((category) => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`);

  datasets.push({
    label: '#',
    data:dataa,
    backgroundColor: colors,
    borderWidth: 1,

  });
  const data = {
       labels,
    datasets,
  };
  return (
    <div className="relative">
      <Doughnut data={data} options={options} height={"250%"} />
    </div>

  )
}

export default Doughnutt