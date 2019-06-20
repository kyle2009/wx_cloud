// pages/day001/day001.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    
    addData:function(){
        wx.cloud.init({
            env: 'd8f667d4aa469b16'
        })

        const db = wx.cloud.database({
            env: 'd8f667d4aa469b16'
        });
        db.collection('todos').add({
            // data 字段表示需新增的 JSON 数据
            data: {
                description: "learn cloud database",
                due: new Date("2018-09-01"),
                tags: [
                    "cloud",
                    "database"
                ],
                location: new db.Geo.Point(113, 23),
                done: false
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(console.error)
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