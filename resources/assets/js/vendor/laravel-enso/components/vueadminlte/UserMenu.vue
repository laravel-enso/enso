<template>

	<li class="dropdown user user-menu">
        <a href="#"
        	class="dropdown-toggle"
            data-toggle="dropdown">
            <img :src="'/core/avatars/' + store.user.avatarId"
                class="user-image user-avatar"
                alt="User Image">
            <span class="hidden-xs">
                {{ store.user.first_name }}
            </span>
        </a>
        <ul class="dropdown-menu">
            <li class="user-header">
                <img :src="'/core/avatars/' + store.user.avatarId"
                    class="img-square user-avatar"
                    alt="User Image">
                <p>
                    {{ store.user.first_name }}
                    <small>
                        {{ store.user.role.name }}
                    </small>
                </p>
                <div class="pull-left">
                    <a :href="'/administration/users/' + store.user.id"
                        id="profile-button"
                        class="btn btn-sm btn-default">
                        {{ store.labels.profile }}
                    </a>
                </div>
                <div class="pull-right">
                    <a href="#"
                      class="btn btn-sm btn-default" id="logout-button"
                      @click="logout()">
                      {{ store.labels.logout }}
                    </a>
                    <form id="logout-form"
                    	action="/logout"
                    	method="POST">
	                    <input name="_token"
	                    	type="hidden"
	                    	:value="csrfToken">
				    </form>
                </div>
            </li>
        </ul>
    </li>

</template>

<script>

	export default {

		data() {
			return {
				store: Store,
				csrfToken: Laravel.csrfToken
			}
		},

		methods: {
			logout() {
				document.getElementById('logout-form').submit();
			}
		}
	}

</script>

<style>

	.navbar-nav > .user-menu > .dropdown-menu > li.user-header {
		height: 206px;
	}

	form#logout-form {
		display: none;
	}

	.navbar-nav > .user-menu > .dropdown-menu > .user-footer {
		background-color: #605ca8;
	}

	#logout-button {
		background: #ff6347;
		color: #fff;
	}

	#profile-button {
		background: #3097d1;
		color: #fff;
	}

	.navbar-nav > .user-menu > .dropdown-menu,
	.navbar-nav > .user-menu > .dropdown-menu > .user-body {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		border: 1px solid grey;
		padding: 0;
	}

</style>