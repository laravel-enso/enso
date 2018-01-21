<template>
    <a class="navbar-item"
        @click="$store.commit('layout/settingsBar/toggle')">
        <span class="icon is-small">
            <i class="fas fa-cogs">
            </i>
        </span>
    </a>
</template>
