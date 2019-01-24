<template>
    <a class="navbar-item settings"
        @click="$store.commit('layout/settingsBar/toggle')">
        <span class="icon">
            <fa icon="cogs"/>
        </span>
    </a>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

library.add(faCogs);

export default {
    name: 'SettingsControl',
};

</script>
