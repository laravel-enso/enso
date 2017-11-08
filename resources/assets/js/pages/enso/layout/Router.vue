<template>

    <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <router-view :key="$route.fullPath"
            :class="{ 'animated': !$route.meta.notAnimated }"
            v-bind="$attrs"
            v-on="$listeners">
        </router-view>
    </transition>

</template>

<script>

export default {
    name: 'Router',
};

</script>
