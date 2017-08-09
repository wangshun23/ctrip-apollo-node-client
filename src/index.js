import  { EventEmitter } from 'events'
import axios from 'axios'
import only from 'only'
const CONFIG_METOD = 'configs'
const CONFIG_CATCH_METOD = 'configfiles/json'
class Apollo extends EventEmitter{
  constructor ({
    server,
    appId,
    namespace = 'application',
    cluster = 'default',
    ip
  }) {
    super()
    this._server = server
    this._appId = appId
    this._namespace = namespace
    this._cluster = cluster
    this._ip = ip
    this._config = null
    this._ready = false
    this.init()
  }

  init () {
    this._getConfig()
    .then(({ data }) => {
      this._config = data.configurations
      this._ready = true
      this.emit('ready')
    })
    .catch(e => {
      this._ready = true
      this.emit('ready', e)
    })
  }

  ready () {
    if(this._ready){
      return Promise.resolve()
    }else{
      return new Promise((resolve, reject) => {
        this.once('ready', (e) => {
          if(e){
            reject(e)
          }else{
            resolve()
          }
        })
      })
    }
  }

  _getConfig () {
    return this._send(this._url(CONFIG_METOD))
  }

  _send (url) {
    return axios.get(url)
  }

  get (...keys) {
    return this._get(keys)
  }

  _get (keys) {
    return keys.length === 1
      ? this._config[keys[0]]
      : only(this._config, keys)
  }

  _url (metod) {
    let _url = `${this._server}/${metod}/${this._appId}/${this._cluster}/${this._namespace}`
    if(this._ip){
      _url+= `?ip=${this._ip}`
    }
    return _url
  }
}


export default  function (option) {
  const _apollo = new Apollo(option)
  return new Promise((resolve, reject) => {
    _apollo.ready()
    .then(() => {
      resolve(_apollo)
    })
    .catch((e) => {
      reject(e)
    })
  })
}

