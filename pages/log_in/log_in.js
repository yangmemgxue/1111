// pages/log_in/log_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonData: ["登录", "会员注册"],
    currentIndex: 0,
    radioData: [{
      name: '男',
      value: '1'
    }, {
      name: '女',
      value: '2'
    }, {
      name: '其他',
      value: '3'
    }],
    error_email: '',
    error_password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  change(e) {
    console.log(e)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  formSubmit: function(e) {
    console.log(e)
    const data = {
      grant_type: 'password',
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',
      client_secret: 'd8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734',
      username: e.detail.value.email,
      password: e.detail.value.password
    }
    wx.request({
      url: 'https://itfun.tv/oauth/token',
      method: 'POST',
      data: data,
      success: (res) => {
        // console.log(res.statusCode)
        wx.setStorageSync("token_type", res.data.token_type)
        wx.setStorageSync("access_token", res.data.access_token)

        if (res.statusCode == 200) {
          // console.log(4444)
          wx.navigateTo({
            url: '../mine/mine',
          })
        } else {
          wx.showModal({
            title: '登录信息有误',
            content: '请重新登陆',
            showCancel: false,
          })
        }
      }
    })
  },
  // 注册
  register: function(e) {
    console.log(e)
    const data = {
      user: {
        last_name: e.detail.value.last_name,
        first_name: e.detail.value.first_name,
        email: e.detail.value.email,
        password: e.detail.value.password,
        sex: e.detail.value.sex ? e.detail.value.sex : 3
      }
    }
    wx.request({
      url: 'https://itfun.tv/api/v1/users.json ',
      method: "post",
      data: data,
      success: (res) => {
        console.log(res)
        if (res.statusCode == 200) {
          wx.setStorageSync("token_type", res.data.token_type)
          wx.setStorageSync("access_token", res.data.access_token)
          wx.showModal({
            title: '注册成功',
            content: '快去学习吧',
            // showCancel: false,
          })
          wx.switchTab({
            url: '/pages/users/users',
          })
        } else {
          let errors = res.data.errors
          console.log(errors)
          this.setData({
            error_email: errors.email ? "*" + errors.email : '',
            error_password: errors.password ? "*" + errors.password : ''
          })
        }
      }
    })
  },
  toText: function(e) {
    wx.switchTab({
      url: '/pages/text/text',
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