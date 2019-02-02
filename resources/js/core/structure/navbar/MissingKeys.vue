<template>
    <div class="navbar-item key-collector"
        v-if="keyCollector">
        <span class="has-text-info is-bold">
            {{ count }}
        </span>
        <span :class="[
                'icon  is-clickable has-margin-left-medium',
                hover ? 'has-text-success' : 'has-text-danger'
            ]"
            @click="persist"
            @mouseenter="hover = true"
            @mouseleave="hover = false">
            <fa :icon="icon"/>
        </span>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLanguage, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faLanguage, faCheck);

export default {
    name: 'MissingKeys',

    data: () => ({
        hover: false,
    }),

    computed: {
        ...mapState('localisation', ['keyCollector', 'missingKeys']),
        count() {
            return this.missingKeys.length;
        },
        icon() {
            return this.hover ? faCheck : faLanguage;
        },
        mappedKeys() {
            return this.missingKeys
                .map(key => ({ [key]: null }));
        },
    },


    methods: {
        ...mapMutations('localisation', ['addKey', 'clearMissingKeys']),
        persist() {
            axios.patch(
                route('system.localisation.addKey'),
                { keys: this.missingKeys },
            ).then(({ data }) => {
                this.missingKeys.forEach(key => this.addKey(key));
                this.clearMissingKeys();
                this.$toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
    },
};

</script>

<style lang="scss" scoped>

</style>
