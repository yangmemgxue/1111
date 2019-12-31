// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    slugs: [],
    courses: [],
    currentIndex: 0,
    bodyHeight: '',
    indicatorDots: true,
    vertical: false,
    interval: 2000,
    duration: 500,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.init()
  },
  init() {
    let that = this;
    wx.request({
      url: 'https://itfun.tv/api/v1/categories.json',
      success: (res) => {
        // console.log(res)
        let slugs = res.data.categories.map(item => {
          return item.slug
        })
        // console.log(slugs)
        that.setData({
          categories: res.data.categories,
          slugs: slugs,
        })
        that.initCourse()
      },
    })
  },
  initCourse: function() {
    let that = this;
    let slug = that.data.slugs[that.data.currentIndex];
    // console.log(slug)
    wx.request({
      url: `https://itfun.tv/api/v1/categories/${slug}.json`,
      success: function(res) {
        // console.log(res)
        that.setData({
          courses: res.data.courses
        })
        that.setHeight()
      }
    })
  },
  //取高度
  setHeight() {
    let bodyHeight = this.data.courses.length * 526 + 'rpx'
    // console.log(bodyHeight)
    this.setData({
      bodyHeight: bodyHeight
    })
  },
  //切换name
  change: function(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    this.initCourse()
  },

  toCourse: function(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo ({
      url:`/pages/courses/courses?id=${id}`
    })
  },










  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

})