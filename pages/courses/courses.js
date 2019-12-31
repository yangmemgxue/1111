// pages/courses/courses.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [],
    chapters:[],
    isShow: false,
    isFree:true,
    teacher:[],
    relation_courses:[],
    // indicatorDots: true,
    // vertical: false,
    // interval: 2000,
    // duration: 500,
    // height:'',
    scrollTop:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    // console.log(options)
    let id=options.id
    console.log(this.data.height)
    wx.request({
      url: `https://itfun.tv/api/v1/courses/${id}.json`,
      success: (res) => {
        console.log(res)
        that.setData({
          // height: wx.getSystemInfoSync().windowHeight,//获取屏幕高度
          courses:res.data.course,
          chapters: res.data.chapters,
          teacher:res.data.teacher,
          relation_courses: res.data.relation_courses
        })
      }
    })
  },
  expand(){
    let that = this;
    that.setData({
      isShow:!that.data.isShow
    })
  },
  // 滑动隐藏
  onPageScroll: function (t) {
    var a = this;
    // console.log(t.scrollTop)
    a.setData({
      scrollTop: t.scrollTop
    })
  },
  toDetails(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/charpters/charpters?id=${e.currentTarget.dataset.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },


})