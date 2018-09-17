<template>
    <a class="box raises-on-hover has-text-centered has-padding-large"
        @click="select">
        <span class="icon is-small children"
            v-if="menu.children.length">
            <fa icon="plus" size="xs"/>
        </span>
        <p class="icon">
            <fa :icon="menu.icon"
                size="lg"/>
        </p>
        <p class="subtitle is-4 has-margin-left-small is-marginless">
            {{ __(menu.name) }}
        </p>
    </a>
</template>

<script>

import { mapMutations } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);
export default {
    name: 'TouchMenuItem',

    props: {
        menu: {
            type: Object,
            required: true,
        },
    },

    methods: {
        ...mapMutations('menus', ['toggle']),
        select() {
            if (this.menu.children.length) {
                this.toggle(this.menu);

                return;
            }

            this.$router.push({ name: this.menu.link });
        },
    },
};
</script>

<style lang="scss" scoped>

    .box {
        position: relative;

        .icon.children {
            position: absolute;
            top: .2em;
            right: .2em;
        }
    }

</style>
