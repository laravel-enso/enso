<template>

    <div class="columns is-multiline">
        <div class="column is-one-third-widescreen is-half-desktop is-full-tablet"
            v-for="(log, index) in logs"
            :key="index">
            <card icon="fas fa-terminal"
                :removable="false"
                :collapsible="false"
                :title="log.name"
                :controls="3">
                <a slot="control-1" class="card-header-icon"
                    v-if="log.canBeSeen">
                    <span class="icon is-small has-text-success"
                        @click="$router.push({ name: 'system.logs.show', params: { id: log.name } })">
                        <i class="fas fa-eye"></i>
                    </span>
                </a>
                <a slot="control-1" class="card-header-icon">
                    <a class="icon is-small has-text-info"
                        :href="getDownloadLink(log.name)">
                        <i class="fas fa-cloud-download-alt"></i>
                    </a>
                </a>
                <a slot="control-1" class="card-header-icon">
                    <popover placement="bottom"
                        @confirm="empty(log)">
                        <span class="icon is-small has-text-danger">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </popover>
                </a>
                <div class="has-padding-large">
                    <p>
                        <span>{{ __("Last updated") }}</span>
                        <span class="is-pulled-right">{{ log.modified.date | timeFromNow }}</span>
                    </p>
                    <p>
                        <span>{{ __("Size") }}</span>
                        <span class="is-pulled-right">{{ log.size }} {{ __("MB") }}</span>
                    </p>
                </div>
            </card>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../../../components/enso/bulma/Card.vue';
import Popover from '../../../components/enso/bulma/Popover.vue';

export default {
    components: { Card, Popover },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            logs: [],
        };
    },

    created() {
        axios.get(route('system.logs.index', [], false)).then(({ data }) => {
            this.logs = data.logs;
        }).catch(error => this.handleError(error));
    },

    methods: {
        empty(log) {
            axios.delete(route('system.logs.destroy', log.name, false).toString()).then(({ data }) => {
                const index = this.logs.findIndex(item => log.name === item.name);
                this.logs.splice(index, 1, data.log);
                toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
        getDownloadLink(log) {
            return route('system.logs.download', log, false).toString();
        },
    },
};

</script>
