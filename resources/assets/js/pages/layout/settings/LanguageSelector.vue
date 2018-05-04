<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Language') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <dropdown :height="220">
                    <span slot="label"
                        class="icon is-small is-pulled-right">
                        <i :class="languages[locale]"/>
                    </span>
                    <a v-for="(flag, lang) in languages"
                        class="dropdown-item"
                        :key="lang"
                        :class="{ 'is-active': flag === languages[locale] }"
                        @click="update(lang)">
                        <span class="icon is-small">
                            <i :class="flag"/>
                        </span>
                    </a>
                </dropdown>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import Dropdown from '../../../components/enso/bulma/Dropdown.vue';

require('../../../../sass/flags.scss');

export default {
    name: 'LanguageSelector',

    components: { Dropdown },

    computed: {
        ...mapState('locale', ['languages']),
        ...mapGetters('locale', { locale: 'current' }),
    },

    methods: {
        ...mapActions('locale', ['setLocale']),
        update(locale) {
            this.setLocale(locale);
            this.$emit('update');
        },
    },
};

</script>

