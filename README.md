[![Build Status](https://travis-ci.org/colin.wang/ctrip-apollo-node-client.svg?branch=master)](https://travis-ci.org/colin.wang/ctrip-apollo-node-client)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/colin.wang/ctrip-apollo-node-client?branch=master&svg=true)](https://ci.appveyor.com/project/colin.wang/ctrip-apollo-node-client)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/ctrip-apollo-node-client.svg)](http://badge.fury.io/js/ctrip-apollo-node-client)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/ctrip-apollo-node-client.svg)](https://www.npmjs.org/package/ctrip-apollo-node-client)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/colin.wang/ctrip-apollo-node-client.svg)](https://david-dm.org/colin.wang/ctrip-apollo-node-client)
-->

# ctrip-apollo-node-client

ctripcorp apollo node client

Apollo[Apollo（配置中心）](https://github.com/ctripcorp/apollo)

Apollo客户端开发文档[Apollo其它语言客户端接入指南](https://github.com/ctripcorp/apollo/wiki/%E5%85%B6%E5%AE%83%E8%AF%AD%E8%A8%80%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97)

<!-- description -->
## Install

```sh
$ npm install ctrip-apollo --save
```

## Usage

```js
import ap from 'ctrip-apollo'
const option = {
  server,   //http://${ip}:${port}
  appId,
  namespace = 'application',
  cluster = 'default',
  ip
}

ap(option)
.then((apollo) => {
  const a = apollo.get('a')
  const {c, d} = apollo.get('c', 'd')
})
```

## License

MIT
