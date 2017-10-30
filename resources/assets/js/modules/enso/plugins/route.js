import store from '../../../store'

let Router = (name, params, absolute) => {
  this.name = name
  this.urlParams = this.normalizeParams(params)
  this.queryParams = this.normalizeParams(params)
  this.absolute = absolute === undefined ? true : absolute
  this.domain = this.constructDomain()
  this.url = store.state.routes[this.name].uri.replace(/^\//, '')

  String.call(this)
}

Router.prototype = Object.create(String.prototype)
Router.prototype.constructor = Router

Router.prototype = {
  normalizeParams: params => {
    if (params === undefined) return {}

    params = typeof params !== 'object' ? [params] : params
    this.numericParamIndices = Array.isArray(params)

    return Object.assign({}, params)
  },
  constructDomain: () => {
    if (this.name === undefined) {
      throw Error('Ziggy Error: You must provide a route name')
    } else if (store.state.routes[this.name] === undefined) {
      throw Error(`Ziggy Error: route ${this.name} is not found in the route list`)
    } else if (!this.absolute) {
      return '/'
    }

    return (store.state.routes[this.name].domain || store.state.meta).replace(/\/+$/, '') + '/'
  },
  with: params => {
    this.urlParams = this.normalizeParams(params)

    return this
  },
  withQuery: params => {
    Object.assign(this.queryParams, params)

    return this
  },
  constructUrl: () => {
    let url, tags, paramsArrayKey

    url = this.domain + this.url
    tags = this.urlParams
    paramsArrayKey = 0

    const _ = tag => {
      let keyName, key

      keyName = tag.replace(/\{|\}/gi, '').replace(/\?$/, '')
      key = this.numericParamIndices ? paramsArrayKey : keyName
      paramsArrayKey++

      if (typeof tags[key] !== 'undefined') {
        delete this.queryParams[key]

        return tags[key].id || tags[key]
      }

      if (tag.indexOf('?') === -1) {
        throw Error(`Ziggy Error: ${keyName} key is required for route ${this.name}`)
      } else {
        return ''
      }
    }

    return url.replace(/{([^}]+)}/gi, _)
  },
  constructQuery: () => {
    let queryString

    queryString = ''

    if (Object.keys(this.queryParams).length === 0) return queryString

    queryString = '?'

    Object.keys(this.queryParams).forEach((key, i) => {
      queryString = (i === 0)
        ? queryString
        : queryString + '&' + key + '=' + this.queryParams[key]
    })
    // .bind(this)) uses fat arrow

    return queryString
  },
  toString: () => {
    this.parse()

    return this.return
  },
  valueOf: () => {
    this.parse()

    return this.return
  },
  parse: () => {
    this.return = this.constructUrl() + this.constructQuery()
  }
}

window.route = (name, params, absolute) => new Router(name, params, absolute)
