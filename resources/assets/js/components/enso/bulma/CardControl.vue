<template>

    <a class="card-header-icon"
        v-on="$listeners">
        <slot/>
    </a>

</template>

<script>

export default {
    name: 'CardControl',
};

</script>
