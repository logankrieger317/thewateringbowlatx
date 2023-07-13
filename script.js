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
    data: [695,754,476,246,607,415,455,741,681,457,431,539]
  }, {
    name: 'Sales',
    data: [1535.96,1465.56,1341.21,854.88,806.62,1194.01,2261.08,1818.5,1523.40,942.61,1231.71,979.1]
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
    categories: ["7/1","7/2","7/3","7/4","7/5","7/6","7/7","7/8","7/9","7/10","7/11","7/12","7/13","7/14","7/15","7/16","7/17","7/18","7/19","7/20","7/21","7/22","7/23","7/24","7/25","7/26","7/27","7/28","7/29","7/30","7/31"
   ,],
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
    data: [4124.0,3648,2849,0.0,0.0]
  }, {
    name: 'Sales',
    data: [8484.19,9459.32,4028.75,0,0]
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
  labels: ["June 24-30" ,"July 1-7", "July 8-14", "July 15-21", "July 22-31"],
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
