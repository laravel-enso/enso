<template>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>
                        {{ meta.appName }} {{ meta.version }}
                    </strong>
                    built with
                    <span class="icon has-text-danger">
                        <i class="fa fa-heart"></i>
                    </span> + <a href="https://bulma.io" target="_blank">Bulma</a> + <a href="https://www.vuejs.org" target="_blank">VueJs</a> + <a href="https://www.laravel.com" target="_blank">Laravel</a>
                </p>
                <p>
                    <a class="icon" href="https://github.com/laravel-enso/enso" target="_blank">
                        <i class="fa fa-github">
                        </i>
                    </a>
                </p>
            </div>
        </div>
    </footer>

</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'AppFooter',

    computed: {
        ...mapState(['meta']),
    },
};

</script>

<style>

    .footer {
        margin-left: 180px;
        z-index: 1;
    }

    @media screen and (max-width: 1007px) {
        .footer {
            margin-left: 0;
        }
    }

</style>
