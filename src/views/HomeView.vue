<script>
  import Carousel from '../components/Carousel.vue'
  import Slide from '../components/Slide.vue'

  export default {
    data() {
      return {
        carouselData: ['bike-1', 'bike-2', 'bike-3']
      }
    },
    components: {
      Carousel, Slide
    },
    setup() {
      const getImage = (image) => {
        return `/src/assets/${image}.jpg`
      }
      return { getImage }
    }
  }
</script>

<template>
  <div class="home">
    <Carousel class="carousel" v-slot="{ currentSlide }">
      <Slide v-for="(slide, index) in carouselData" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <!-- <img src="../assets/bg-1.jpg" alt=""> -->
          <img :src="getImage(slide)" alt="smth"/>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>


<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>