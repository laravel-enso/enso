<template>

    <div class="level settings">
        <div class="level-left">
            <div class="level-item">
                {{ title }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
            	<span class="button is-info is-small"
                    @click="get()">
                    <i class="is-icon fa fa-question is-clickable"></i>
                </span>
            </div>
        </div>
    </div>

</template>

<script>

    import { introJs } from 'intro.js';

	export default {
		name: 'Tutorial',

        props: {
            title: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                intro: introJs()
            }
        },

        methods: {
            get() {
                axios.get(route('system.tutorials.show', this.$route.name, false)).then(response => {
                    this.init(response.data);
                }).catch(error => {
                    this.handleError(error);
                });
            },
            init(steps) {
                this.$store.commit('layout/settingsBar/toggle');
                this.intro.setOptions({
                    steps: steps
                });

                this.intro.start();
            }
        }
	};

</script>

<style src="intro.js/introjs.css"></style>