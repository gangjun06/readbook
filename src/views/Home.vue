<template>
  <div class="mx-4 my-4">
    <div class="flex justify-center" v-for="(item, index) in data" :key="index">
      <Card :data="item" />
    </div>
  </div>
</template>

<script>
import db from '../db'
import Card from '../components/card'
export default {
  name: 'Home',
  data: () => ({
    data: []
  }),
  components: {
    Card
  },
  mounted() {
    db.getAll().then(result => {
      this.data = result
    })
  }
}
</script>
