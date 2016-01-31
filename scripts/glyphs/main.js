var Vue = require('vue')
Vue.component('dropdown', require('../components/dropdown.vue'))

new Vue({
	el: '#appwindow-glyphs',
	data: {
		variants : ['Thin', 'Regular', 'Bold']
	}
})