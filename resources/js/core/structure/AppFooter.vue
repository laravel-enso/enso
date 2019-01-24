<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="level">
                <span class="level-item">
                    <strong class="has-margin-right-small">
                        {{ meta.appName }} v{{ meta.version }}
                    </strong>built with
                    <span class="icon has-text-danger has-margin-left-small has-margin-right-small">
                        <fa icon="heart"/>
                    </span>+
                    <a href="https://bulma.io"
                        class="has-margin-left-small has-margin-right-small"
                        target="_blank">
                        <img src="/images/bulma.svg"
                            alt="Made with Bulma"
                            width="28"
                            height="28">
                    </a>+
                    <a href="https://laravel.com"
                        class="has-margin-left-small has-margin-right-small"
                        target="_blank">
                        <img src="/images/laravel-badge.png"
                            alt="Made with Laravel"
                            width="28"
                            height="28">
                    </a>+
                    <a href="https://vuejs.org"
                        target="_blank">
                        <img src="/images/vue-badge.png"
                            alt="Made with Vue"
                            width="28"
                            height="28">
                    </a>
                </span>
            </p>
            <p class="level">
                <span class="level-item">
                    <strong>Backed by:</strong>
                    <a href="https://earthlink.ro"
                        target="_blank">
                        <figure class="image earthlink">
                            <img src="/images/earthlink.svg">
                        </figure>
                    </a>
                </span>
            </p>
            <p>
                <a href="https://github.com/laravel-enso/enso"
                    target="_blank">
                    <span class="icon">
                        <fa :icon="['fab', 'github']"/>
                    </span>
                </a>
            </p>
        </div>
    </footer>
</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faHeart, faGithub);

export default {
    name: 'AppFooter',

    computed: {
        ...mapState(['meta']),
    },
};

</script>

<style lang="scss">

    .footer {
        margin-left: 180px;
        background: inherit;

        figure.image.earthlink {
            width: 112px;
            margin-left: 1em;
            margin-right: 1em;
        }
    }

    @media screen and (max-width: 1023px) {
        .footer {
            margin-left: 0;
        }
    }

</style>
