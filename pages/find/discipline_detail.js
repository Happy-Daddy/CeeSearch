import * as echarts from '../../ec-canvas/echarts';

let chart = null;
let chart2 = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    xAxis: {
      name: '(年)',
      nameGap: 4,
      type: 'category',
      boundaryGap: false,
      data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: {
      name: '(元/月)',
      type: 'value'
    },
    series: [{
      data: [ 6000, 7000, 8000, 8300, 8500, 9200],
      type: 'line',
      areaStyle: {}
    }]
  };

  chart.setOption(option);
  return chart;
}


function initChart2(canvas, width, height) {
  chart2 = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      // orient: 'horizontal',
      // // x: 'center',
      // left:'center',
      data: ['北京', '上海', '广州', '深圳', '天津']
    },
    series: [
      {
        name: '北京',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: [
          { value: 335, name: '北京' },
          { value: 310, name: '上海' },
          { value: 234, name: '广州' },
          { value: 135, name: '深圳' },
          { value: 1548, name: '天津' }
        ]
      }
    ]
  };

  chart2.setOption(option);
  return chart2;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
    ec2: {
      onInit: initChart2
    },
    tabSelected:1

  },

  tabClick: function (e) {
    this.setData({
      tabSelected: e.currentTarget.id
    });
    
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      console.log(chart)
    }, 2000);
  }
});
