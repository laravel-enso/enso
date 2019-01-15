<template>

    <enso-tabs>
        <span slot="label"
            slot-scope="{ tab }">
            {{ __(tab) }}
            <span class="tag is-dark file-counter">
                {{ count[tab.toLowerCase()] }}
            </span>
        </span>
        <tab keep-alive
            id="Addresses"
            v-if="addresses">
            <addresses controls
                :type="type"
                :id="id"
                @update="count.addresses = $refs.addresses.count"
                ref="addresses"/>
        </tab>
        <tab keep-alive
            id="Comments"
            v-if="comments">
            <comments controls
                :type="type"
                :id="id"
                @update="count.comments = $refs.comments.count"
                ref="comments"/>
        </tab>
        <slot name="custom"
            :count="count"/>
        <tab keep-alive
            id="Discussions"
            v-if="discussions">
            <discussions controls
                :type="type"
                :id="id"
                @update="count.discussions = $refs.discussions.count"
                ref="discussions"/>
        </tab>
        <tab keep-alive
            id="Documents"
            v-if="documents">
            <documents controls
                :compact="compact"
                :type="type"
                :id="id"
                @update="count.documents = $refs.documents.count"
                ref="documents"/>
        </tab>
    </enso-tabs>

</template>

<script>

import Addresses from '../addresses/Addresses.vue';
import Comments from '../comments/Comments.vue';
import Discussions from '../discussions/Discussions.vue';
import Documents from '../documents/Documents.vue';
import EnsoTabs from './EnsoTabs.vue';
import Tab from './Tab.vue';

export default {
    name: 'Accessories',

    components: {
        Addresses, Comments, Discussions, Documents, Tab, EnsoTabs,
    },

    props: {
        addresses: {
            type: Boolean,
            default: false,
        },
        comments: {
            type: Boolean,
            default: false,
        },
        discussions: {
            type: Boolean,
            default: false,
        },
        documents: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        compact: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        count: {
            addresses: 0,
            comments: 0,
            discussions: 0,
            documents: 0,
        },
    }),
};

</script>
