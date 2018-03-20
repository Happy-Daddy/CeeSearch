// pages/search_result/search_result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  slideDown:{},
  filter_display: "display:none;top:-" + wx.getSystemInfoSync().windowHeight + "px;",
   
    province: ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '山西省', '甘肃省', '青海省', '宁夏回族自治区'],
    index: 1,
    range:['综合排名由高到低','综合排名由低到高','录取风险从高到低','录取风险从低到高'],
    range_index:0

  },
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindRangeChange: function(e){
    this.setData({
      range_index: e.detail.value
    })
  },
  // 给首页的按钮加上临时的跳转功能
  loadMore: function () {
    wx.navigateTo({
      url: '../search_result/more_result',
    })
  },
  backHome: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },

  // 显示筛选菜单
  showFilter: function () {
    // console.log("hey");
    // var query = wx.createSelectorQuery();
    // query.select('#filter_container').
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    });
    this.animation = animation;
    var res = wx.getSystemInfoSync();
    animation.top(0).step();
    this.setData({
      scroll_style: "height:" + res.windowHeight + "px; width:100%; overflow:hidden;",
      filter_display:"display:block;" 
      // filter_display:"display:block;"
    });
    this.setData({
      slideDown: animation.export()
    });
  },
  // 筛选完成
  filter_done:function(){
    this.setData({
      scroll_style:"height:auto; width:auto;",
      filter_display: "top:-" + wx.getSystemInfoSync().windowHeight + "px;"
          });
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