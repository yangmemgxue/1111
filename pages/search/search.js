// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: ["Laraval", "WorkerMan", "HTML", "CSS", "JavaScript", "ECMAScript", "Web", "MySQL",
      "React Native", "Vue", "React", "Webpack", "PHP", "Ruby On Rails"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  search(e) {
    console.log(e)
    let keyWord = e.detail.value
    wx.navigateTo({
      url: `/pages/searched/searched?keyWord=${keyWord}`,
    })
  },
  search_hot(e) {
    console.log(e);
    let keyWord = e.currentTarget.dataset.keyword
    wx.navigateTo({
      url: `/pages/searched/searched?keyWord=${keyWord}`,
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