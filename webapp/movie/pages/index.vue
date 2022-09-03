
<template>
  
  <div>
    <input  v-model="search" type="search" />
    <button @click="$fetch()">search</button>

    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching movies</p>
   
    <ul v-else>
      
      <li v-for="(movie, index) in movies" :key="index">
        
        {{movie.movie_id}}
        {{ movie.title }}
        {{movie.popularity_summary}}
        <img :src="movie.poster_image_url"/>
      </li>
      
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        movies: [],
        search:""
      }
    },
    async fetch() {
      this.movies = await fetch(
        'http://localhost:3001/movies?search='+this.search
      ).then(res => res.json())
    }
  }
</script>
<style>
  



</style>