<template>

    <draggable :list="menus"
        element="ul"
        class="sortable-menu"
        :options="{ group: { name:'menus' }}">
        <transition-group name="list-complete" style="display:block; min-height:5px">
            <li v-for="menu in menus"
                :key="menu.unique_id"
                class="sortable-menu list-complete-item">
                    <div>{{ menu.name }}</div>
                <reorderable-menu :menus="menu.children">
                </reorderable-menu>
            </li>
        </transition-group>
    </draggable>

</template>

<script>

    export default {
        props: {
            menus: {
                type: Array,
                required: true
            },
        }
    }

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