<template>
	<div id="test101">
	<h1>{{ message | capitalize  }}</h1>	
	<h1>{{ message | capitalize('arg1')  }}</h1>	
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
	</div>
</template>

<script>
	export default{



		name:'test101',
		data(){
			return{
				isActive: true,
  				hasError: false,
				message:'aAQvvbbbbv'
			}
		},


		//示范2.0的手写过滤器
		filters: {
			capitalize: function (value) {
				if (!value) return 'aaaa'
					value = value.toString()
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		}
	}	

		debugger;


</script>