<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ title }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <dropdown :height="220">
                    <span slot="label"
                        class="icon is-small is-pulled-right">
                        <i :class="['flag-icon', languages[locale]]"></i>
                    </span>
                    <a v-for="(flag, lang) in languages"
                        class="dropdown-item"
                        :key="lang"
                        :class="{ 'is-active': flag === languages[locale] }"
                        @click="update(lang)">
                        <span class="icon is-small">
                            <i :class="['flag-icon', flag]"></i>
                        </span>
                    </a>
                </dropdown>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapGetters } from 'vuex';
import 'flag-icon-css/css/flag-icon.min.css';
import Dropdown from '../../../components/enso/bulma/Dropdown.vue';

export default {
    name: 'LanguageSelector',

    components: { Dropdown },

    props: {
        title: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapState('locale', ['languages']),
        ...mapGetters('locale', { locale: 'current' }),
    },

    methods: {
        update(locale) {
            this.$store.dispatch('locale/setLocale', locale);
            this.$emit('update');
        },
    },
};

</script>
