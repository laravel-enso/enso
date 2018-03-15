<template>
    <a class="navbar-item settings"
        @click="$store.commit('layout/settingsBar/toggle')">
        <span class="icon is-small">
            <fa icon="cogs"></fa>
        </span>
    </a>
</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faCogs } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faCogs);

export default {
    name: 'SettingsControl',
};

</script>

