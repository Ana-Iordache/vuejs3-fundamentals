<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link 
      v-for="destination in destinations" 
      :key="destination.id" 
      :to="{name: 'destination.show', params:{id: destination.id}}" 
      >
      <!-- we use the name of the route so when we click on the image, we will be taken to the corresponding page-->
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>