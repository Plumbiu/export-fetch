# export-fech

将导出的 API 地址转换为真正的数据！

> ps: 一个小玩具而已

# Usage

## Installing

npm i export-fetch -D

## Config

```js
// rollup.config.js
import ef from 'export-fetch'

export default {
  plugins: [
    // ...
    ef()
  ]
}

```

## example

将请求地址写入 `ef[]` 的中括号里

```js
// demo.js
export const a = 'ef[你的请求地址]'
```

```js
// index.js
import { a } from './demo/js'
console.log(a)
```

运行 `rollup --config`，你会发现 a 已经被替换成了请求地址返回的数据！

# Todo

- [ ] 支持 `` 反引号动态引入数据
- [ ] 支持类似 mock 的模拟数据
