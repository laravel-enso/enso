<template>
    <div :class="['is-divider', placement]"
        :data-title="title"/>
</template>


<script>

export default {
    name: 'Divider',

    props: {
        placement: {
            type: String,
            default: 'center',
            validator: value => ['left', 'center', 'right'].includes(value),
        },
        title: {
            type: String,
            default: null,
        },
    },
};

</script>

<style lang="scss" scoped>

@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables.sass';

    .is-divider {
        border-top: 1px solid $grey-light;
        height: 1px;
        margin: .5rem 0;

        &.left {
            text-align: left;
        }

        &.center {
            text-align: center;
        }

        &.right {
            text-align: right;
        }
    }

    .is-divider[data-title]::after {
        background: $light;
        color: $grey-dark;
        content: attr(data-title);
        display: inline-block;
        font-size: 1rem;
        -webkit-transform: translateY(-0.9rem);
        -ms-transform: translateY(-0.9rem);
        transform: translateY(-0.9rem);
        padding: 0 .5rem;
    }

</style>
