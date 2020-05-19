<template>
  <div class="max-w-sm lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('https://i.picsum.photos/id/975/200/300.jpg')"
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
          <p class="text-gray-600">
            읽은기간: {{ data.timebegin }} ~ {{ data.timeend }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
