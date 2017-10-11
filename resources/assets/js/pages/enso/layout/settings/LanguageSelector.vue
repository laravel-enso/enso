<template>
    <div class="level">
        <div class="level-left">
            <div class="level-item">
                {{ title }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <div class="dropdown is-right"
                    v-click-outside="hide"
                    :class="{ 'is-active': show }"
                    @click="show=!show">
                    <div class="dropdown-trigger">
                        <button class="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu">
                            <span class="icon is-small is-pulled-right">
                                <i class="flag-icon"
                                    :class="languages[locale]">
                                </i>
                            </span>
                            <span class="icon angle is-small"
                                 :aria-hidden="show">
                                <i class="fa fa-angle-up"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content has-text-centered">
                            <a v-for="(flag, lang) in languages"
                                class="dropdown-item"
                                :class="{ 'is-active': flag === languages[locale] }"
                                @click="update(lang)">
                                <span class="icon is-small">
                                    <i class="flag-icon"
                                        :class="flag">
                                    </i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

    require('flag-icon-css/css/flag-icon.min.css');
    import { mapState } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        name: 'LanguageSelector',

        props: {
            title: {
                type: String,
                required: true
            }
        },

        computed: {
            ...mapState('locale', ['languages']),
            ...mapGetters('locale',
                { locale: 'current' }
            )
        },

        data() {
            return {
                show: false,
            }
        },

        methods: {
            hide() {
                this.show = false;
            },
            update(locale) {
                this.$store.dispatch('locale/setLocale', locale);
                this.$emit('update');
            }
        }
    };

</script>