Page({
  data: {
    inputShowed: false,
    inputVal: "",
    tabSelected:0,
    categorySelected:0,
    contentShowed:false
  },
  tabClick: function (e) {
    this.setData({
      tabSelected: e.currentTarget.id
    });
  },
  categoryClick: function (e) {
    this.setData({
      categorySelected: parseInt(e.currentTarget.id)
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true,
      contentShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      contentShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});