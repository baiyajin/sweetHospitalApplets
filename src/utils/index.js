'use strict'

function openToast (text, titel) {
  var self = this
  self.toast.titel = titel
  self.toast.text = text
  self.toast.flag = true
  setTimeout(function () {
    self.toast.flag = false
  }, 3000)
}

// 知道json字段名读取json内容 self[''+FieldName+''] = data.data.sqlIn
function clearConten (fild) {
  this['' + fild + ''] = ''
}

function generateUUID () {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line one-var
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

function getIdCardInfo (UUserCard, num) {
  // 获取出生日期
  if (num === 1) {
    return UUserCard.substring(6, 10) + '-' + UUserCard.substring(10, 12) + '-' + UUserCard.substring(12, 14)
  }
  // 获取性别
  if (num === 2) {
    if (parseInt(UUserCard.substr(16, 1)) % 2 === 1) {
      // 男
      return '男'
    } else {
      // 女
      return '女'
    }
  }
  // 获取年龄
  if (num === 3) {
    var myDate = new Date()
    var month = myDate.getMonth() + 1
    var day = myDate.getDate()
    var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1
    // eslint-disable-next-line no-mixed-operators
    if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) === month && UUserCard.substring(12, 14) <= day) {
      age++
    }
    if (age <= 0) {
      age = 1
    }
    return age
  }
}

// 对字符串进行加密
function compileStr (code) {
  var c = String.fromCharCode(code.charCodeAt(0) + code.length)
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
  }
  return escape(c)
}

// 字符串进行解密
function uncompileStr (code) {
  code = unescape(code)
  var c = String.fromCharCode(code.charCodeAt(0) - code.length)
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1))
  }
  return c
}

function insertAfter (newElement, targetElement) { // newElement是要追加的元素 targetElement 是指定元素的位置
  var parent = targetElement.parentNode // 找到指定元素的父节点
  if (parent.lastChild === targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
    parent.appendChild(newElement, targetElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
// 插入元素到指定元素内
function insertElementInner (newElement, targetElement) {
  targetElement.appendChild(newElement, targetElement)
}

// 获取一组已经提前定义好的随机颜色
function returnColor () {
  // 获取0-1之间的随机数
  var colors = [
    '#32ccbc', '#F067B4', '#58CFFB',
    '#F761A1', '#43CBFF', '#5EFCE8',
    '#E96D71', '#F6CEEC', '#52E5E7',
    '#f5aef8', '#ff00008c', '#0eb843', '#00E4FF',
    '#ff008b', '#FFA8A8', '#F6CEEC',
    '#0396FF', '#52E5E7', '#ff008b91',
    '#43CBFF', '#52E5E7', '#00c0a7', '#5EFCE8'
  ]
  // 随机
  return colors[Math.floor(Math.random() * colors.length)]
}

function getCurrentTime (all) {
  const dd = new Date()
  let mm = dd.getMonth() + 1
  if (mm < 10) {
    mm = '0' + mm
  }
  let d = dd.getDate()
  if (d < 10) {
    d = '0' + d
  }
  if (all === 'all') {
    let h = dd.getHours()
    if (h < 10) {
      h = '0' + h
    }
    let s = dd.getSeconds()
    if (s < 10) {
      s = '0' + s
    }
    let m = dd.getMinutes()
    if (m < 10) {
      m = '0' + m
    }
    return dd.getFullYear() + '-' + mm + '-' + d + ' ' + h + ':' + m + ':' + s
  } else {
    return dd.getFullYear() + '-' + mm + '-' + d
  }
}

// 验证身份证位数,15位和18位身份证
function verifyLength (code) {
  var length = code.length
  if (length === 15 || length === 18) {
    return true
  } else {
    resultObj.data = '错误：输入的身份证号不是15位和18位的'
    return false
  }
}

// 验证身份除了最后位其他的是否包含字母
function containsAllNumber (code) {
  var str = ''
  if (code.length === 15) {
    str = code.substring(0, 15)
  } else if (code.length === 18) {
    str = code.substring(0, 17)
  }
  var ch = str.split('')
  for (var i = 0; i < ch.length; i++) {
    if (!(Number(ch[i]) >= 0 && Number(ch[i]) <= 9)) {
      resultObj.data = '错误：输入的身份证号第' + (i + 1) + '位包含字母'
      return false
    }
  }
  return true
}

// 15位转18位身份证
function uptoeighteen (fifteencardid) {
  var eightcardid = fifteencardid.substring(0, 6)
  eightcardid = eightcardid + '19'
  eightcardid = eightcardid + fifteencardid.substring(6, 15)
  eightcardid = eightcardid + getVerify(eightcardid)
  return eightcardid
}

// 获得校验位
function getVerify (eightcardid) {
  var remaining = 0

  if (eightcardid.length === 18) {
    eightcardid = eightcardid.substring(0, 17)
  }
  if (eightcardid.length === 17) {
    var sum = 0
    for (let i = 0; i < 17; i++) {
      var k = eightcardid.substring(i, i + 1)
      ai[i] = Number(k)
    }
    for (let i = 0; i < 17; i++) {
      sum = sum + wi[i] * ai[i]
    }
    remaining = sum % 11
  }
  return remaining === 2 ? 'X' : vi[remaining] + ''
}

// 判断地区码
function verifyAreaCode (code) {
  var areaCode = code.substring(0, 2)
  if (areaCodeMap.indexOf(areaCode) !== -1) {
    return true
  } else {
    resultObj.data = '错误：输入的身份证号的地区码(1-2位)[' + areaCode + ']不符合中国行政区划分代码规定(GB/T2260-1999)'
    return false
  }
}

// 判断月份和日期
function verifyBirthdayCode (code) {
  // 验证月份
  var month = code.substring(10, 12)
  var isEighteenCode = (code.length === 18)
  if (!dateMap.hasOwnProperty(month)) {
    resultObj.data = '错误：输入的身份证号' + (isEighteenCode ? '(11-12位)' : '(9-10位)') + '不存在[' + month + ']月份,不符合要求(GB/T7408)'
    return false
  }
  // 验证日期
  var dayCode = Number(code.substring(12, 14))
  var day = dateMap['' + month + '']
  var yearCode = Number(code.substring(6, 10))

  // 非2月的情况
  if (day != null) {
    if (dayCode > day || dayCode < 1) {
      resultObj.data = '错误：输入的身份证号' + (isEighteenCode ? '(13-14位)' : '(11-13位)') + '[' + dayCode + ']号不符合小月1-30天大月1-31天的规定(GB/T7408)'
      return false
    }
    // eslint-disable-next-line brace-style
  }
  // 2月的情况
  else {
    // 闰月的情况
    if ((yearCode % 4 === 0 && yearCode % 100 !== 0) || (yearCode % 400 === 0)) {
      if (dayCode > 29 || dayCode < 1) {
        resultObj.data = '错误：输入的身份证号' + (isEighteenCode ? '(13-14位)' : '(11-13位)') + '[' + dayCode + ']号在' + yearCode + '闰年的情况下未符合1-29号的规定(GB/T7408)'
        return false
      }
      // eslint-disable-next-line brace-style
    }
    // 非闰月的情况
    else {
      if (dayCode > 28 || dayCode < 1) {
        resultObj.data = '错误：输入的身份证号' + (isEighteenCode ? '(13-14位)' : '(11-13位)') + '[' + dayCode + ']号在' + yearCode + '平年的情况下未符合1-28号的规定(GB/T7408)'
        return false
      }
    }
  }
  return true
}

// 验证18位校验码,校验码采用ISO 7064：1983，MOD 11-2 校验码系统
function verifyMOD (code) {
  var verify = code.substring(17, 18)
  if ('x'.indexOf(verify) !== -1) {
    code = code.replace('x', 'X')
    verify = 'X'
  }
  var verifyIndex = getVerify(code)
  if (verify.indexOf(verifyIndex) !== -1) {
    return true
  }
  resultObj.data = '错误：输入的身份证号最末尾的数字验证码错误'
  return false
}

var dateMap = {
  '01': 31,
  '02': null,
  '03': 31,
  '04': 30,
  '05': 31,
  '06': 30,
  '07': 31,
  '08': 31,
  '09': 30,
  '10': 31,
  '11': 30,
  '12': 31
}
var areaCodeMap = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82', '91']
var wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
var vi = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
var ai = new Array(18)
var resultObj = {code: false, data: ''}

// 验证身份证
function verifyIdCards (idcard) {
  resultObj = {code: false, data: ''}
  // 验证身份证位数,15位和18位身份证
  if (!verifyLength(idcard)) {
    return resultObj
  }
  // 验证身份除了最后位其他的是否包含字母
  if (!containsAllNumber(idcard)) {
    return resultObj
  }
  // 如果是15位的就转成18位的身份证
  var eifhteencard = ''
  if (idcard.length === 15) {
    eifhteencard = uptoeighteen(idcard)
  } else {
    eifhteencard = idcard
  }
  // 验证身份证的地区码
  if (!verifyAreaCode(eifhteencard)) {
    return resultObj
  }
  // 判断月份和日期
  if (!verifyBirthdayCode(eifhteencard)) {
    return resultObj
  }
  // 验证18位校验码,校验码采用ISO 7064：1983，MOD 11-2 校验码系统
  if (!verifyMOD(eifhteencard)) {
    return resultObj
  }
  resultObj.code = true
  resultObj.data = ''
  return resultObj
}

// 验证ip
function isValidIP (ip) {
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip)
}

module.exports = {
  returnColor,
  compileStr,
  uncompileStr,
  generateUUID,
  clearConten,
  getCurrentTime,
  getIdCardInfo,
  verifyIdCards,
  insertAfter,
  insertElementInner,
  isValidIP,
  openToast
}
