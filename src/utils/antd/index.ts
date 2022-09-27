import { Button } from 'ant-design-vue'
import type { App } from 'vue'

const arr = [Button]

const createAntd = (app: App) => {
  return arr.forEach((item) => {
    app.use(item)
  })
}

export default createAntd
