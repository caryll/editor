<template>
<select>
	<option value="" disabled selected>{{placeholder}}</option>
	<option v-for="term in terms" value="{{term}}">{{term}}</option>
</select>
</template>

<script>
	module.exports = {
		props : ['placeholder', 'terms'],
		data : function(){
			return {placeholder: '<dropdown>'}
		}
	}
</script>