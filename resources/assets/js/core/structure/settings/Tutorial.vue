<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Tutorial') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <button class="button is-small is-info"
                    @click="get()">
                    <span class="icon is-small">
                        <fa icon="question"/>
                    </span>
                </button>
            </div>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const introJs = require('intro.js');

library.add(faQuestion);

export default {
    name: 'Tutorial',

    data() {
        return {
            intro: introJs(),
        };
    },

    methods: {
        get() {
            axios.get(route('system.tutorials.show'), {
                params: { route: this.$route.name },
            }).then(({ data }) => {
                this.init(data);
            }).catch(error => this.handleError(error));
        },
        init(steps) {
            this.$store.commit('layout/settingsBar/toggle');
            this.intro.setOptions({
                steps, highlightClass: 'intro-highlight', showStepNumbers: false,
            });
            this.intro.start();
        },
    },
};

</script>

<style src="intro.js/introjs.css"></style>

<style>

    .intro-highlight {
        opacity: 0.5;
    }

</style>

