var chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  info: "#41B1F9",
  blue: "#3245D1",
  purple: "rgb(153, 102, 255)",
  grey: "#EBEFF6",
}

var config1 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Balance",
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: [20, 40, 20, 70, 10, 50, 20],
        fill: false,
        pointBorderWidth: 100,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -10,
        top: 10,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
}
var config2 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: [20, 800, 300, 400, 10, 50, 20],
        fill: false,
        pointBorderWidth: 100,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -10,
        top: 10,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
}
var config3 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Orders",
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: [20, 40, 20, 200, 10, 540, 723],
        fill: false,
        pointBorderWidth: 100,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -10,
        top: 10,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
}
var config4 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: [20, 40, 20, 70, 10, 5, 23],
        fill: false,
        pointBorderWidth: 100,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -10,
        top: 10,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
}

var ctxBar = document.getElementById("bar").getContext("2d")
var myBar = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Students",
        backgroundColor: [
          chartColors.grey,
          chartColors.grey,
          chartColors.grey,
          chartColors.grey,
          chartColors.info,
          chartColors.blue,
          chartColors.grey,
        ],
        data: [5, 10, 30, 40, 35, 55, 15],
      },
    ],
  },
  options: {
    responsive: true,
    barRoundness: 1,
    title: {
      display: true,
      text: "Students in 2020",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 40 + 20,
            padding: 10,
          },
          gridLines: {
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
  },
})
var line = document.getElementById("line").getContext("2d")
var gradient = line.createLinearGradient(0, 0, 0, 400)
gradient.addColorStop(0, "rgba(50, 69, 209,1)")
gradient.addColorStop(1, "rgba(265, 177, 249,0)")

var gradient2 = line.createLinearGradient(0, 0, 0, 400)
gradient2.addColorStop(0, "rgba(255, 91, 92,1)")
gradient2.addColorStop(1, "rgba(265, 177, 249,0)")

var myline = new Chart(line, {
  type: "line",
  data: {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Engineering",
        data: [90, 50, 70, 40, 46, 42, 39, 41, 30, 25,20, 15],
        backgroundColor: "rgba(61,209,50,0.6)",
        borderWidth: 3,
        borderColor: "rgba(61,209,50,0.6)",
        pointBorderWidth: 0,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
      {
        label: "Marketing",
        data: [20, 35, 45, 75, 37, 86, 45, 65, 25, 53, 65, 45],
        backgroundColor: "rgba(253, 183, 90,.6)",
        borderWidth: 3,
        borderColor: "rgba(253, 183, 90,.6)",
        pointBorderWidth: 0,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
      {
        label: "Finance",
        data: [60, 50, 70, 90, 80, 89, 90, 91, 85, 86, 87, 88],
        backgroundColor: "rgba(90,136,253,0.6)",
        borderWidth: 3,
        borderColor: "rgba(90,136,253,0.6)",
        pointBorderWidth: 0,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
      {
        label: "Human Resources",
        data: [10, 55, 45, 75, 60, 86, 45, 25, 45, 53, 45, 55],
        backgroundColor: "rgba(253,90,245,0.6)",
        borderWidth: 3,
        borderColor: "rgba(253,90,245,0.6)",
        pointBorderWidth: 0,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 10,
      },
    },
    tooltips: {
      intersect: false,
      titleFontFamily: "Helvetica",
      titleMarginBottom: 10,
      xPadding: 10,
      yPadding: 10,
      cornerRadius: 3,
    },
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true,
          },
          ticks: {
            display: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
})
document.getElementById('changeDataButton').addEventListener('click', function() {
  // Code to change the dataset numbers
});
document.getElementById('changeDataButton').addEventListener('click', function() {
  // Change the dataset numbers
  var newData = [60, 30, 50, 70, 40, 80, 35, 55, 25, 50, 60, 70];
  myline.data.datasets[0].data = newData;

  // Update the chart
  myline.update();
});



// let ctx1 = document.getElementById("canvas1").getContext("2d");
// let ctx2 = document.getElementById("canvas2").getContext("2d");
// let ctx3 = document.getElementById("canvas3").getContext("2d");
// let ctx4 = document.getElementById("canvas4").getContext("2d");
// var lineChart1 = new Chart(ctx1, config1);
// var lineChart2 = new Chart(ctx2, config2);
// var lineChart3 = new Chart(ctx3, config3);
// var lineChart4 = new Chart(ctx4, config4);
