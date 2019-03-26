<template>
  <div class="advertisement-card">
		<div class="advertisement">
			<image :src="advertisement.imgUrl" style="width:690px;height:260px" class="advertisement-img"></image>
			<div class="advertisement-content">
				<text class="title">{{advertisement.title}}</text>
				<div class="advertisement-foot">
					<text class="content">{{advertisement.content}}</text>
					<div class="advertisement-foot_c">
						<text class="num">{{advertisement.peopleNum}} </text>
						<image :src="eye" style="width:27px;height:19px" class="eye-icon"></image>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { createLink, getImg } from '../utils/index'
	export default {
		props: ['adverItem'],
		data () {
			return {
				advertisement: this.adverItem,
				eye: getImg('eye.png'),
			}
		}
	}
</script>

<style lang="sass" scoped>
	.advertisement-card
		.advertisement
			width: 690px
			height: 388px
			background-color: #ffffff
			margin: 0 auto
			border-radius: 12px
			.advertisement-content
				padding: 27px 30px 24px
				.title
					font-size: 36px
					color: #44D6BE
					font-weight: bold
				.advertisement-foot
					display: flex
					flex-direction: row
					justify-content: space-between
					margin-top: 10px
					.content
						color: #B2B2B2
						font-size: 24px
					.advertisement-foot_c
						flex-direction: row
						align-items: center
						.num
							color: #B2B2B2
							font-size: 24px
		.advertisement-img
			border-top-left-radius: 12px
			border-top-right-radius: 12px
</style>