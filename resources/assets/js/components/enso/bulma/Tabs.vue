<template>
	<div>
		<div class="tabs" :class="alignClass">
		    <ul>
	    		<li v-for="(tab, index) in tabs"
	    			:class="{ 'is-active': index === selected }">
	    			<a @click="selected=index">
    					{{ tab.label }}
    					<span class="tag is-warning has-margin-left-small"
    						v-if="hasBadges">
    						{{ tab.badge }}
    					</span>
	    			</a>
	    		</li>
		    </ul>
	    </div>
	    <div v-for="(tab, index) in tabs"
	    	v-if="tabs.length && selected === index">
			<slot :name="tab.label"
				v-if="hasBadges">
	    	</slot>
			<slot :name="tab" v-else>
	    	</slot>
	    </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: null,
        },
        align: {
            type: String,
            default: 'left',
            validator: value => ['left', 'center', 'right'].includes(value),
        },
        tabs: {
            type: Array,
            required: true,
            default() {
                return [];
            },
        },
        active: {
            type: Number,
            default: 0,
        },
        icon: {
            type: String,
            default: null,
        },
    },

    computed: {
        hasBadges() {
            return this.tabs.length > 0 && this.tabs[0] instanceof Object;
        },
        alignClass() {
            return `is-${this.align}`;
        },
    },

    data() {
        return {
            selected: this.active,
        };
    },
};

</script>
