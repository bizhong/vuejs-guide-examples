// server.js
'use strict'

var fs = require('fs')
var path = require('path')

// 定义全局的 Vue 为了服务端的 app.js
global.Vue = require('vue')

// 获取 HTML 布局
var layout = fs.readFileSync('./index.html', 'utf8')

// 创建一个渲染器
var renderer = require('vue-server-renderer').createRenderer()

// 创建一个 Express 服务器
var express = require('express')
var server = express()

// 部署静态文件夹为“assets”文件夹
server.use('/assets', express.static(
  path.resolve(__dirname, 'assets')
))

// 拆分布局成两段 HTML
var layoutSections = layout.split('<div id="app"></div>')
var preAppHTML = layoutSections[0]
var postAppHTML = layoutSections[1]

// 处理所有的 Get 请求
server.get('*', function (request, response) {
  // 渲染我们的 Vue 实例作为流
  var stream = renderer.renderToStream(require('./assets/app')())
  // 将预先的 HTML 写入响应
  response.write(preAppHTML)
  // 每当新的块被渲染
  stream.on('data', function (chunk) {
    // 将块写入响应
    response.write(chunk)
  })
  // 当所有的块被渲染完成
  stream.on('end', function () {
    // 将 post-app HTML 写入响应
    response.end(postAppHTML)
  })
  // 当渲染时发生错误
  stream.on('error', function (error) {
    // 打印错误到控制台
    console.error(error)
    // 告诉客服端发生了错误
    return response
      .status(500)
      .send('Server Error')
  })
})

// 监听 5000 端口
server.listen(5000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:5000')
})