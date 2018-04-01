<template>

    <div class="columns is-multiline">
        <div class="column is-one-third-widescreen is-half-desktop is-full-tablet"
            v-for="(log, index) in logs"
            :key="index">
            <card :icon="icon"
                :title="log.name"
                :controls="3">
                <card-control slot="control-1"
                    v-if="log.canBeSeen">
                    <span class="icon is-small has-text-success"
                        @click="$router.push({ name: 'system.logs.show', params: { id: log.name } })">
                        <fa icon="eye"></fa>
                    </span>
                </card-control>
                <card-control slot="control-2">
                    <a class="icon is-small has-text-info"
                        :href="getDownloadLink(log.name)">
                        <fa icon="cloud-download-alt"></fa>
                    </a>
                </card-control>
                <card-control slot="control-3">
                    <popover placement="bottom"
                        @confirm="empty(log)">
                        <span class="icon is-small has-text-danger">
                            <fa icon="trash-alt"></fa>
                        </span>
                    </popover>
                </card-control>
                <div class="has-padding-large">
                    <p>
                        <span>{{ __("Last updated") }}</span>
                        <span class="is-pulled-right">{{ timeFromNow(log.modified.date) }}</span>
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

import fontawesome from '@fortawesome/fontawesome';
import { faTerminal, faEye, faCloudDownloadAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../../../components/enso/bulma/Card.vue';
import CardControl from '../../../components/enso/bulma/CardControl.vue';
import Popover from '../../../components/enso/bulma/Popover.vue';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

fontawesome.library.add(faTerminal, faEye, faCloudDownloadAlt, faTrashAlt);

export default {
    components: { Card, CardControl, Popover },

    data() {
        return {
            logs: [],
        };
    },

    computed: {
        icon() {
            return faTerminal;
        },
    },

    created() {
        axios.get(route('system.logs.index')).then(({ data }) => {
            this.logs = data.logs;
        }).catch(error => this.handleError(error));
    },

    methods: {
        empty(log) {
            axios.delete(route('system.logs.destroy', log.name)).then(({ data }) => {
                const index = this.logs.findIndex(item => log.name === item.name);
                this.logs.splice(index, 1, data.log);
                this.$toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
        getDownloadLink(log) {
            return route('system.logs.download', log);
        },
        timeFromNow(date) {
            return formatDistance(date);
        },
    },
};

</script>
