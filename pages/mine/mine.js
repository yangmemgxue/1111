// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    navData: ['主页', '喜欢的课程', '观看历史'],
    user: [],
    courses: [],
    learnings: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this //不要漏了这句，很重要
    var token_type = wx.getStorageSync('token_type')
    var access_token = wx.getStorageSync('access_token')
    wx.request({
      url: 'https://itfun.tv/api/v1/users/me.json',
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: function(res) {
        console.log(res)
        that.setData({
          user: res.data.user
        })
        that.get_course_like()
      }
    })
  },
  get_course_like: function() {
    var that = this
    var token_type = wx.getStorageSync('token_type')
    var access_token = wx.getStorageSync('access_token')
    wx.request({
      url: 'https://itfun.tv/api/v1/users/like_courses.json',
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: function(res) {
        console.log(res)
        that.setData({
          courses: res.data.courses
        })
        that.get_learnings()
      }
    })
  },
  get_learnings: function() {
    var that = this
    var token_type = wx.getStorageSync('token_type')
    var access_token = wx.getStorageSync('access_token')
    wx.request({
      url: 'https://itfun.tv/api/v1/users/learnings.json',
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: function(res) {
        console.log(res)
        that.setData({
          learnings: res.data.courses
        })
      }
    })
  },
  changenav(e) {
    // console.log(e)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  toUser:(e) => {
    wx.removeStorage('token_type')
    wx.removeStorage('access_token')
    wx.switchTab({
      url: '/pages/users/users'
    })
  },

  toCourse: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/courses/courses?id=${id}`
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