<template>
  <div class="index">
    <el-carousel height="35rem">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img :src="item.url" style="width:100%;height:100%;">
      </el-carousel-item>
    </el-carousel>
    <!-- 旅途 -->
    <div class="nav-content">
      <el-row>
        <el-col :span="10" :offset="7">
          <p class="nav-title">择 · 一次前所未有的旅途</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="(item,key) in journey" :key="item.id" :offset="key == 0 ? 3:0">
            <img :src="item.url">
        </el-col>
      </el-row>
    </div>
    <!-- 民族 -->
    <div class="nav-content bg-content">
      <el-row>
        <el-col :span="10" :offset="7">
          <p class="nav-title">忆 · 渐渐消失的民俗</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9" :offset="3" style="padding:0 10px;">
          <img src="../assets/custom.jpg">
        </el-col>
        <el-col :span="9" style="padding:0 10px;">
          <section class="custom-section">
            迄今为止已经有57个民族逐渐消失，
            是否还记得自己民族那些令人感叹的风俗，
            不一样的文化，形象的文字，动听的民乐，
            好吃的美食……我们抢在时间的前面，
            把正在消失的民族故事记录下来，
            把少数民族文化故事讲给更多人听。
          </section>
          <router-link :to="{path:'/nation'}" style="float:right;margin-right:5rem;">
            <el-button type="primary" plain>更多...</el-button>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <!-- 美景 -->
    <div class="nav-content">
      <el-row>
        <el-col :span="10" :offset="7">
          <p class="nav-title">游 · 触动你心灵的美景</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="(item,key) in scenerys" :key="item.id" :offset="key == 0 ? 3:0" style="padding:0 30px;">
          <show-card :info="item" :isScore="isScore"></show-card>
        </el-col>
      </el-row>
    </div>
    <!-- 导游 -->
    <div class="nav-content bg-content">
      <el-row>
        <el-col :span="10" :offset="7">
          <p class="nav-title">览 · 深藏当地的奇闻录</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="(item,key) in scenerys" :key="item.id" :offset="key == 0 ? 3:0" style="padding:0 30px;">
          <show-card :info="item" :isScore="!isScore"></show-card>
        </el-col>
      </el-row>
    </div>
    <!-- 评论 -->
    <div class="nav-content" style="height:31rem;">
      <el-row>
        <el-col :span="10" :offset="7">
          <p class="nav-title">递 · 给我们最真实的建议</p>
        </el-col>
      </el-row>
      <el-row style="overflow:hidden;height:20rem;" >
        <el-col :span="9" v-for="(item,key) in comment" :key="item.id" :offset="(key+1)%2*3" class="rolling">
          <show-card-horizontal :info="item"></show-card-horizontal>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ShowCard from '../components/showCard'
import ShowCardHorizontal from '../components/showCardHorizontal'
export default {
  components: {
    ShowCard,
    ShowCardHorizontal
  },
  data () {
    return {
      isScore: true,
      banners: [
        {
          id: 1,
          url: 'http://oyd1cktti.bkt.clouddn.com/9.jpg'
        },
        {
          id: 2,
          url: 'http://oyd1cktti.bkt.clouddn.com/7.jpg'
        },
        {
          id: 3,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg'
        },
        {
          id: 4,
          url: 'http://oyd1cktti.bkt.clouddn.com/5.jpg'
        }
      ],
      journey: [
        {
          id: 1,
          url: require('../assets/about1.png')
        },
        {
          id: 2,
          url: require('../assets/about2.png')
        },
        {
          id: 3,
          url: require('../assets/about3.png')
        }
      ],
      scenerys: [
        {
          id: 1,
          name: '五台山',
          grade: 4.9,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          hotNumber: 3240,
          intro: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 2,
          name: '花果山',
          grade: 4.2,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          hotNumber: 2230,
          intro: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 3,
          name: '少林寺',
          grade: 4.8,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          hotNumber: 3580,
          intro: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        }
      ],
      comment: [
        {
          id: 1,
          name: '张小姐',
          grade: 4.9,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 2,
          name: '李小姐',
          grade: 4.2,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 3,
          name: '隔壁老王',
          grade: 4.8,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 4,
          name: '对面小赵',
          grade: 4.9,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 5,
          name: '老张',
          grade: 4.2,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 6,
          name: '驴友',
          grade: 4.8,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试五台山风景秀丽特别好看字数再长一点，等下做个测试五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 7,
          name: '张小姐',
          grade: 4.9,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 8,
          name: '李小姐',
          grade: 4.2,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 9,
          name: '隔壁老王',
          grade: 4.8,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        },
        {
          id: 10,
          name: '对面小赵',
          grade: 4.9,
          url: 'http://oyd1cktti.bkt.clouddn.com/8.jpg',
          content: '五台山风景秀丽特别好看字数再长一点，等下做个测试',
          createTime: '2017-05-23'
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.bg-content {
  background-color: #BBD6EA;
}
.nav-content {
  padding-bottom: 4rem;
}
.nav-title {
    font-size: 2rem;
    font-weight: bold;
    color: #146EB4;
    text-align: center;
    margin: 4rem;
}
.custom-section {
    margin: 2rem;
    line-height: 3rem;
    font-size: 1.3rem;
    text-indent: 40px;
    text-align: left;
    color: #5f7479;
}
.rolling {
  /* 31 */
  animation: rolling 5s infinite normal linear;
  -webkit-animation: rolling 5s infinite infinite linear;
}

@keyframes rolling {
from {transform: translateY(0);}
to {transform: translateY(-20rem);}
}

@-webkit-keyframes rolling {
from {transform: translateY(0);}
to {transform: translateY(-20rem);}
}

</style>
