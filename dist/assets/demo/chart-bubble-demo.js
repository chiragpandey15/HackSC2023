// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bubble Chart Example
const ctx = document.getElementById('myChart123');
const data = {
  datasets: [
    {
      label: '',
      data: [{
        x: 10,
        y: 30,
        r: 1
      }],
      backgroundColor: 'rgb(255,255,255)'
    },
    {
      label: 'Laid Off People',
      data: [{
        x: 20,
        y: 30,
        r: 100
      }],
      backgroundColor: 'rgb(255, 0, 0, 0.2)'
    }, {
      label: 'Java',
      data: [{
        x: 23,
        y: 30,
        r: 15
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'Working',
      data: [{
        x: 25,
        y: 30,
        r: 100
      }],
      backgroundColor: 'rgb(0, 255,0,0.2)'
    },
    {
      label: '',
      data: [{
        x: 40,
        y: 30,
        r: 1
      }],
      backgroundColor: 'rgb(255,255,255)'
    }]
};

new Chart(ctx, {
  type: 'bubble',
  data: data,
  options: {
  }
});