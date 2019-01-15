<template>

    <enso-tabs alignment="centered"
        custom>
        <span slot="label"
            slot-scope="{ tab }">
            {{ tab }}
            <span class="tag is-dark file-counter">
                {{ content(tab).length }}
            </span>
        </span>
        <div class="columns is-reverse-mobile">
            <div class="column is-two-thirds">
                <tab v-for="(folder, index) in folders"
                    :key="index"
                    :id="folder">
                    <transition-group class="columns is-multiline is-mobile"
                        enter-active-class="fadeInUp"
                        leave-active-class="fadeOutDown"
                        tag="div">
                        <div class="column is-half-mobile is-one-third-desktop animated"
                            v-for="file in content(folder)"
                            :key="file.id">
                            <file :file="file"
                                @delete="destroy(file.id)"/>
                        </div>
                    </transition-group>
                </tab>
            </div>
            <div class="column is-one-third">
                <div class="has-margin-top-small">
                    <p class="control has-icons-left has-icons-right"
                        v-if="files.length">
                        <input class="input is-rounded search-files"
                            :placeholder="__('Filter')"
                            v-model="query">
                        <span class="icon is-small is-left">
                            <fa icon="search"/>
                        </span>
                        <span class="icon is-small is-right clear-button"
                            v-if="query && !loading">
                            <a class="delete is-small"
                                @click="query = null"/>
                        </span>
                    </p>
                </div>
                <div class="field is-grouped has-margin-top-large">
                    <uploader multiple
                        :url="uploadUrl"
                        fileKey="upload"
                        @upload-successful="addUploadedFiles"/>
                    <a class="button is-fullwidth"
                        :class="{ 'is-loading': loading }"
                        @click="fetch">
                        <span>
                            {{ __('Reload') }}
                        </span>
                        <span class="icon">
                            <fa icon="sync-alt"/>
                        </span>
                    </a>
                </div>
                <date-filter class="box raises-on-hover has-margin-top-large"
                    :locale="locale"
                    @update="interval = $event; fetch()"/>
                <div class="box has-background-light raises-on-hover">
                    <h5 class="title is-5 has-text-centered">
                        {{ __('Storage Usage') }}:
                        <span :class="status">
                            {{ storageUsage }} %
                        </span>
                    </h5>
                    <chart :data="chartData"
                        :options="{ aspectRatio: 1 }"
                        type="doughnut"
                        v-if="!isMobile && stats.filteredSpaceUsed > 0"/>
                </div>
            </div>
        </div>
    </enso-tabs>

</template>

<script>

import { mapState, mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import EnsoTabs from '../../components/enso/bulma/EnsoTabs.vue';
import Tab from '../../components/enso/bulma/Tab.vue';
import DateFilter from '../../components/enso/bulma/DateFilter.vue';
import File from '../../components/enso/filemanager/File.vue';
import Chart from '../../components/enso/charts/Chart.vue';
import Uploader from '../../components/enso/filemanager/Uploader.vue';

import Colors from '../../components/enso/charts/colors';

library.add(faSearch, faSyncAlt);

export default {
    components: { EnsoTabs, Tab, File, Chart, DateFilter, Uploader },

    data() {
        return {
            loading: false,
            files: [],
            folders: [],
            stats: {},
            query: null,
            interval: {
                min: null,
                max: null,
            },
        };
    },

    computed: {
        ...mapState('layout', ['isMobile']),
        ...mapGetters('preferences', { locale: 'lang' }),
        uploadUrl() {
            return route('core.uploads.store');
        },
        filteredFiles() {
            return this.query
                ? this.files.filter(file => file.name.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1)
                : this.files;
        },
        colors() {
            return Colors.slice(0, this.folders.length);
        },
        foldersStats() {
            return this.folders.map(folder =>
                this.content(folder)
                    .reduce((total, { size }) => (total += size), 0));
        },
        chartData() {
            return {
                labels: this.folders,
                datasets: [{
                    data: this.foldersStats,
                    backgroundColor: this.colors,
                    datalabels: {
                        backgroundColor: this.colors,
                        formatter: val => `${this.$options.filters.numberFormat(val / 1000)} KB`,
                    },
                }],
            };
        },
        storageUsage() {
            return this.stats.totalSpaceUsed
                && this.$options.filters.numberFormat(
                    this.stats.totalSpaceUsed * 100 / this.stats.storageLimit, 2
                );
        },
        status() {
            return this.storageUsage < 95
                ? 'has-text-success'
                : 'has-text-danger';
        }
    },

    methods: {
        fetch() {
            this.loading = true;

            axios.get(
                route('core.files.index'),
                { params: { interval: this.interval } },
            ).then(({ data }) => {
                this.files = data.data;
                this.folders = data.folders;
                this.stats = data.stats;
                this.loading = false;
            }).catch(error => this.handleErorr(error));
        },
        destroy(id) {
            this.loading = true;

            axios.delete(route('core.files.destroy', id, false)).then(() => {
                this.loading = false;
                const index = this.files.findIndex(file => file.id === id);
                this.files.splice(index, 1);
            }).catch((error) => {
                this.handleError(error);
            });
        },
        content(folder) {
            return this.filteredFiles.filter(({ type }) => type === folder);
        },
        addUploadedFiles(files) {
            this.files.push(...files);
        }
    },
};

</script>

<style lang="scss" scoped>

    input.search-files {
        width: 100%;
    }

    .control.has-icons-right .icon.clear-button {
        pointer-events: all;
    }

    .tag.file-counter {
        height: unset;
    }

</style>
