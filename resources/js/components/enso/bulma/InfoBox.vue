<template>

    <div class="box">
        <div class="has-margin-bottom-medium has-text-centered"
            v-if="title">
            <span class="subtitle is-5">
                <slot name="title"/>
            </span>
        </div>
        <hr v-if="title">
        <slot/>
    </div>

</template>

<script>

export default {
    name: 'InfoBox',

    props: {
        title: {
            type: Boolean,
            default: false,
        },
    },
};

</script>

<style lang="scss" scoped>

@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables.sass';

.box {
    border-top: 2px solid $light;
    transition: border-color .75s ease, box-shadow 0.3s ease-in-out;;
    position: relative;

    &.is-info {
        border-color: $info;
    }

    &.is-warning {
        border-color: $warning;
    }

    &.is-success {
        border-color: $success;
    }

    &.is-danger {
        border-color: $danger;
    }

    &.is-primary {
        border-color: $primary;
    }
}

</style>
