<template>

    <div class="level is-mobile">
        <div class="level-left">
            <slot name="left"
                class="level-item"/>
        </div>
        <div class="level-right">
            <slot name="right"
                class="level-item has-text-right"/>
        </div>
    </div>

</template>

<script>

export default {
    name: 'InfoItem',
};

</script>
