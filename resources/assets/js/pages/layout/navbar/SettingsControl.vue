<template>
    <a class="navbar-item"
        @click="$store.commit('layout/settingsBar/toggle')">
        <span class="icon is-small">
            <i class="fa fa-gears">
            </i>
        </span>
    </a>
</template>
