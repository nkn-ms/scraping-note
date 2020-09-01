<template>
  <div class="wrapper">
    <h1>contents</h1>
    <div class="btn-area">
      <base-button @click="changeOrderByLike">
        <span class="btn-heart">
          <font-awesome-icon :icon="['far', 'heart']" />
        </span>
        <span class="triangle" :class="triangleClass" />
      </base-button>
      <base-button @click="changeDefaultOrder">
        default
      </base-button>
    </div>
    <table class="contents">
      <tr v-for="item in sortedItems" :key="item.url">
        <td class="heart">
          <font-awesome-icon :icon="['far', 'heart']" />
          {{ item.like }}
        </td>
        <td>
          <router-link
            :to="'/detail/' + item.id"
            @click.native="setDetailData(item)"
          >
            {{ item.title | slicer(30) }}
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'ScContents',
  components: {
    BaseButton
  },
  filters: {
    slicer(str, int) {
      if (str.length > int) {
        str = str.slice(0, int) + '...'
      }
      return str
    }
  },
  data() {
    return {
      defaultOrder: true,
      sortItemsOrder: 1,
      upSideDown: true,
      isActive: true
    }
  },
  computed: {
    items() {
      return this.$store.state.scrapingData
    },
    getScrapingData() {
      return this.$store.state.scrapingData
    },
    sortedItems() {
      let items
      if (this.items == null) {
        return []
      }
      if (this.defaultOrder) {
        items = this.sortedItemsById
      } else {
        items = this.sortedItemsByLike
      }
      return items
    },
    sortedItemsByLike() {
      this.changeUpSideDown()
      this.changeActive()
      return this.items.slice().sort((a, b) => {
        if (a.like > b.like) {
          return this.sortItemsOrder
        } else if (a.like < b.like) {
          return -1 * this.sortItemsOrder
        } else {
          return 0
        }
      })
    },
    sortedItemsById() {
      return this.items.slice().sort((a, b) => {
        return a.id > b.id ? 1 : a.id < b.id ? -1 : 0
      })
    },
    triangleClass() {
      let classObject = {
        inactive: this.isActive,
        'up-side-down': this.upSideDown
      }
      return classObject
    }
  },
  methods: {
    // onclickでDettail用に該当要素のデータをstoreに渡す
    setDetailData(detailData) {
      console.log('@click')
      this.$store.dispatch('setDetailData', detailData)
    },
    changeOrderByLike() {
      this.upSideDown = true
      this.defaultOrder = false
      this.sortItemsOrder *= -1
    },
    changeDefaultOrder() {
      this.isActive = true
      this.defaultOrder = true
    },
    changeUpSideDown() {
      if (this.sortItemsOrder === 1) {
        this.upSideDown = true
      } else {
        this.upSideDown = false
      }
    },
    changeActive() {
      if (this.defaultOrder) {
        this.isActive = true
      }
      this.isActive = false
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.contents {
  margin: auto;
  margin-top: 20px;
  text-align: left;
}
.heart {
  color: #ea3f60;
}
.triangle {
  border-top: 15px solid #ea3f60;
  border-right: 10px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 10px solid transparent;
  display: inline-block;
  width: 0px;
  position: relative;
  left: 3px;
}
.btn-area {
  display: flex;
  justify-content: center;
}
.btn-heart {
  color: #ea3f60;
  font-size: 20px;
  position: relative;
  left: -3px;
}
.btn {
  width: 70px;
  height: 30px;
  position: relative;
  margin: 0 5px;
  border-radius: 8px;
  outline: none;
}
.inactive {
  border-top-color: lightgray;
  color: lightgray;
}
.up-side-down {
  transform: rotateX(180deg);
}
</style>
