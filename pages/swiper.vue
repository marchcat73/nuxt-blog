<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [],
        swiperOption: {
          pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: { 
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
        	}
          // some swiper options...
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.banners.push('/18062019-140750_276-index1.jpg', '/18062019-153637_926-sl1.jpg', '/18062019-155401_483-sl1.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'It will slideTo banners 3')
      this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss" scoped>
	.swiper-pagination {
		position: relative;
		width: 100%;
	}


.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
}
</style>

