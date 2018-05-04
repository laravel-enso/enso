<template>

    <article class="message">
        <div class="message-header"
            v-if="log">
            <p>{{ __("The log file") }}
                <code>{{ log.name }}</code>
                {{ __("was last updated") }}
                {{ log.modified ? timeFromNow(log.modified.date) : null }}.
                {{ __("Current file size is") }} {{ log.size }} {{ __("MB") }}
            </p>
            <button class="delete"
                @click="$router.push({ name: 'system.logs.index' })"/>
        </div>
        <div class="message-body"
            v-if="log">
            <pre v-hljs>
                <code class="php">
{{ log.content || __('The log file is empty') }}
                </code>
            </pre>
        </div>
    </article>

</template>

<script>

import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';
import '../../../modules/enso/directives/hljs';

export default {
    data() {
        return {
            log: null,
            content: null,
        };
    },

    created() {
        axios.get(route('system.logs.show', this.$route.params.id))
            .then(({ data }) => {
                this.log = data.log;
            }).catch(error => this.handleError(error));
    },

    methods: {
        timeFromNow(date) {
            return formatDistance(date);
        },
    },
};

</script>

<style src="highlight.js/styles/atom-one-light.css"></style>
