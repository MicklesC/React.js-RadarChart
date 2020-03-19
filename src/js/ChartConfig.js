export const RadarOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 12,
      stepSize: 2
    }
  },
  angleLines: {
    display: false
  },
  gridLines: {
    color: "rgba(255, 255, 255, 1)"
  },
  legend: {
    display: false
  }
};

export const RadarData = {
  labels: ["Finger Strength", "Power", "Endurance", "Stability", "Flexability"],
  datasets: [
    {
      label: "January",
      backgroundColor: "rgba(56, 202, 255, .2)",
      borderColor: "rgba(56, 202, 255, 1)",
      pointBackgroundColor: "rgba(56, 202, 255, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(56, 202, 255, 1)",
      data: [8, 6, 7, 4, 3]
    }
  ]
};
