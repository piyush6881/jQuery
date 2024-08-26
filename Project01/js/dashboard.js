// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Navbar: https://codepen.io/themustafaomar/pen/VKbQyZ

'use strict'

function $(selector) {
  return document.querySelector(selector)
}

function find(el, selector) {
  let finded
  return (finded = el.querySelector(selector)) ? finded : null
}

function siblings(el) {
  const siblings = []
  for (let sibling of el.parentNode.children) {
    if (sibling !== el) {
      siblings.push(sibling)
    }
  }
  return siblings
}

const showAsideBtn = $('.show-side-btn')
const sidebar = $('.sidebar')
const wrapper = $('#wrapper')

showAsideBtn.addEventListener('click', function () {
  $(`#${this.dataset.show}`).classList.toggle('show-sidebar')
  wrapper.classList.toggle('fullwidth')
})

if (window.innerWidth < 767) {
  sidebar.classList.add('show-sidebar');
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 767) {
    sidebar.classList.remove('show-sidebar')
  }
})

// dropdown menu in the side nav
var slideNavDropdown = $('.sidebar-dropdown');

$('.sidebar .categories').addEventListener('click', function (event) {
  event.preventDefault()

  const item = event.target.closest('.has-dropdown')

  if (! item) {
    return
  }

  item.classList.toggle('opened')

  siblings(item).forEach(sibling => {
    sibling.classList.remove('opened')
  })

  if (item.classList.contains('opened')) {
    const toOpen = find(item, '.sidebar-dropdown')

    if (toOpen) {
      toOpen.classList.add('active')
    }

    siblings(item).forEach(sibling => {
      const toClose = find(sibling, '.sidebar-dropdown')

      if (toClose) {
        toClose.classList.remove('active')
      }
    })
  } else {
    find(item, '.sidebar-dropdown').classList.toggle('active')
  }
})

$('.sidebar .close-aside').addEventListener('click', function () {
  $(`#${this.dataset.close}`).classList.add('show-sidebar')
  wrapper.classList.remove('margin')
})
// dbwr main content
var performanceCtx = document.getElementById('performanceOverTimeChart').getContext('2d');
var performanceChart = new Chart(performanceCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Performance Score',
            data: [70, 72, 75, 78, 76, 79],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var departmentCtx = document.getElementById('departmentPerformanceChart').getContext('2d');
var departmentChart = new Chart(departmentCtx, {
    type: 'bar',
    data: {
        labels: ['Sales', 'Tech', 'HR', 'Management'],
        datasets: [{
            label: 'Avg. Performance Score',
            data: [85, 90, 75, 80],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function generateReport() {
alert('Generating custom report based on selected criteria...');
// Additional code to interact with backend APIs to generate reports
}

function applyFilters() {
var department = document.getElementById('department').value;
var startDate = document.getElementById('date-start').value;
var endDate = document.getElementById('date-end').value;
alert(`Applying filters: Department = ${department}, Date Range = ${startDate} to ${endDate}`);
// Code to fetch and update report data based on selected filters
}
document.addEventListener('DOMContentLoaded', function() {
var ctx1 = document.getElementById('performanceDistributionChart').getContext('2d');
var performanceChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Top Performers', 'Average', 'Below Average'],
        datasets: [{
            data: [120, 200, 80],
            backgroundColor: ['#28a745', '#ffc107', '#dc3545']
        }]
    }
});

var ctx2 = document.getElementById('monthlyGrowthChart').getContext('2d');
var growthChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Growth Rate',
            data: [5, 10, 4, 8, 6],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
});
document.addEventListener('DOMContentLoaded', function() {
const ctx = document.getElementById('performanceTrendsChart').getContext('2d');
const performanceTrendsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ 
            label: 'Performance Score',
            data: [80, 82, 85, 83, 86, 88],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
});
});

