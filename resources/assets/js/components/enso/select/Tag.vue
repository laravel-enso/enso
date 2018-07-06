<template>
    <span class="tag is-link">
        {{ label }}
        <a class="delete is-small"
            @click="$emit('remove')"/>
    </span>
</template>

<script>
export default {
    name: 'Tag',

    props: {
        label: {
            type: String,
            default: null,
        },
    },
};
</script>

<style lang="scss" scoped>
    .tag {
        padding: 0.5rem;
        height: 1.4rem;
        font-size: 1rem;
        margin: 0.05rem 0.1rem 0.05rem;

        .delete {
            margin-left: 0.2rem;
        }

        &:last {
            margin-right:auto;
        }
    }
</style>
