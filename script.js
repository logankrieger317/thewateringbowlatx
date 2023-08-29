// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// AREA CHART
var barChartOptions = {
  series: [{
    name: 'Labor',
  data: [546,570,505,764,938,816,601,588,/*9th*/ 668,387,401,858,899,481,544,434,/*17th*/ 448,514,864,863,449,418,546,572,467,837,605,526 ]
  }, {
    name: 'Sales',
  data: [1095.99,1454.95,1180.96,1225.5,1516.05,1709.76,932.82,987.67,/*9th */ 914.20,1068.12,1169.83,1519.53,1395.06,753.65,834.72,1282.44,/*17th*/846.68,1028,1123.67,1292.42,738.17,865.19,880.12,593.59,881.55,1146.36,1586.26,1285.75,]
  }],
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#4f35a1",
    "#246dec"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '80%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["8/1", "8/2", "8/3", "8/4", "8/5", "8/6", "8/7", "8/8", "8/9", "8/10", 
    "8/11", "8/12", "8/13", "8/14", "8/15", "8/16", "8/17", "8/18", "8/19", "8/20", 
    "8/21", "8/22", "8/23", "8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", 
    "8/31"
    ,]
  },
  yaxis: {
    title: {
      text: "Dollars"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Labor',
    data: [3323,2902,3667,2840,0]
  }, {
    name: 'Sales',
    data: [6473.53,5659.35,5115.51,4366.81,0.0]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: [ "August 1-5", "August 6-12", "August 13-19", "August 20-26","August 27-31"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Dollars',
      },
    },
    // {
    //   opposite: true,
    //   title: {
    //     text: '',
    //   },
    // },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

// AREA CHART
var monthlyChartOptions = {
  series: [{
    name: 'Labor',
    data: [23617.83,17695,17109]
  }, {
    name: 'Sales',
    data: [34818.35, 38071.82, 28445.39 ]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: [ "June", "July", "August", "September"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Dollars',
      },
    },
    // {
    //   opposite: true,
    //   title: {
    //     text: '',
    //   },
    // },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var monthlyChart = new ApexCharts(document.querySelector("#monthly-chart"), monthlyChartOptions);
monthlyChart.render();