/* 包含N个操作数据库集合数据的Model模块 */


/* 1、链接数据库 */
// 1.1 引入mongoose
const mongoose = require('mongoose')

// 1.2 链接制定数据库
mongoose.connect('mongodb://localhost:27017/loveSchool')

// 1.3 获取链接对象
const conn = mongoose.connection

// 1.4 绑定链接完成的监听
conn.on('connected', () => {
    console.log('链接数据库成功咯！')
})

/* 定义出对应集合的Model并向外暴露 */
// 2.1 字义Schema
const userSchema = mongoose.Schema({
    username: { type: String, require: true }, // 用户名
    password: { type: String, require: true }, // 密码
    type: { type: String, require: true }, // 用户类型： 男/女
    school: { type: String, require: true }, // 职位
    grade: { type: String, require: true}, // 年级
    year: { type: String, require: true }, // 公司名称
    header: { type: String }, // 头像名称
    info: { type: String } // 个人信息
})

// 2.2 定义Model
const UserModel = mongoose.model('user', userSchema)

// 2.3 向外暴露一个Model
exports.UserModel = UserModel // 用户信息Model


// 定义聊天的Model
const chatSchema = mongoose.Schema({
    from: { type: String, require: true }, // 发送用户ID
    to: { type: String, require: true }, // 接收用户ID
    chat_id: { type: String, require: true }, // from和to组成的字符串
    content: { type: String, require: true }, // 发送内容
    read: { type: Boolean, default: false }, // 是否阅读
    create_time: { type: Number }, // 聊天创建时间
})

// 定义Model
const ChatModel = mongoose.model('chat', chatSchema)

// 向外暴露Model
exports.ChatModel = ChatModel
