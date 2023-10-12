$(document).ready(function() {
    $("div.divsize").on("mouseenter", function() {
        $(this).css("border", "3px solid black");
    }).on("mouseleave", function() {
        $(this).css("border", ""); 
    });
    $(".addborder").on("mouseenter", function() {
        $(this).css("border", "3px solid black");
    }).on("mouseleave", function() {
        $(this).css("border", ""); 
    });
  
    $(".hoverbtn").on("mouseenter", function() {
        $(this).css("background-color", "rgb(243, 42, 136)");
    }).on("mouseleave", function() {
        $(this).css("background-color", "");

    });


    $("show-dashboard-button").on("click", function() {
        var dashboard =$("dashboard");
        if (dashboard.classList.contains("hidden")) {
          dashboard.classList.remove("hidden");
        } else {
          dashboard.classList.add("hidden");
        }
      });
      
const pieChart = $('#pie-chart');
const data = [
  { label: 'Math', value: 80 },
  { label: 'Science', value: 75 },
  { label: 'English', value: 90 },
  { label: 'History', value: 65 },
  { label: 'Social Studies', value: 85 }
];
pieChart.jqChart({
  type: 'pie',
  data: {
    labels: data.map(d => d.label),
    datasets: [{
      data: data.map(d => d.value),
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    }]
  }
});
      
});



