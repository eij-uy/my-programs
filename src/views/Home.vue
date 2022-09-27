<script setup lang="ts">
import {
  LikeOutlined,
  HeartOutlined,
  MessageOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons-vue'
import { reactive } from 'vue'
import { getColor } from '../utils/index'

interface classify {
  title: string
  color: string
}
interface program {
  id: number
  avatar?: string
  userName: string
  title: string
  content: string
  classifys: Array<classify>
  link?: string
  image?: string
  address?: string
  editFlg: boolean
}
// 大图片https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png
const programs: Array<program> = reactive([
  {
    id: 1,
    avatar: 'https://joeschmoe.io/api/v1/random',
    userName: 'yj',
    title: '全选和返回',
    content: '',
    classifys: [
      {
        title: 'vue2',
        color: getColor(),
      },
      {
        title: 'javascript',
        color: getColor(),
      },
    ],
    image: '',
    address: 'github',
    editFlg: false,
  },
  {
    id: 2,
    avatar: 'https://joeschmoe.io/api/v1/random',
    userName: 'yj',
    title: '数组的响应式',
    content:
      'ashjfdjkbndkjbksjldfbvasjhkdvbjkasbdvhjbjasnkljahsfkljsbdklfj baskjdbfjhkasdbfjkhasbdfgkjhasbdgjkgvhawdbkf',
    classifys: [
      {
        title: 'vue2',
        color: getColor(),
      },
    ],
    address: 'github',
    editFlg: false,
  },
])

function submit(): void {
  console.log(programs)
}
// console.log(programs)
</script>

<template>
  <div class="wrap">
    <div class="program_list">
      <div
        class="program_item"
        v-for="(item, index) in programs"
        :key="item.id"
      >
        <a-card hoverable :title="item.title">
          <a-card-meta :title="item.userName">
            <template #avatar>
              <a-avatar :src="item.avatar" />
            </template>
          </a-card-meta>
          <div class="container">
            <div class="container_item">
              <div class="container_item_label">描述:</div>
              <div class="container_item_value" style="color: #aeaeae">
                {{ item.content }}
              </div>
            </div>
            <div class="container_item">
              <div class="container_item_label">类型:</div>
              <div class="container_item_value">
                <a-tag
                  v-for="(classify, index) in item.classifys"
                  :key="classify"
                  :color="classify.color"
                  >{{ classify.title }}</a-tag
                >
              </div>
            </div>
            <div class="container_item">
              <div class="container_item_label">地址:</div>
              <div class="container_item_value">
                <a href="">{{ item.address }}</a>
              </div>
            </div>
          </div>
          <template #actions>
            <like-outlined />
            <heart-outlined />
            <message-outlined />
          </template>
          <template #extra>
            <close-circle-outlined class="close" />
          </template>
        </a-card>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f5f5f5;
  .program_list {
    width: 100%;
    margin-top: -20px;
    .program_item {
      width: 100%;
      margin-top: 20px;
      .container {
        &_item {
          margin: 10px 0;
          display: flex;
          &_value {
            padding-left: 10px;
          }
        }
      }
      .close {
        transition: color 0.5s;
      }
      .close:hover {
        color: rgb(24, 144, 255);
      }
    }
  }
}
</style>
