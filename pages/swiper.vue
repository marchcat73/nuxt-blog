<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
	<div>
		<div class="loading-page" v-if="loading">
    	<p>Loading...</p>
  	</div>
		<div v-swiper:mySwiper="swiperOption">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
					<img :src="banner" class="banner-img">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
				loading: true,
        banners: [],
        swiperOption: {
					initialSlide: 0,
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
				this.loading = true
				this.banners.push('/18062019-140750_276-index1.jpg', '/18062019-153637_926-sl1.jpg', '/18062019-155401_483-sl1.jpg')
				this.mySwiper.update();
				console.log('banners update')
				this.loading = false
				
			}, 1000)
			
    }
  }
</script>

<style lang="scss" scoped>
	.loading-page {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(14, 13, 13, 1);
		text-align: center;
		padding-top: 200px;
		font-size: 30px;
		font-family: sans-serif;
		z-index: 100;
		color: #fff;
	}
	.swiper-pagination {
		position: relative;
		width: 100%;
	}

	.banner-img {
		max-width: 100%;
		height: auto;
	}
</style>

