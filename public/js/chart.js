const ctx = document.getElementById("myChart").getContext("2d");
 myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Movies", "Toys", "video Games", "Candy", "book"],
    datasets: [
      {
        label: "Expances",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(29, 230, 70)",
          "rgb(210, 29, 230)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
