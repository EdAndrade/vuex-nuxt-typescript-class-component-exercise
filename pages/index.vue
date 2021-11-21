<template>
	<div>{{ FullName }}</div>
</template>

<script lang="ts">

	import { Vue, Component, Prop } from 'vue-property-decorator'
	import Tutorial from '@/components/Tutorial.vue'
	import { mapState, mapActions }	from 'vuex'

	interface User {
		firstName: string,
		lastName: string
	}

	@Component({

		components: {
			Tutorial
		},

		computed: {
			...mapState({
				name: (state: any) => state.chat.name
			})
		},

		methods: {
			...mapActions({
				setNameAndReturnIt: 'chat/setNameAndReturnIt'
			})
		}
	})
	export default class Index extends Vue {

		@Prop({
			type: Object,
			required: false,
		}) readonly user! : User

		message: string = 'This is a message'

		private get FullName(): string {
			return this.user ? `${this.user.firstName} ${this.user.lastName}` : ''
		}

		private name!: string;

		private setNameAndReturnIt!: (name: string) => string;

		public hello(){
			alert('Heelo')
		}

		mounted(){
			this.hello()
			console.log('Before execute action', this.name)
			this.setNameAndReturnIt('Edmilson');
			console.log('After execute action', this.name)
		}
	}
	
</script>
