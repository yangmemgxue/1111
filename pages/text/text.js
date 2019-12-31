// pages/text/text.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    slide_courses: [],
    new_courses:[],
    likes_courses:[],
    recommended_courses:[],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay:true,
    interval: 2000,
    duration: 500,
    indicatorDots: false,//隐藏之前的点点

  },
  onLoad: function() {
    var that = this //不要漏了这句，很重要
    wx.request({
      url: 'https://itfun.tv/api/v1/home.json',
      headers: {
        'Content-Type': '/api/v1/home.json'
      },
      success: function(res) {
        console.log(res)
        //将获取到的json数据，存在名字叫xxx的这个数组中
        that.setData({
          slide_courses: res.data.slide_courses,
          new_courses: res.data.new_courses,
          likes_courses: res.data.likes_courses,
          recommended_courses: res.data.recommended_courses,
        })
      }
    })
  },
   swiperChange(e) {
     console.log(e)
    let current = e.detail.current;
    // console.log(current, '轮播图')
    let that = this;
    that.setData({
      swiperCurrent: current,
    })
  },
  scroll(e) {
    console.log(e)
  },
  toNews:function(e) {
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  toSearch:function(e){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})
