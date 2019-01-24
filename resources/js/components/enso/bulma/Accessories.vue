<template>
    <enso-tabs>
        <span slot="label"
            slot-scope="{ tab }">
            {{ __(tab) }}
            <span class="tag is-dark file-counter">
                {{ count[tab.toLowerCase()] }}
            </span>
        </span>
        <slot :count="count"/>
    </enso-tabs>
</template>

<script>

import EnsoTabs from './EnsoTabs.vue';

export default {
    name: 'Accessories',

    components: { EnsoTabs },

    data: () => ({
        count: {},
    }),
};

</script>
