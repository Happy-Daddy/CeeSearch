// pages/college/college_detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favor_s:"",
    goal_s:"",
    zsjzView:-1,
    content:"",
    zsjz:'<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; -webkit-margin-before: 0px; -webkit-margin-after: 0px; color: rgb(44, 52, 59); font-family: Intro-Book; white-space: normal; background-color: rgb(255, 255, 255); text-indent: 2em; text-align: justify;">广东以色列理工学院（英文缩写GTIIT）是由享誉全球的知名高等学府以色列理工学院<span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;">（英文缩写Technion）</span>与汕头大学<span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;">（英文缩写STU）</span>合作办学的一所具有独立法人资格的中外合作大学，坐落于广东省汕头市。</p ><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; -webkit-margin-before: 0px; -webkit-margin-after: 0px; color: rgb(44, 52, 59); font-family: Intro-Book; white-space: normal; background-color: rgb(255, 255, 255); text-indent: 2em;">广东以色列理工学院于2016年12月5日由中国教育部批准正式设立，2017年第一年招生，是我国第一所引进以色列优质高等教育资源的具有独立法人资格的中外合作大学。著名经济学家李剑阁、2004年诺贝尔化学奖得主阿龙·切哈诺沃分别为第一任校长、常务副校长。<span style="font-family: Simsun, serif; text-align: justify;">&nbsp;</span></p ><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; -webkit-margin-before: 0px; -webkit-margin-after: 0px; color: rgb(44, 52, 59); font-family: Intro-Book; white-space: normal; background-color: rgb(255, 255, 255); text-indent: 2em;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px;">广东以色列理工学院</span>将致力建设成为一所具有国际公认高水平教育、科研和创新能力的研究型大学，全面引进全球知名的以色列理工学院的优质教育资源，开展教育教学创新，培养具有创新能力、全球视野和人文素养的卓越工程师和科技人才。广东省人民政府、汕头市人民政府和李嘉诚基金会共同支持学校的设立。</p ><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 20px; padding: 0px; border: 0px; -webkit-margin-before: 0px; -webkit-margin-after: 0px; color: rgb(44, 52, 59); font-family: Intro-Book; white-space: normal; background-color: rgb(255, 255, 255); text-indent: 2em; text-align: justify;">广东以色列理工学院的教学语言为英语，最终将设置涵盖工学、理学和生命科学三个领域的10个专业，在校学生规模达5000人。学校依法授予学士、硕士及博士学位，毕业生将获得广东以色列理工学院的毕业证书、学位证书，以及以色列理工学院的学位证书。</p ><p><br/></p >',
    tabSelected:3,
    view_more:"查看更多",
    hidden_list:"hidden_list",
    multiArray: [['北京', '天津','河北','山东','安徽'], ['文科','理科'], ['本一批','本二批','提前批']],
    multiIndex: [0, 0, 0]
  },
  tabClick:function(e){
    this.setData({
      tabSelected: e.currentTarget.id
    });
  },
  switchZsjz:function(e){
    var targetId = parseInt(e.currentTarget.id.split('_')[1]);
    
    if (this.data.zsjzView == targetId){
      this.setData({
        zsjzView: -1
      });
    }else{
      this.setData({
        zsjzView: targetId
      });
    }
    
   
  },

 
  view_more:function(){
    // console.log(this.data.view_more);
    if(this.data.view_more == "查看更多"){
      this.setData({
        view_more: "收起",
        hidden_list: ""
      });
    }else{
      this.setData({
        view_more: "查看更多",
        hidden_list: "hidden_list"
      });
    }
  },
  
  switch_favor: function () {
    if (this.data.favor_s == "") {
      this.setData({
        favor_s: "favor_s"
      });
    } else {
      this.setData({
        favor_s: ""
      });
    }
  },
  switch_goal: function () {
    if (this.data.goal_s == "") {
      this.setData({
        goal_s: "goal_s"
      });
    } else {
      this.setData({
        goal_s: ""
      });
    }
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['文科', '理科'];
            data.multiArray[2] = ['本一批', '本二批', '提前批'];
            break;
          case 1:
            data.multiArray[1] = ['文科', '理科'];
            data.multiArray[2] = ['本一批', '本二批', '提前批'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['本一批', '本二批', '提前批'];
                break;
              case 1:
                data.multiArray[2] = ['本一批', '本二批', '提前批'];
                break;
              
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['本一批', '本二批', '提前批'];
                break;
              case 1:
                data.multiArray[2] = ['本一批', '本二批', '提前批'];
                break;
              case 2:
                data.multiArray[2] = ['本一批', '本二批', '提前批'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var article = this.data.zsjz;

    this.setData({
      content: WxParse.wxParse('article', 'html', article, this, 5)
    });
    // console.log(this.data.content);
    
  },
})