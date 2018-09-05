<template>
    <div class="tags has-addons">
        <span class="tag is-link">
            {{ label }}
        </span>
        <a class="tag is-delete"
            @click="$emit('remove')"
            v-if="!disabled"/>
    </div>
</template>

<script>
export default {
    name: 'Tag',

    props: {
        label: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
    .tags {
        margin-right: 0.3em;

        &:last-child {
            margin-bottom: 0;
        }

        .tag {
            padding: 0.5em;
            height: 1.4em;
            font-size: 1em;
            margin: 0.05em 0 0.05em;

            &:not(body).is-delete {
                width: 1.4em;
            }
        }
    }

</style>
