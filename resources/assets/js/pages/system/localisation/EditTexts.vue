<template>

    <div class="box">
        <div class="columns is-multiline has-border-bottom">
            <div class="column is-half-tablet">
                <div class="columns is-multiline">
                    <div class="column is-half-tablet">
                        <vue-select :options="locales"
                            v-model="selectedLocale"
                            @input="getLangFile()"
                            :placeholder="__('Choose language')">
                        </vue-select>
                    </div>
                    <div class="column is-half-tablet has-text-right animated fadeIn is-hidden-mobile"
                        v-if="selectedLocale">
                        <p class="has-padding-top-small">
                            <b>{{ keysCount }}</b> {{ __('keys found') }}
                        </p>
                    </div>
                    <div class="column animated fadeIn"
                        v-if="selectedLocale">
                        <div class="field">
                            <p class="control has-icons-right">
                                <input type="search"
                                    class="input"
                                    v-focus
                                    v-select-on-focus
                                    :placeholder="__('Search')"
                                    v-model="query"
                                    @keyup.enter="isNewKey ? addKey() : focusIt(null)">
                                <span class="icon is-small is-right">
                                    <i class="fa fa-search"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half-tablet">
                <div class="columns is-mobile has-text-centered">
                    <div class="column is-half">
                        <button class="button is-success is-fullwidth"
                            v-if="isNewKey"
                            @click="addKey()">
                            {{ __('Add Key') }}
                        </button>
                    </div>
                    <div class="column is-half">
                        <button @click="saveLangFile()"
                            v-if="selectedLocale"
                            class="button is-success is-fullwidth"
                            :class="{ 'is-loading': loading }">
                            {{ __('Update') }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="column columns is-hidden-mobile"
                v-if="selectedLocale">
                <div class="column is-half has-text-centered">
                    <h5 class="title is-5">{{ __('Key') }}</h5>
                </div>
                <div class="column is-half has-text-centered">
                    <h5 class="title is-5">{{ __('Value') }}</h5>
                </div>
            </div>
        </div>
        <div class="translations"
            :style="transDiv"
            v-if="selectedLocale">
            <div class="column"
                v-for="(key, index) in filteredKeys"
                :key="index">
                <div class="columns">
                    <div class="column is-half">
                        <input type="text" class="input" disabled :value="key">
                    </div>
                    <div class="column is-half">
                        <div class="field has-addons">
                            <p class="control is-expanded">
                                <input type="text"
                                    v-select-on-focus
                                    v-model="langFile[key]"
                                    :id="key"
                                    class="input"
                                    @keyup.enter="focusIt('search-input')">
                            </p>
                            <p class="control">
                                <a class="button">
                                    <i class="icon fa fa-trash-o has-text-danger"
                                        @click="removeKey(key)">
                                    </i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters, mapState } from 'vuex';
import VueSelect from '../../../components/enso/select/VueSelect.vue';

export default {
    components: { VueSelect },

    data() {
        return {
            langFile: {},
            locales: {},
            selectedLocale: null,
            query: null,
            boxHeight: 0,
            loading: false,
        };
    },

    computed: {
        ...mapState('layout', ['isMobile']),
        ...mapGetters('locale', ['__']),
        transDiv() {
            return {
                'max-height': this.boxHeight,
                'overflow-y': 'auto',
            };
        },
        langKeys() {
            return Object.keys(this.langFile);
        },
        sortedKeys() {
            return this.langKeys.sort((a, b) => {
                if (a.toLowerCase() < b.toLowerCase()) return -1;
                if (a.toLowerCase() > b.toLowerCase()) return 1;
                return 0;
            });
        },
        filteredKeys() {
            if (!this.query) {
                return this.sortedKeys;
            }

            const self = this;

            return this.langKeys.filter(key => key.toLowerCase()
                .indexOf(self.query.toLowerCase()) > -1);
        },
        isNewKey() {
            return this.selectedLocale &&
                this.query && this.filteredKeys.indexOf(this.query) === -1;
        },
        keysCount() {
            return this.langKeys.length;
        },
    },

    watch: {
        isMobile: {
            handler: 'setBoxHeight',
        },
    },

    created() {
        this.init();
        this.setBoxHeight();
    },

    methods: {
        init() {
            axios.get(route('system.localisation.editTexts', [], false)).then((response) => {
                this.locales = response.data.locales;
            }).catch(error => this.handleError(error));
        },
        getLangFile() {
            if (!this.selectedLocale) {
                this.langFile = {};
                return;
            }

            axios.get(route('system.localisation.getLangFile', this.selectedLocale, false)).then((response) => {
                this.langFile = response.data;
            }).catch(error => this.handleError(error));
        },
        saveLangFile() {
            this.loading = true;

            axios.patch(route('system.localisation.saveLangFile', this.selectedLocale, false).toString(), {
                langFile: this.langFile,
            }).then((response) => {
                this.loading = false;
                toastr.success(response.data.message);
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        addKey() {
            this.$set(this.langFile, this.query, null);
            this.focusIt();
        },
        removeKey(key) {
            this.$delete(this.langFile, key);
        },
        focusIt(id = null) {
            id = id || this.query;

            this.$nextTick(() => {
                document.getElementById(id).focus();
            });
        },
        setBoxHeight() {
            this.boxHeight = document.body.clientHeight - (this.isMobile ? 372 : 340);
        },
    },
};

</script>

<style>

    .has-border-bottom {
        border-bottom: 1px solid lightgray;
    }

</style>
