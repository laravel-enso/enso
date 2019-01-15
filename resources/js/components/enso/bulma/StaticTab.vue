<template>
    <div class="animated fadeIn"
        v-if="active">
        <slot/>
    </div>

</template>

<script>

export default {
    name: 'StaticTab',

    props: {
        active: {
            type: Boolean,
            default: false,
        },
    },
};

</script>
