<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ title }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <button class="button is-small is-info"
                    @click="get()">
                    <span class="icon is-small">
                        <fa icon="question"></fa>
                    </span>
                </button>
            </div>
        </div>
    </div>

</template>

<script>

import { introJs } from 'intro.js';
import fontawesome from '@fortawesome/fontawesome';
import { faQuestion } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faQuestion);

export default {
    name: 'Tutorial',

    props: {
        title: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            intro: introJs(),
        };
    },

    methods: {
        get() {
            axios.get(route('system.tutorials.show', this.$route.name, false)).then(({ data }) => {
                this.init(data);
            }).catch(error => this.handleError(error));
        },
        init(steps) {
            this.$store.commit('layout/settingsBar/toggle');
            this.intro.setOptions({ steps, highlightClass: 'intro-highlight', showStepNumbers: false });
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

