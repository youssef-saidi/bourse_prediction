import { zoneAnalysis } from '@/constants/filter';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineChart = () => {


    const filteredData = useSelector((state) => state.data.filteredData);

    const zoneAnalysisResult = zoneAnalysis(filteredData)
    const categories = Object.keys(zoneAnalysisResult);
    const zoneInMostActiveData = categories.map((category) => zoneAnalysisResult[category].zoneInMostActive);
    const zoneOutMostActiveData = categories.map((category) => zoneAnalysisResult[category].zoneOutMostActive);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Most Active Zones for Each Category',
            },
        },
    };

    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Most Active Zone In',
                data: zoneInMostActiveData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Most Active Zone Out',
                data: zoneOutMostActiveData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <div className="relative">
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart