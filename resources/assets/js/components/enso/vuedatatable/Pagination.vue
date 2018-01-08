<template>

    <nav class="table-pagination pagination is-small"
        role="navigation"
        aria-label="pagination">
        <a class="pagination-previous"
            :disabled="page === 1"
            @click="jumpTo(page - 1)">
            {{ i18n('Previous') }}
        </a>
        <a class="pagination-next"
            :disabled="page === pages"
            @click="jumpTo(page + 1)">
            {{ i18n('Next') }}
        </a>
        <ul class="pagination-list">
            <li>
                <a class="pagination-link"
                    :class="{ 'is-current': page === 1 }"
                    @click="jumpTo(1)">
                    1
                </a>
            </li>
            <li v-if="pages > 5 && !atStart">
                <span class="pagination-ellipsis">
                    &hellip;
                </span>
            </li>
            <li v-for="i in middlePages"
                :key="i">
                <a class="pagination-link"
                    :class="{ 'is-current': page === i }"
                    @click="jumpTo(i)">
                    {{ i }}
                </a>
            </li>
            <li v-if="pages > 5 && !atEnd">
                <span class="pagination-ellipsis">
                    &hellip;
                </span>
            </li>
            <li v-if="pages > 1">
                <a class="pagination-link"
                    :class="{ 'is-current': page === pages }"
                    @click="jumpTo(pages)">
                    {{ pages }}
                </a>
            </li>
        </ul>
    </nav>

</template>

<script>

export default {
    name: 'Pagination',

    props: {
        records: {
            type: Number,
            required: true,
        },
        start: {
            type: Number,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },

    computed: {
        page() {
            return (this.start / this.length) + 1;
        },
        pages() {
            return Math.ceil(this.records / this.length);
        },
        atStart() {
            return this.page < 4;
        },
        atEnd() {
            return this.pages - this.page < 3;
        },
        middlePages() {
            const pages = [];

            if (this.atStart) {
                const max = Math.min(this.pages - 1, 4);
                for (let i = 2; i <= max; i++) {
                    pages.push(i);
                }

                return pages;
            }

            if (this.atEnd) {
                pages.push(this.pages - 3, this.pages - 2, this.pages - 1);
                return pages;
            }

            pages.push(this.page - 1, this.page, this.page + 1);

            return pages;
        },
    },

    methods: {
        jumpTo(page) {
            if (page === this.page || page < 1 || page > this.pages) {
                return;
            }

            this.$emit('jump-to', (page - 1) * this.length);
        },
    },
};

</script>

<style>

    nav.table-navigation {
        max-width: 425px;
    }

</style>
