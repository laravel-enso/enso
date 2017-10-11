<template>

    <nav class="navbar" id="app-navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <figure class="image is-24x24">
                    <img src="/images/logo.svg"></img>
                </figure>
                <h4 class="title is-4 has-margin-left-large">
                    {{ meta.appName }}
                </h4>
            </a>
            <a class="navbar-item is-hidden-desktop"
                @click="$store.commit('layout/navbar/toggle')">
                <span class="icon is-small">
                    <i class="fa fa-bars"></i>
                </span>
            </a>
            <div class="navbar-item"
                v-if="envIsLocal">
                <span class="tag is-warning is-bold">Local</span>
            </div>
            <div class="navbar-item"
                v-if="$store.state.impersonating">
                <button class="button is-small is-warning"
                    @click="$bus.$emit('stop-impersonating')">
                    Stop Impersonating
                </button>
            </div>
            <a class="navbar-item is-hidden-desktop right-side"
                @click="$store.commit('layout/settingsBar/toggle')">
                <span class="icon is-small">
                    <i class="fa fa-gears">
                    </i>
                </span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <notifications></notifications>
                <a class="navbar-item"
                    @click="goToProfile()">
                    <img :src="$store.getters.avatarLink">
                        <span class="has-margin-left-small">
                            {{ $store.state.user.first_name }}
                        </span>
                    </img>
                </a>
                <a class="navbar-item"
                    @click="$store.commit('layout/settingsBar/toggle')">
                    <span class="icon is-small">
                        <i class="fa fa-gears">
                        </i>
                    </span>
                </a>
            </div>
        </div>
    </nav>

</template>

<script>

    import Notifications from './navbar/Notifications.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'Navbar',

        components: { Notifications },

		props: {
			envIsLocal: {
				type: Boolean,
				default: false
			}
		},

        computed: {
            ...mapState(['meta', 'user'])
        },

		methods: {
            goToProfile() {
                this.$router.push({ name: 'administration.users.show', params: {id: this.user.id} });
            }
        }
	};

</script>

<style>

    .navbar {
        position: fixed;
        min-width: 100%;
        top: 0px;
        -webkit-box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        z-index: 1050;
    }

    .navbar-item.right-side {
        margin-left: auto;
    }

</style>