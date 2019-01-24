<template>
    <p>
        <a class="author"
            @click="$emit('show-profile')">
            {{ event.author.name }}
        </a>
        <span v-if="event.action.type === 4">
            {{ __(event.message) }}
        </span>
        <span v-else>
            {{ __(event.action.label) }}
        </span>
        <span v-if="event.action.type === 4 && !event.morphable && !event.relation">
            {{ __('on') }} {{ __(event.model) }}
        </span>
        <span v-else-if="event.action.type !== 4">
            {{ __(event.model) }}
        </span>
        <strong>{{ event.label }}</strong>
        <change v-for="(change, index) in event.changes"
            :change="change"
            :index="index"
            :key="index"/>
        <span v-if="event.morphable">
            {{ __('on') }} {{ __(event.morphable.model) }}
            <strong>{{ event.morphable.label }}</strong>
        </span>
        <span v-if="event.relation">
            {{ __('on') }} {{ __(event.relation.model) }}
            <strong>{{ event.relation.label }}</strong>
        </span>
    </p>
</template>

<script>

import Change from './Change.vue';

export default {
    name: 'Message',

    components: { Change },

    props: {
        event: {
            type: Object,
            required: true,
        },
    },
};
</script>
