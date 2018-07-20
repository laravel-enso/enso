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
        &:last-child {
            margin-bottom: 0;
        }

        &:not(:first-child) {
            margin-left: 0.3em;
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
