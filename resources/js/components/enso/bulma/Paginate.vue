<template>
    <div>
        <div :class="['pagination pull-right', {'with-border': border}]">
            <div :class="['dropdown', {'is-active': open}]"
                v-if="pages > 1">
                <dropdown class="is-right">
                    <span slot="label">
                        <span class="icon is-small has-margin-right-small">
                            <fa icon="bars"/>
                        </span>
                        {{ pageLength }}
                    </span>
                    <a v-for="option in lengths"
                        :key="option"
                        class="dropdown-item"
                        href="#"
                        :class="{ 'is-active': option == pageLength }"
                        @click="changeLength(option)">
                        {{ option }}
                    </a>
                </dropdown>
            </div>
            <a class="pagination-link">
                <span class="icon is-small has-margin-right-small">
                    <fa icon="eye"/>
                </span>
                {{ start }} -> {{ offset }} / {{ records }}
            </a>
            <a class="pagination-previous"
                @click="previous">
                <span class="icon is-small">
                    <fa icon="angle-left"/>
                </span>
            </a>
            <a class="pagination-link">
                <span class="icon is-small has-margin-right-small">
                    <fa icon="file-alt"/>
                </span>
                 {{ current }} / {{ pages }}
            </a>
            <a class="pagination-next"
                @click="next">
                <span class="icon is-small">
                    <fa icon="angle-right"/>
                </span>
            </a>
        </div>
        <div class="is-clearfix has-margin-bottom-medium"/>
        <slot :list="computedList"/>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars, faAngleDown, faEye, faAngleLeft, faFileAlt, faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown.vue';

library.add([
    faBars, faAngleDown, faEye, faAngleLeft, faFileAlt, faAngleRight,
]);

export default {
    name: 'Paginate',

    components: { Dropdown },

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
            default: () => ([10, 15, 20, 25, 30]),
        },
        border: {
            type: Boolean,
            default: false,
        },
    },

    data: v => ({
        pageLength: v.length,
        open: false,
        current: 1,
    }),

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
};

</script>
