import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import createAntd from './utils/antd/index'
const app = createApp(App)

// 单独引入message 和 notification组件的样式 unplugin-vue-components/resolves有bug
import 'ant-design-vue/lib/message/style/index.less'
import 'ant-design-vue/lib/notification/style/index.less'

app.use(router)

createAntd(app)

app.mount('#app')
