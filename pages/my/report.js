import * as echarts from '../../ec-canvas/echarts';

let chart = null;
let chart2 = null;
let chart3 = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    grid:{
      containLabel: true,
      width:"90%",
      left:0,
      right:0,
      heigit:500
    },
    xAxis: {
      name: '(年)',
      nameGap: 4,
      type: 'category',
      boundaryGap: false,
      data: ['2013', '2014', '2015', '2016', '2017', '2018']
      // position:20
    },
    yAxis: {
      name: '(元/月)',
      type: 'value'
    },
    series: [{
      data: [6000, 7000, 8000, 8300, 8500, 9200],
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
  canvas.setChart(chart2);

  var option = {

    angleAxis: {
    },
    radiusAxis: {
      type: 'category',
      data: ['北京工业大学', '清华大学', '北京工商大学', '北京理工大学'],
      z: 10
    },
    polar: {
    },
    series: [{
      type: 'bar',
      data: [1, 2, 3, 4],
      coordinateSystem: 'polar',
      name: 'A',
      stack: 'a'
    }, {
      type: 'bar',
      data: [2, 4, 6, 8],
      coordinateSystem: 'polar',
      name: 'B',
      stack: 'a'
    }, {
      type: 'bar',
      data: [1, 2, 3, 4],
      coordinateSystem: 'polar',
      name: 'C',
      stack: 'a'
    }],
    legend: {
      show: false,
      data: ['A', 'B', 'C']
    }
  };

  chart2.setOption(option);
  return chart2;
}


function initChart3(canvas, width, height) {
  chart3 = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart3);

  var option = {
   
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['北京大学', '清华大学', '北京工商大学', '北京理工大学', '北京工业大学']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '北京大学',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '清华大学',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '北京工商大学',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '北京理工大学',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '北京工业大学',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


  chart3.setOption(option);
  return chart3;
}

// pages/my/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    ec2: {
      onInit: initChart2
    },
    ec3:{
      onInit: initChart3
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(function () {
      // 获取 chart 实例的方式
      console.log(chart)
    }, 2000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})