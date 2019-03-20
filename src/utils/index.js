
export default function (name) {
  return name
}

export function getQuerys (url) {
  const splitedUrl = (url || '').split('?')
  if (splitedUrl.length < 2) {
    return {}
  }
  let qs = splitedUrl[1]
  qs = qs.split('#')[0]
  if (qs.length === 0) {
    return {}
  }

  const paramPairs = qs.split('&')
  const params = {}
  paramPairs.forEach((e) => {
    if (!e || e.length === 0) {
      return
    }
    const pair = e.split('=')
    if (pair.length < 2) {
      return
    }
    const key = pair[0]
    const value = pair.slice(1, pair.length).join('=')
    if (value.length === 0) {
      return
    }
    params[decodeURIComponent(key)] = decodeURIComponent(value)
  })
  return params
}

export function getQuery (key, url) {
  const reg = new RegExp(`[?|&]${key}=([^&]+)`)
  const match = url.match(reg)
  return match && match[1]
}

export function createLink (page, params = {}) {
  const args = []
  Object.keys(params).forEach((key) => {
    args.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  })

  if (weex.config.bundleUrl) {
    const splitedUrl = (weex.config.bundleUrl).split('?')
    const hostUrl = splitedUrl[0]
    const wx_tpl = getQuery('_wx_tpl', weex.config.bundleUrl) // eslint-disable-line
    const tplPathList = (wx_tpl || hostUrl).split('/') // eslint-disable-line
    tplPathList[tplPathList.length - 2] = page

    if (wx_tpl) { // eslint-disable-line
      args.unshift(`_wx_tpl=${tplPathList.join('/')}`) // eslint-disable-line
      return `${hostUrl}?${args.join('&')}`
    } else {
      return `${tplPathList.join('/')}?${args.join('&')}`
    }
  }
}

// e.g. 图片文件名是 test.jpg, 转换得到的图片地址为
// - H5      : images/test.jpg        images和所在html路径同级
// - Android : local:///test          local代表项目各dpi目录,一般放在hdpi里一张即可
// - iOS     : local///test.jpg       local代表从项目中全局扫描 test.jpg可放至项目中任何目录
// 获取图片在三端上不同的路径
export function getImg (img_name) {
  let platform = weex.config.env.platform
  let img_path = ''
  if (platform == 'Web') {
      img_path = `src/images/${img_name}`
  } else if (platform == 'android') { //android 不需要后缀
      img_name = img_name.substr(0, img_name.lastIndexOf('.'));
      img_path = `local:///${img_name}`
  } else {
      img_path = `local:///${img_name}` // img_path = `../images/${img_name}`
  }
  return img_path
}