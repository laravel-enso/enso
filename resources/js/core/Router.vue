<template>

    <transition mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <router-view class="animated"
            :key="key"/>
    </transition>

</template>

<script>

export default {
    name: 'Router',

    computed: {
        key() {
            return JSON.stringify(this.$route.params);
        },
    },
};

</script>
