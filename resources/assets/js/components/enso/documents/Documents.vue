<template>

    <div>
        <document v-for="(doc, index) in filteredDocuments"
            :key="index"
            :doc="doc"
            @delete="destroy(index)">
        </document>
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
        uploadLink() {
            return route('core.documents.store', [this.type, this.id]);
        },
        filteredDocuments() {
            return this.query
                ? this.documents.filter(doc => doc.original_name.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1)
                : this.documents;
        },
        count() {
            return this.documents.length;
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(
                route('core.documents.index'),
                { params: { type: this.type, id: this.id } },
            ).then(({ data }) => {
                this.documents = data;
                this.loading = false;
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },
        destroy(index) {
            this.loading = true;

            axios.delete(route('core.documents.destroy', [this.documents[index].id], false)).then(() => {
                this.loading = false;
                this.documents.splice(index, 1);
                index = null;
                this.$emit('update');
            }).catch((error) => {
                this.loading = false;
                index = null;
                this.handleError(error);
            });
        },
    },
};

</script>
