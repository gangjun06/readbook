<template>
  <div class="max-w-sm lg:max-w-full lg:flex mt-4">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="{ backgroundImage: 'url(' + data.image + ')' }"
      title="bookcover"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8 text-left">
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ data.title }}
        </div>
        <p class="text-gray-700 text-base">
          {{ data.text }}
        </p>
      </div>
      <div class="flex text-left">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">작가: {{ data.author }}</p>
          <p class="text-gray-600">읽은기간: {{ timebegin }} ~ {{ timeend }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['data'],
  computed: {
    timebegin() {
      return moment(this.data.timebegin * 1000).format('Y년 M월 D일')
    },
    timeend() {
      return moment(this.data.timeend * 1000).format('Y년 M월 D일')
    }
  }
}
</script>
