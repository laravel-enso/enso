<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Tutorial') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <a class="button is-naked"
                    @click="get()">
                    <span class="icon is-small">
                        <fa icon="question"/>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import * as Driver from 'driver.js';
import '../../../../../node_modules/driver.js/dist/driver.min.css';

library.add(faQuestion);

export default {
    name: 'Tutorial',

    data: v => ({
        driver: new Driver({
            doneBtnText: v.__('Done'),
            closeBtnText: v.__('Close'),
            nextBtnText: v.__('Next'),
            prevBtnText: v.__('Previous'),
        }),
    }),

    methods: {
        get() {
            axios.get(route('system.tutorials.show'), {
                params: { route: this.$route.name },
            }).then(({ data }) => {
                if (data.length) {
                    this.init(data);
                }
            }).catch((error) => {
                this.handleError(error);
            });
        },
        init(steps) {
            this.$store.commit('layout/settingsBar/toggle');
            this.driver.defineSteps(this.localise(steps));
            this.driver.start();
        },
        localise(steps) {
            return steps.map(({ element, popover }) => ({
                element,
                popover: {
                    description: this.__(popover.description),
                    position: popover.position,
                    title: this.__(popover.title),
                },
            }));
        },
    },
};

</script>
