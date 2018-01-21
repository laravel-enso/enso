<template>

    <div>
        <div class="pagination is-small pull-right"
            :class="{'with-border': border}">
            <div class="dropdown"
                :class="{'is-active': open}">
                <div class="dropdown-trigger">
                    <a class="pagination-link"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        @click="open=!open">
                        <span class="icon is-small has-margin-right-small">
                            <i class="fas fa-bars"></i>
                        </span>
                        {{ pageLength }}
                        <span class="icon is-small angle"
                            :aria-hidden="!open">
                            <i class="fas fa-angle-down"></i>
                        </span>
                    </a>
                </div>
                <div class="dropdown-menu paginate" role="menu">
                    <div class="dropdown-content has-text-centered">
                        <a v-for="(length, index) in lengths"
                            :key="index"
                            class="dropdown-item"
                            href="#"
                            :class="{ 'is-active': length == pageLength }"
                            @click="changeLength(length)">
                            {{ length }}
                        </a>
                    </div>
                </div>
            </div>
            <a class="pagination-link">
                <span class="icon is-small has-margin-right-small">
                    <i class="fas fa-eye"></i>
                </span>
                {{ start }} -> {{ offset }} / {{ records }}
            </a>
            <a class="pagination-previous"
                @click="previous">
                <span class="icon is-small">
                    <i class="fas fa-angle-left"></i>
                </span>
            </a>
            <a class="pagination-link">
                <span class="icon is-small has-margin-right-small">
                    <i class="fas fa-file-alt"></i>
                </span>
                 {{ current }} / {{ pages }}
            </a>
            <a class="pagination-next"
                @click="next">
                <span class="icon is-small">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
        <div class="is-clearfix has-margin-bottom-medium"></div>
        <slot :list="computedList">
        </slot>
    </div>

</template>

<script>

export default {
    props: {
        list: {
            type: Array,
            required: true,
        },
        length: {
            type: Number,
            default: 10,
        },
        lengths: {
            type: Array,
            default() {
                return [10, 15, 20, 25, 30];
            },
        },
        border: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        computedList() {
            return this.list.filter((el, index) => index >= this.start - 1
                && index < this.current * this.pageLength);
        },
        pages() {
            return Math.ceil(this.records / this.pageLength);
        },
        records() {
            return this.list.length;
        },
        start() {
            return (this.current - 1) * this.pageLength + 1;
        },
        offset() {
            return this.start + this.computedList.length - 1;
        },
    },

    watch: {
        pageLength() {
            if (this.current > this.pages) {
                this.current = this.pages;
            }
        },
    },

    data() {
        return {
            pageLength: this.length,
            open: false,
            current: 1,
        };
    },
    methods: {
        next() {
            if (this.current < this.pages) {
                this.current++;
            }
        },
        previous() {
            if (this.current > 1) {
                this.current--;
            }
        },
        changeLength(newLength) {
            this.current = Math.ceil(this.start / newLength);
            this.pageLength = newLength;
            this.open = false;
        },
    },

    mounted() {},
};

</script>

<style>

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

    .dropdown-menu.paginate {
        min-width: 50px;
        width: 65px;
        left: 5px;
    }

    .dropdown-menu.paginate > .dropdown-content > a {
        padding: 0;
    }

</style>
