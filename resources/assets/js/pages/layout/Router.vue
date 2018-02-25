<template>

    <transition mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <router-view class="animated">
        </router-view>
    </transition>

</template>

<script>

export default {
    name: 'Router',
};

</script>
