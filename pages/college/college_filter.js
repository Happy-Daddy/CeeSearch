// pages/college/college_filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTabSelected: -1,
    stopScroll: 0,
    windowHeight: "",
    filterContent: 0
  },
  navTabClick: function (e) {
    var clickId = e.currentTarget.id;
    if (clickId == this.data.navTabSelected) {
      this.setData({
        navTabSelected: -1,
        filterContent: 0,
        stopScroll:0
      });
    } else {
      this.setData({
        navTabSelected: clickId,
        filterContent: 1,
        stopScroll: 1
      });
    }
  },
  closeFilterContent:function(){
    this.setData({
      filterContent:0,
      navTabSelected:-1,
      stopScroll: 0
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var res = wx.getSystemInfoSync();
    this.setData({
      windowHeight: res.windowHeight + "px"
    });
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