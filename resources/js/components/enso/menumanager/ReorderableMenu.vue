<template>
    <draggable :list="menus"
        element="ul"
        class="sortable-menu"
        :options="{ group: { name:'menus' }}">
        <transition-group name="list-complete"
            style="display:block; min-height:5px">
            <li class="sortable-menu list-complete-item"
                :key="menu.unique_id"
                v-for="menu in menus">
                    <div>{{ menu.name }}</div>
                <reorderable-menu :menus="menu.children"/>
            </li>
        </transition-group>
    </draggable>
</template>

<script>

import Draggable from 'vue-draggable';

export default {
    name: 'ReorderableMenu',

    components: { Draggable },

    props: {
        menus: {
            type: Array,
            required: true,
        },
    },
};

</script>

<style>

    ul.sortable-menu {
        list-style: none;
    }

    li.sortable-menu div {
        background-color: #4c5f67;
        border-radius: 0px;
        text-align: left;
        border: 1px solid white;
        padding: 10px 25px;
        margin: 0;
        cursor: move;
        color: #fff;
    }

    .list-complete-item {
        transition: all 0.3s;
        min-height: 5px;
    }

    .list-complete-enter, .list-complete-leave-active {
        opacity: 0;
    }

</style>
