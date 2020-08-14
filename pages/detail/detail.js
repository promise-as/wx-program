// pages/detail/detail.js
let datas = require('../../datas/list-data.js');

const appDatas = getApp() // 获取app.js中的数据
// console.log(appDatas, 111)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {}, // 详情数据
    index: 1, // 下标
    isMusicPlay: false, // 是否播放
    isCollected: false  // 是否收藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取参数值
    let index = options.index;
    // 更新data中detailObj的状态值
    this.setData({
      detailObj: datas.list_data[index],
      index: index
    })
  },

  handleMusicPlay(){
    // 处理音乐播放
    let isMusicPlay = !this.data.isMusicPlay
    this.setData({
      isMusicPlay: isMusicPlay
    });
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    // 控制音乐播放
    if(isMusicPlay){
      // 播放音乐
      let {dataUrl, title} = this.data.detailObj.music;
      backgroundAudioManager.title = title
      // 设置了 src 之后会自动播放
      backgroundAudioManager.src = dataUrl
    }else{
      // 暂停音乐
      backgroundAudioManager.pause()
    }
  },

  handleCollection(){
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected: isCollected
    })

    let title = isCollected?'收藏成功':'取消收藏';
    wx.showToast({
      title: title,
      icon:'success'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})