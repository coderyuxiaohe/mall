import { request } from './request'

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page){
  // return request({
  //   url: '/home/data',
  //   params: {
  //     type,
  //     page
  //   }
  // })

  return new Promise(resolve => {
    const data1 = {
      'list': [
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/240923_227efi58a51011d8199g0i1ck5677_640x962.png',
          title: '爆款多巴胺熊猫小白鞋女秋冬新款面包鞋系带休闲板鞋',
          price: 49.9,
          cfav: 12
        },
      ]
    }
    const data2 = {
      'list': [
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/240922_75e0jeb2j2hi3582bdj3cj251f5hh_750x1000.jpg',
          title: '小白鞋女厚底德训鞋2024年春秋新款百搭鞋系带松糕鞋休闲板鞋',
          price: 55.9,
          cfav: 1
        },
      ]
    }
    const data3 = {
      'list': [
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/55cf19/220329_01le063fi2k7f3h5h8d5kig8770fc_720x800.jpg',
          title: '厚底内增高小白鞋女2022年新款夏季透气网面百搭运动休闲板鞋鞋',
          price: 59.9,
          cfav: 5
        },
      ]
    }
    switch(type){
      case 'pop':
        resolve(data1);
        break;
      case 'new':
        resolve(data2);
        break;
      case 'sell':
        resolve(data3);
        break;
    }
    
  })
}