<template>

    <div class="columns is-multiline">
        <div v-for="log in logs" class="column is-one-third-widescreen is-half-desktop is-full-tablet">
            <card icon="fa fa-terminal"
                :removable="false"
                :collapsible="false"
                :title="log.name"
                :controls="3">
                <a slot="control-1" class="card-header-icon"
                    v-if="log.canBeSeen">
                    <span class="icon is-small has-text-success"
                        @click="$router.push({ name: 'system.logs.show', params: { id: log.name } })">
                        <i class="fa fa-eye"></i>
                    </span>
                </a>
                <a slot="control-1" class="card-header-icon">
                    <a class="icon is-small has-text-info"
                        :href="getDownloadLink(log.name)">
                        <i class="fa fa-cloud-download"></i>
                    </a>
                </a>
                <a slot="control-1" class="card-header-icon">
                    <span class="icon is-small has-text-danger"
                        @click="showModal=true;itemToBeDeleted=log.name">
                        <i class="fa fa-trash-o"></i>
                    </span>
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
        <modal :show="showModal"
            @cancel-action="showModal=false;itemToBeDeleted=null"
            @commit-action="empty()">
        </modal>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../../../../components/enso/bulma/Card.vue';
import Modal from '../../../../components/enso/bulma/Modal.vue';

export default {
    components: { Card, Modal },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            showModal: false,
            itemToBeDeleted: null,
            logs: [],
        };
    },

    created() {
        axios.get(route('system.logs.index', [], false)).then((response) => {
            this.logs = response.data.logs;
        }).catch(error => this.handleError(error));
    },

    methods: {
        empty() {
            axios.delete(route('system.logs.destroy', this.itemToBeDeleted, false).toString()).then((response) => {
                this.showModal = false;
                const index = this.logs.findIndex(log => this.itemToBeDeleted === log.name);
                this.logs.splice(index, 1, response.data.log);
                this.itemToBeDeleted = null;
                toastr.success(response.data.message);
            }).catch((error) => {
                this.showModal = false;
                this.handleError(error);
            });
        },
        getDownloadLink(log) {
            return route('system.logs.download', log, false).toString();
        },
    },
};

</script>
