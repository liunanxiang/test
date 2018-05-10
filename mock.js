const Mock = require("mockjs");
/*地区选择*/
Mock.mock("/api/localtionList", (req, res) => {
  return {
    data: [
      {
        value: "beijing",
        label: "北京",
        children: [
          { value: "gugong", label: "故宫" },
          { value: "tiantan", label: "天坛" },
          { value: "wangfujing", label: "王府井" }
        ]
      },
      {
        value: "jiangsu",
        label: "江苏",
        children: [
          {
            value: "nanjing",
            label: "南京",
            children: [{ value: "fuzimiao", label: "夫子庙" }]
          },
          {
            value: "suzhou",
            label: "苏州",
            children: [
              { value: "zhuozhengyuan", label: "拙政园" },
              { value: "shizilin", label: "狮子林" }
            ]
          }
        ]
      }
    ]
  };
});
/*首页轮播*/
Mock.mock("/api/bannerdata", (req, res) => {
  return {
    data: [
      {
        id: "1",
        img: "./static/img/goods/swipe_3.jpg"
      },
      {
        id: "2",
        img: "./static/img/goods/swipe_2.jpg"
      },
      {
        id: "3",
        img: "./static/img/goods/swipe_1.jpg"
      }
    ]
  };
});
//导航
Mock.mock("/api/navList", (req, res) => {
  return {
    data: [
      {
        id: "1",
        title: "热门",
        name: "hot"
      },
      {
        id: "2",
        title: "热门",
        name: "receive-gift"
      },
      {
        id: "3",
        title: "热门",
        name: "goods-collect"
      },
      {
        id: "4",
        title: "热门",
        name: "cash-on-deliver"
      }
    ]
  };
});
//楼层
Mock.mock("/api/homedata", (req, res) => {
  return {
    data: [
      {
        Category: {
          Id: "1",
          ToTop: "置顶",
          class: "求购",
          TopText: "全国回收废纸，有货及时联系我 1565665556（微信同号）"
        },
        ProductImg: [
          {
            CategoryId: "1",
            GoodsImage: "./static/img/goods/home_floor_one_1.jpg"
          },
          {
            CategoryId: "2",
            GoodsImage: "./static/img/goods/home_floor_one_2.jpg"
          },
          {
            CategoryId: "3",
            GoodsImage: "./static/img/goods/home_floor_one_2.jpg"
          }
        ],
        Icon: "./static/img/icon/tab_member.png",
        UserName: "王五",
        Local: "江苏 苏州"
      },

      {
        Category: {
          Id: "2",
          ToTop: "置顶",
          class: "求购",
          TopText: "全国回收废纸，废物回收，有货及1565665556（微信同号）"
        },
        ProductImg: [
          {
            CategoryId: "1",
            GoodsImage: "./static/img/goods/home_floor_one_1.jpg"
          },
          {
            CategoryId: "2",
            GoodsImage: "./static/img/goods/home_floor_one_2.jpg"
          },
          {
            CategoryId: "3",
            GoodsImage: "./static/img/goods/home_floor_one_2.jpg"
          }
        ],
        Icon: "./static/img/icon/tab_member.png",
        UserName: "李四",
        Local: "江苏 苏州"
      },
      {
        Category: {
          Id: "3",
          ToTop: "置顶",
          class: "求购",
          TopText: "全国回废物回收， 1565665556（微信同号）"
        },
        ProductImg: [
          {
            CategoryId: "1",
            GoodsImage: "./static/img/goods/home_floor_one_1.jpg"
          },

          {
            CategoryId: "3",
            GoodsImage: "./static/img/goods/home_floor_one_2.jpg"
          }
        ],
        Icon: "./static/img/icon/tab_member.png",
        UserName: "张三",
        Local: "福建 厦门"
      }
    ]
  };
});
//
/*分类详情*/
Mock.mock("/api/categorydata", (req, res) => {
  return {
    data: [
      {
        busines: {
          business_id: 1,
          business_name: "废纸"
        },
        List: [
          {
            CategoryId: "1",
            MarketName: "废纸", //market 详情
            MacketTitle: "4月10日各地区废纸请报价",
            Date: "2018年4月10日"
          },
          {
            CategoryId: "2",
            MarketName: "废纸",
            MacketTitle: "4月10日各地区废纸请报价",
            Date: "2018年4月9日"
          },
          {
            CategoryId: "3",
            MarketName: "废纸",
            MacketTitle: "4月10日各地区废纸请报价",
            Date: "2018年4月9日"
          },
          {
            CategoryId: "4",
            MarketName: "废纸",
            MacketTitle: "4月9日各地区废纸请报价",
            Date: "2018年4月9日"
          }
        ]
      },
      {
        busines: {
          business_id: 2,
          business_name: "废钢铁",
          List: [
            {
              CategoryId: "1",
              MarketName: "废钢铁", //market 详情
              MacketTitle: "4月8日各地区废钢铁请报价",
              Date: "2018年4月8日"
            },
            {
              CategoryId: "2",
              MarketName: "废钢铁",
              MacketTitle: "4月7日各地区废钢铁请报价",
              Date: "2018年4月7日"
            },
            {
              CategoryId: "3",
              MarketName: "废钢铁",
              MacketTitle: "4月6日各地区废钢铁请报价",
              Date: "2018年4月6日"
            },
            {
              CategoryId: "4",
              MarketName: "废纸",
              MacketTitle: "4月5日各地区废钢铁请报价",
              Date: "2018年4月5日"
            }
          ]
        }
      },
      {
        busines: {
          business_id: 2,
          business_name: "有色金属",
          List: [
            {
              CategoryId: "1",
              MarketName: "有色金属", //market 详情
              MacketTitle: "4月8日各地区有色金属请报价",
              Date: "2018年4月8日"
            },
            {
              CategoryId: "2",
              MarketName: "有色金属",
              MacketTitle: "4月7日各地区有色金属请报价",
              Date: "2018年4月7日"
            },
            {
              CategoryId: "3",
              MarketName: "废钢铁",
              MacketTitle: "4月6日各地区有色金属请报价",
              Date: "2018年4月6日"
            },
            {
              CategoryId: "4",
              MarketName: "废纸",
              MacketTitle: "4月5日各地区有色金属请报价",
              Date: "2018年4月5日"
            }
          ]
        }
      },
      {
        busines: {
          business_id: 2,
          business_name: "废钢铁",
          List: [
            {
              CategoryId: "1",
              MarketName: "废钢铁", //market 详情
              MacketTitle: "4月8日各地区废塑料请报价",
              Date: "2018年4月8日"
            },
            {
              CategoryId: "2",
              MarketName: "废钢铁",
              MacketTitle: "4月7日各地区废塑料请报价",
              Date: "2018年4月7日"
            },
            {
              CategoryId: "3",
              MarketName: "废钢铁",
              MacketTitle: "4月6日各地区废塑料请报价",
              Date: "2018年4月6日"
            },
            {
              CategoryId: "4",
              MarketName: "废纸",
              MacketTitle: "4月5日各地区废塑料请报价",
              Date: "2018年4月5日"
            }
          ]
        }
      }
    ]
  };
});
