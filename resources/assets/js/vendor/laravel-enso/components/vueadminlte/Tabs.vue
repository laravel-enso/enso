<template>
	<div class="nav-tabs-custom">
	    <ul class="nav nav-tabs"
	    	:class="{'pull-right': reverse}">
    		<li v-for="(tab, index) in sortedTabs"
    			:class="{'active': index === selected}">
    			<a @click="selected=index">
    				<span v-if="hasBadges">
    					{{ tab.label }}<span class="badge bg-orange margin-left-xs">{{ tab.badge }}</span>
    				</span>
    				<span v-else>{{ tab }}</span>
    			</a>
    		</li>
			<li class="pull-left header" v-if="reverse">
				<i :class="icon"></i> {{ title }}
			</li>
	    </ul>
	    <div class="tab-content" v-if="tabs.length && selected >= 0">
			<div class="tab-pane active" v-for="(tab, index) in tabs"
				 v-if="sortedActive === index">
				<slot :name="tab.label" v-if="hasBadges">
		    	</slot>
				<slot :name="tab" v-else>
		    	</slot>
			</div>
	    </div>
    </div>
</template>

<script>

	export default {
		props: {
			title: {
				type: String,
				default: null
			},
			tabs: {
				type: Array,
				required: true,
				default() {
					return [];
				}
			},
			reverse: {
				type: Boolean,
				default: false
			},
			active: {
				type: Number,
				default: 0
			},
			icon: {
				type: String,
				default: null
			}
		},

		computed: {
			hasBadges() {
				return this.tabs.length > 0 && this.tabs[0] instanceof Object;
			},
			sortedTabs() {
				return this.reverse
					? this.tabs.slice().reverse()
					: this.tabs;
			},
			sortedActive() {
				return this.reverse
					? this.tabs.length - 1 - this.selected
					: this.selected
			}
		},

		data() {
			return {
				selected: this.active
			}
		},
		methods: {},

		mounted() {
			this.selected = this.sortedActive;
		}
	};

</script>

<style>

	div.nav-tabs-custom > .nav-tabs > li.active {
		border-top-color: transparent;
	}

	div.nav-tabs-custom > .nav-tabs > li {
		cursor: pointer;
	}

	div.nav-tabs-custom {
		box-shadow: none;
	}

</style>