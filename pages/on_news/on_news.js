// pages/on_news/on_news.js

Page({
  data: {
    src:''

  },

  onLoad: function (options) {
    console.log(options.url)
    this.setData({
      src: options.url
    })
  },
})