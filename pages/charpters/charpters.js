// pages/charpters/charpters.js
const app = getApp();
Page({
  data: {
    chapters: [],
    showSilde: false,
    //article将用来存储towxml数据
    article: {},
    // 侧边栏以下
    open: false,
    // mark 是指原点x轴坐标
    mark: 0,
    // newmark 是指移动的最新点的x轴坐标 
    newmark: 0,
    istoright: true

  },
  onLoad: function(options) {
    console.log(options.id)
    let id = options.id
    //请求markdown文件，并转换为内容
    wx.request({

      url: `https://itfun.tv/api/v1/chapters/${id}.json`,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },

      success: (res) => {
        //将markdown内容转换为towxml数据
        let data = app.towxml.toJson(res.data.chapter.body, 'markdown');
        //设置文档显示主题，默认'light'
        data.theme = 'light';
        //设置数据
        console.log(res)
        this.setData({
          chapter: res.data.chapter,
          chapters: res.data.chapters,
          course: res.data.course,
          article: data
        })
      }
    })
  },
  // 点击小图标事件
  touch: function(e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  showSilde() {
    this.setData({
      showSilde: !this.data.showSilde
    })
  },
  tap_start: function(e) {
    // touchstart事件
    // 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
    this.data.mark = this.data.newmark = e.touches[0].pageX;
  },

  tap_drag: function(e) {
    // touchmove事件
    this.data.newmark = e.touches[0].pageX;

    // 手指从左向右移动
    if (this.data.mark < this.data.newmark) {
      this.istoright = true;
    }

    // 手指从右向左移动
    if (this.data.mark > this.data.newmark) {
      this.istoright = false;
    }
    this.data.mark = this.data.newmark;
  },

  tap_end: function(e) {
    // touchend事件
    this.data.mark = 0;
    this.data.newmark = 0;
    // 通过改变 opne 的值，让主页加上滑动的样式
    if (this.istoright) {
      this.setData({
        open: true
      });
    } else {
      this.setData({
        open: false
      });
    }
  },
  news:function(e) {
    console.log(e)
    let id=e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/charpters/charpters?id=${id}`,
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})