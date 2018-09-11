<template>

    <div>
        <document class="animated fadeInDown"
            v-for="(doc, index) in filteredDocuments"
            :key="index"
            :doc="doc"
            @delete="destroy(index)"/>
    </div>
</template>

<script>

import Document from './Document.vue';

export default {
    name: 'Documents',

    components: { Document },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        query: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            documents: [],
            loading: false,
        };
    },

    computed: {
        filteredDocuments() {
            return this.query
                ? this.documents.filter(doc => doc.original_name.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1)
                : this.documents;
        },
        count() {
            return this.documents.length;
        },
        uploadLink() {
            return route('core.documents.store');
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('core.documents.index'), {
                params: { documentable_type: this.type, documentable_id: this.id },
            }).then(({ data }) => {
                this.documents = data;
                this.loading = false;
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },
        destroy(index) {
            this.loading = true;

            axios.delete(route(
                'core.documents.destroy',
                this.documents[index].id, false,
            )).then(() => {
                this.loading = false;
                this.documents.splice(index, 1);
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },
    },
};

</script>
