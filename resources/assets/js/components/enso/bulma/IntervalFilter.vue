<template>

    <div class="interval-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control has-icons-right">
                    <input class="input control"
                        :type="type"
                        placeholder="Min"
                        :value="min"
                        @input="$emit('update-min', $event.target.value || null)">
                    <span class="clear"
                        v-if="min"
                        @click="$emit('update-min', null)">
                    </span>
                </div>
            </div>
            <div class="column">
                <div class="control has-icons-right">
                    <input class="input control"
                        :type="type"
                        placeholder="Max"
                        :value="max"
                        @input="$emit('update-max', $event.target.value || null)">
                    <span class="clear"
                        v-if="max"
                        @click="$emit('update-max', null)">
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'IntervalFilter',

    props: {
        title: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            required: true,
        },
        min: {
            required: true,
        },
        max: {
            required: true,
        },
    },
};

</script>

<style lang="scss" scoped>

    .interval-filter {
        padding: 0.5rem;
    }

    .clear {
        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }

        position: absolute;
        top: 7px;
        right: 10px;
        height: 22px;
        width: 22px;
        display: block;
        cursor: pointer;
        z-index: 1;
    }

    .clear:after, .clear:before {
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        height: 16px;
        background: #aaa;
        top: 3px;
        right: 10px;
    }

</style>
