import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Papa from "papaparse";

const studentsInfoCSV = import("./studentsInfo.csv");

const BarChart = () => {
  const [scholarshipCounts, setScholarshipCounts] = useState({});

  useEffect(() => {
    studentsInfoCSV.then((module) => {
      const csvContent = module.default;
      // Parse CSV data
      const counts = csvContent.reduce((acc, row) => {
        const scholarshipType = row.SCHOLARSHIP; // Adjust the field name based on your CSV
        acc[scholarshipType] = (acc[scholarshipType] || 0) + 1;
        return acc;
      }, {});
      setScholarshipCounts(counts);

    });
  }, []); // Empty dependency array to run only once

  // Assuming you have a function to transform the scholarship counts into labels and datasets
  const { labels, datasets } = transformData(scholarshipCounts);

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

  const data = {
    labels,
    datasets,
  };

  return (
    <div className="relative">
      <Bar data={data} options={options} width={"250%"} />
    </div>
  );
};


// Function to transform data into labels and datasets
const transformData = (counts) => {
  const MAX_LABEL_LENGTH = 10; // Set the maximum length for labels

  const labels = Object.keys(counts).map((label) =>
    label.length > MAX_LABEL_LENGTH
      ? label.substring(0, MAX_LABEL_LENGTH) + "..."
      : label
  );
  const values = Object.values(counts);

  const dataset = {
    label: 'Scholarship Counts',
    data: values,
    backgroundColor: [
      `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`,
      `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`,
      `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`,
    ],
    borderWidth: 1,
  };

  return { labels, datasets: [dataset] };
};


export default BarChart;
