/**
 * Created by jiachenpan on 16/11/18.
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分';
  }
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).Format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).Format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */

export function Format(fmt, time) {
  time = new Date(time);
  var o = {
    'M+': time.getMonth() + 1, //月份
    'd+': time.getDate(), //日
    'h+': time.getHours() % 12 == 0 ? 12 : time.getHours() % 12, //小时
    'H+': time.getHours(), //小时
    'm+': time.getMinutes(), //分
    's+': time.getSeconds(), //秒
    'q+': Math.floor((time.getMonth() + 3) / 3), //季度
    S: time.getMilliseconds() //毫秒
  };
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[time.getDay() + '']);
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}
function parse(val) {
  return typeof val == 'string' ? JSON.parse(val) : val;
}
function stringify(val) {
  return typeof val == 'string' ? JSON.stringify(val) : val;
}
//将度转换成为度分秒
export function formatDegree(value) {
  value = Math.abs(value);
  var v1 = Math.floor(value); //度
  var v2 = Math.floor((value - v1) * 60); //分
  var v3 = Math.round(((value - v1) * 3600) % 60); //秒
  return v1 + '°' + v2 + '′' + v3 + '″';
}
//度分秒转换成为度
export function DegreeConvertBack(value) {
  var du = value.split('°')[0];
  var fen = value.split('°')[1].split('′')[0];
  var miao = value
    .split('°')[1]
    .split('′')[1]
    .split('″')[0];
  var f = parseFloat(fen) + parseFloat(fen / 60);
  du = parseFloat(f / 60) + parseFloat(du);
  return du;
}
/*
 * 深度合并对象
 */
function deepAssign(FirstOBJ, SecondOBJ) {
  if (!typeof FirstOBJ == 'object' && typeof SecondOBJ == 'object') return;
  for (var key in SecondOBJ) {
    FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]' ? deepAssign(FirstOBJ[key], SecondOBJ[key]) : (FirstOBJ[key] = SecondOBJ[key]);
  }
  return FirstOBJ;
}
/*
 * @desc 切割数组,如果一个数组比较大,切割成几个小段进行操作
 * @param {Array} array 需要进行切割的数组
 * @param {Number} size 切割成多少段
 * @param {Number} time 每次切割间隔多久
 * @param {Function} callback 每次切割成功后的回调
 */
function chunk(array, size, time, callback) {
  //size ? size : size = Math.floor(array.length / 1000);
  let length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0,
    resIndex = 0,
    result = Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  result.forEach(element => {
    element.forEach(ele => {
      setTimeout(() => {
        callback(ele);
      }, time);
    });
  });
}
//数组去重
function unique(arr) {
  arr = arr || [];
  var a = {};
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    var v = arr[i];
    if (typeof a[v] == 'undefined') {
      a[v] = 1;
    }
  }
  arr.length = 0;
  for (var i in a) {
    arr[arr.length] = i;
  }
  return arr;
}
// 数组中所有元素的和
function arrSum(array) {
  var sum = array.reduce(function(prev, next, index, array) {
    return prev + next;
  });
  return sum;
}
// 去重2
const deduplication = arr => [...new Set(arr)];

// 保留非重复数据
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// 数组保留重复数据
const saveUnique = arr => arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i));

// 查找数组中相等的项
function findEqual(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele[key] == val) {
      return ele;
    }
  }
}
// 根据val查找数组对象中相同val的项,返回Object,根据id查找tree数据中相等数据label
function findKeyValue(arr, val) {
  let obj;
  function test(arr) {
    arr.forEach(ele => (ele.id == val ? (obj = ele) : ele.children ? test(ele.children) : ''));
  }
  test(arr);
  return obj;
}
//数组去重并合并
function arrEqualConcat(a, b) {
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (a[j].id == b[i].id) {
        a.splice(j, 1);
        j = j - 1;
      }
    }
  }
  return a;
}
// 函数节流
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
  if (type === 1) {
    var previous = 0;
  } else if (type === 2) {
    var timeout;
  }
  return function() {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
}
// 添加操作
function addHandle(methods, context) {
  let _this = context;
  return new Promise(function(resove, reject) {
    return methods.then(res => {
      resove(res);
      if (res.Code === 'success' && res.Result) {
        _this.$message.success('添加成功');
      } else {
        _this.$message.error('添加失败');
      }
    });
  });
}
// 删除操作
function delHandle(methods, context) {
  let _this = context;
  return new Promise(function(resove, reject) {
    _this
      .$confirm('确认删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        return methods.then(res => {
          resove(res);
          if (res.Code === 'success' && res.Result) {
            _this.$message.success('删除成功');
          } else {
            _this.$message.error('删除失败');
          }
        });
      });
  });
}

// 编辑操作
function editHandle(methods, context) {
  let _this = context;
  return new Promise(function(resove, reject) {
    return methods.then(res => {
      resove(res);
      if (res.Code === 'success' && res.Result) {
        _this.$message.success('修改成功');
      } else {
        _this.$message.error('修改失败');
      }
    });
  });
}
/* ajax轮询封装 */
function turnQuery(methods) {
  var startTime = new Date().getTime(); //现在的时间
  var interval = setInterval(() => {
    if (new Date().getTime() - startTime > 5 * 60 * 60 * 1000) {
      //现在的时间减去刷新开始的时间大于 5小时
      // clearInterval(interval); //就删除这个 setInterval 轮询
      location.reload(true); //就刷新这个页面
      return;
    }
    methods();
    console.log('轮询');
  }, 5 * 60 * 1000);
}

/* 根据子id查找父id */
var test = {
  nodeId: '19A5B',
  dataCnt: 13138494,
  children: [
    {
      nodeId: '19A5B_19A5C',
      nodeName: '客户状态',
      nodeType: 'tag',
      children: [
        {
          nodeId: '19A5B_19A5C_19A5E',
          nodeName: '包含(实名制停机,IPBUS帐户封锁停机)',
          dataCnt: '0人',
          nodeType: 'domain',
          counted: 2,
          children: [
            {
              nodeId: '19A5B_19A5C_19A5E_19A67',
              nodeName: '积分',
              nodeType: 'tag',
              children: [],
              expand: true,
              counted: 0,
              condType: '1',
              dataType: 1,
              propType: '1',
              propSql: '',
              labelId: 'BLD00013',
              linked: false,
              linkedId: ''
            },
            {
              nodeId: '19A5B_19A5C_19A5E_19A68',
              nodeName: '是否通信客户',
              nodeType: 'tag',
              children: [],
              expand: true,
              counted: 0,
              condType: '3',
              dataType: 1,
              propType: '4',
              propSql: '',
              labelId: 'BLD00010',
              linked: false,
              linkedId: ''
            }
          ]
        }
      ],
      expand: true
    }
  ]
};

//传入参数：需要遍历的json，需要匹配的id
function findParentId(data, nodeId) {
  //设置结果
  let result;
  if (!data) {
    return; //如果data传空，直接返回
  }
  for (var i = 0; i < data.children.length; i++) {
    let item = data.children[i];
    if (item.nodeId == nodeId) {
      result = data.nodeId;
      //找到id相等的则返回父id
      return result;
    } else if (item.children && item.children.length > 0) {
      //如果有子集，则把子集作为参数重新执行本方法
      result = findParentId(item, nodeId);
      //关键，千万不要直接return本方法，不然即使没有返回值也会将返回return，导致最外层循环中断，直接返回undefined,要有返回值才return才对
      if (result) {
        return result;
      }
    }
  }
  //如果执行循环中都没有return，则在此return
  return result;
}
/**
 *  @description: 对象转 url
 *  @param {Object} obj 对象形式
 *  @return {String} 字符串 类似 news_id=144&scorce=seo
 *  @author: wangchaoxu
 *  @remark 有bug,参数有时间的话,会被格式化
 *
 */
function jsonToUrl(obj) {
  obj = JSON.stringify(obj);
  return obj
    .replace(/:/g, '=')
    .replace(/"/g, '')
    .replace(/,/g, '&')
    .match(/\{([^)]*)\}/)[1];
}

/**
 * 去除对象中所有符合条件的对象
 * @param {Object} obj 来源对象
 * @param {Function} fn 函数验证每个字段
 */
function compactObj(obj, fn) {
  for (var i in obj) {
    if (typeof obj[i] === 'object') {
      compactObj(obj[i], fn);
    }
    if (fn(obj[i])) {
      delete obj[i];
    }
  }
}
// 删除空对象 删除'', null, undefined
function isEmpty(foo) {
  if (typeof foo === 'object') {
    for (var i in foo) {
      return false;
    }
    return true;
  } else {
    return foo === '' || foo === null || foo === undefined;
  }
}
// 获取tree数据中所有为真的数据
function treeDataFilter(data) {
  return data.map(item => {
    compactObj(item, isEmpty);
    return item;
  });
}
/*
    数组对象求和
*/
function obj_sum(arr, ...param) {
  var temp = {};
  arr.forEach(function(item, index) {
    for (var k in item) {
      if (param.indexOf(k) >= 0) {
        if (typeof item[k] == 'string') {
          item[k] = item[k] * 1;
        }
        if (temp[k]) {
          temp[k] += item[k];
        } else {
          temp[k] = item[k];
        }
      }
    }
  });
  return temp;
}
function getfengxiang(fx1) {
  var fx3 = '';
  if (fx1 > 0 && fx1 < 11.25) {
    fx3 = '北风';
  } else if (fx1 > 11.26 && fx1 < 33.75) {
    fx3 = '东北风';
  } else if (fx1 > 33.76 && fx1 < 56.25) {
    fx3 = '东北风';
  } else if (fx1 > 56.26 && fx1 < 78.75) {
    fx3 = '东北风';
  } else if (fx1 > 78.76 && fx1 < 101.25) {
    fx3 = '东风';
  } else if (fx1 > 101.25 && fx1 < 123.75) {
    fx3 = '东南风';
  } else if (fx1 > 123.76 && fx1 < 146.25) {
    fx3 = '东南风';
  } else if (fx1 > 146.26 && fx1 < 168.75) {
    fx3 = '东南风';
  } else if (fx1 > 168.76 && fx1 < 191.25) {
    fx3 = '南风';
  } else if (fx1 > 191.26 && fx1 < 213.75) {
    fx3 = '西南风';
  } else if (fx1 > 213.76 && fx1 < 236.25) {
    fx3 = '西南风';
  } else if (fx1 > 236.26 && fx1 < 258.75) {
    fx3 = '西南风';
  } else if (fx1 > 258.76 && fx1 < 281.25) {
    fx3 = '西风';
  } else if (fx1 > 281.76 && fx1 < 303.75) {
    fx3 = '西北风';
  } else if (fx1 > 303.76 && fx1 < 326.25) {
    fx3 = '西北风';
  } else if (fx1 > 326.26 && fx1 < 348.75) {
    fx3 = '西北风';
  } else {
    fx3 = '北风';
  }

  return fx3;
}

export {
  parse,
  stringify,
  deepAssign,
  chunk,
  unique,
  findKeyValue,
  addHandle,
  delHandle,
  editHandle,
  arrEqualConcat,
  turnQuery,
  saveUnique,
  arrSum,
  jsonToUrl,
  treeDataFilter,
  obj_sum,
  getfengxiang,
  throttle,
  debounce
};
