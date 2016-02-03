<template>
<select>
	<option value="" disabled selected>{{placeholder}}</option>
	<option v-for="term in terms" value="{{term}}">{{term}}</option>
</select>
</template>

<script lang="ptl">
	export : define props {'placeholder', 'terms'}
	export : define [data] : begin
		return {.placeholder '{dropdown}'}
</script>