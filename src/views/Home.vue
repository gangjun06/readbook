<template>
  <div class="mx-4 my-4">
    <div class="flex justify-center" v-for="item in data" :key="item.id">
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
