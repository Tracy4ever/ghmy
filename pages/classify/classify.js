// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "卫生门",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '铁的',
            /*image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117972563.jpg"*/
            image:"/images/logo.jpg",
            description:"物美价廉，质量好",
            price:"￥100"
          },
          {
            child_id: 2,
            name: '铜的',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161207/148110444480.jpg",
            description: "可用500年..........",
            price: "￥200"
          },
          {
            child_id: 3,
            name: '玻璃的',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117973270.jpg"
          },
          {
            child_id: 4,
            name: '不锈钢的',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "不锈钢门",
        ishaveChild: false,
        children:
        [
          {
            child_id: 1,
            name: '气垫bb',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"
          },
          {
            child_id: 2,
            name: '修容/高光',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381411.jpg"
          },
          {
            child_id: 3,
            name: '遮瑕',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815181.jpg"
          },
          {
            child_id: 4,
            name: '腮红',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815759.jpg"
          },
          {
            child_id: 5,
            name: '粉饼',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153816983.jpg"
          },
          {
            child_id: 6,
            name: '粉底',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
          },
          {
            child_id: 7,
            name: '蜜粉/散粉',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
          },
          {
            child_id: 8,
            name: '隔离霜',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "铝合金趟门",
        ishaveChild: false,
        children:
        [
          {
            child_id: 1,
            name: '淡香水EDT',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
          },
          {
            child_id: 2,
            name: '浓香水EDP',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159789883.jpg"
          },
          {
            child_id: 3,
            name: '香体走珠',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815979307.jpg"
          },
          {
            child_id: 4,
            name: '古龙香水男士的最爱',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159765589.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "木门",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 5,
        cate_name: "橱柜",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 6,
        cate_name: "淋浴门",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 7,
        cate_name: "定制衣柜",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 8,
        cate_name: "厨房三件套",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 9,
        cate_name: "净水器",
        ishaveChild: false,
        children: []
      }
      
    ],
    curNav: 1,
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  //事件处理函数 
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值 
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index 
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})