<template>
    <span class="tag is-primary">
        {{ label }}
        <a class="delete is-small"
            @click="$emit('remove')">
        </a>
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
        padding: 0.2rem;
        height: 1.3rem;
        font-size: 1rem;
        margin: 0.1rem 0.2rem 0.1rem 0;

        .delete {
            margin-left: 0.2rem;
        }

        &:last {
            margin-right:auto;
        }
    }
</style>
