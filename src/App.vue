<template>
  <div id="app">
    <header class="main-header" :class="{'main-header-fixed':headerFixed}">
      <el-row>
        <el-col :span="4" :offset="3">
          <router-link :to="{path:'/'}" tag="h1" style="font-size: 2rem; padding-top: 0.5rem;color: white;">乐寻游</router-link>
        </el-col>
        <el-col :span=10 :offset="3">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#C3EAFA"
            background-color="#6AB6EF"
            active-text-color="#fff"
            :router="useRouter"
            style="border-bottom:0">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/scenery">热门景点</el-menu-item>
            <el-menu-item index="1">风土人情</el-menu-item>
            <el-menu-item index="/banana">私人订制</el-menu-item>
            <el-menu-item index="2">预约司机</el-menu-item>
            <el-menu-item index="/aboutus" @click="activeIndex='/aboutus'">关于</el-menu-item>
            <el-menu-item index="" v-if="isLogin" @dblclick="isLogin = !isLogin"><span @click="openDialog('login')">登录</span>/<span @click="openDialog('register')">注册</span></el-menu-item>
            <el-menu-item index="" v-else @click="isLogin = !isLogin">个人信息</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <router-view class="main-content"></router-view>
    <el-dialog :title="form.title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model.number="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <footer class="main-footer">
      <p>联系我们</p>
      <p>1833-6326-527,318-368-246</p>
      <p>An Odd Choice</p>
      <p>Copyright ©2017  乐寻游娱乐股份有限公司.  All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      headerFixed: false,
      activeIndex: '/',
      useRouter: true,
      isLogin: false,
      dialogFormVisible: false,
      form: {
        title: '',
        phone: '',
        password: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.activeIndex = window.localStorage.getItem('index') || '/'
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('.main-header').offsetTop
      if (scrollTop > offsetTop) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    },
    handleSelect (key, keyPath) {
      window.localStorage.setItem('index', keyPath)
      console.log(key, keyPath)
    },
    openDialog (title) {
      this.form.title = title
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #6AB6EF;
  box-shadow: 0 0 5px 5px #6ab6ef;
}
.main-header-fixed {
  z-index: 5;
  opacity: 0.6;
}
.main-content{
  margin-top: 4.1rem;
  min-height: 35rem;
}
.main-footer{
  background-color: #6ab6ef;
  height: 10rem;
  padding: 5rem 0;
  font-size: 1.3rem;
  text-align: center;
  margin-top: 0.3rem;
}
.main-footer > p:nth-child(2){
  margin-bottom: 1rem;
}
.clear:after{
  display: table;
  content: "";
  clear: both;
}
</style>
