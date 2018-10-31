<template>

    <h5 class="title is-5"
        v-if="data.icon || data.title">
        <span class="icon"
            v-if="data.icon">
            <fa :icon="data.icon"/>
        </span>
        <span v-if="data.title">
            {{ i18n(data.title) }}
        </span>
    </h5>

</template>

<script>
export default {
    name: 'FormHeader',

    props: {
        data: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>

    .title {
        .icon {
            vertical-align: text-bottom;
        }
    }

</style>
