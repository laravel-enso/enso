<template>

	<div class="navbar-item has-dropdown"
		v-click-outside="hide"
		:class="{ 'is-active': show }">
        <a class="navbar-link"
        	@click="show=!show">
            <span class="icon is-small">
                <i class="fa fa-bell">
                </i>
            </span>
            <sup class="has-text-danger notification-count">{{ unreadCount }}</sup>
            <overlay v-if="loading"></overlay>
        </a>
        <div class="navbar-dropdown is-right notification-list"
        	@scroll="computeScrollPosition($event)"
        	v-if="show">
    		<span v-for="notification in notifications">
        		<a class="navbar-item"
		        	@click="process(notification)">
		        	<div class="navbar-content">
		                <p class="is-notification" :class="{ 'is-bold': !notification.read_at }">
	                        {{ notification.data.body }}
		                </p>
		                <p>
			                <small class="has-text-info">{{ notification.created_at | timeFromNow }}</small>
		                </p>
		        	</div>
		        </a>
        		<hr class="navbar-divider">
    		</span>
    		<a v-if="notifications.length === 0" class="navbar-item">
    			{{ __("You don't have any notifications") }}
    		</a>
	    </div>
    </div>

</template>

<script>

	import { mapGetters } from 'vuex';
	import { mapState } from 'vuex';
	import Overlay from '../../../../components/enso/bulma/Overlay.vue';
	import Echo from "laravel-echo";
	const Pusher = require('pusher-js');

	export default {
		name: 'Notifications',

		components: { Overlay },

		computed: {
			...mapGetters('locale', ['__']),
			...mapState(['user', 'meta']),
		},

		data() {
			return {
				limit: 200,
				notifications: [],
				unreadCount: 0,
				totalCount: 0,
				needsUpdate: true,
				offset: 0,
				loading: false,
				Echo: null,
				show: false
			}
		},

		created() {
			this.init();
			this.getCount();
			this.listen();
		},

		watch: {
			show: {
				handler() {
					if (this.show) {
						this.getList();
					}
				}
			}
		},

		methods: {
			hide() {
                this.show = false;
            },
			getCount() {
				axios.get(route('core.notifications.getCount', [], false)).then(response => {
					this.unreadCount = response.data;
				}).catch(error => {
					this.handleError(error);
				});
			},
			getList() {
				if (!this.needsUpdate || this.loading) {
					return false;
				}

				this.loading = true;

				axios.get(route('core.notifications.getList', [this.offset, this.limit], false)).then(response => {
					this.notifications = this.offset ? this.notifications.concat(response.data) : response.data;
					this.offset = this.notifications.length;
					this.needsUpdate = false;
					this.loading = false;
				}).catch(error => {
					this.loading = false;
					this.handleError(error);
				});
			},
			process(notification) {
				axios.patch(route('core.notifications.markAsRead', notification.id, false).toString()).then(response => {
					this.unreadCount = this.unreadCount > 0 ? --this.unreadCount : this.unreadCount; //fixme
					notification.read_at = response.data.read_at;
					this.$router.push({ path: notification.data.path });
				}).catch(error => {
					this.handleError(error);
				});
			},
			markAllAsRead() {
				axios.patch(route('core.notifications.markAllAsRead', [], false)).then(response => {
					this.setAllAsRead();
				}).catch(error => {
					this.handleError(error);
				});
			},
			setAllAsRead() {
				this.notifications.forEach(notification => {
					notification.read_at = notification.read_at || moment().format('Y-MM-DD H:mm:s');
				}).catch(error => {
					this.handleError(error);
				});

				this.unreadCount = 0;
			},
			clearAll() {
				axios.patch(route('core.notifications.clearAll', [], false)).then(response => {
					this.notifications = [];
					this.unreadCount = 0;
				}).catch(error => {
					this.handleError(error);
				});
			},
			init() {
				this.Echo = new Echo({
				    broadcaster: 'pusher',
				    key: this.meta.pusher,
				    cluster: 'eu',
				    namespace: 'App.Events'
				});
			},
			listen() {
				let self = this;
				this.Echo.private('App.User.' + this.user.id).notification(notification => {
					self.unreadCount++;
					self.needsUpdate = true;
					self.offset = 0;
					toastr.info(this.__('You just got a notification...'))
				});
			},
			computeScrollPosition(event) {
				let a = event.target.scrollTop,
				 	b = event.target.scrollHeight - event.target.clientHeight,
					c = a / b;

				if (c === 1) {
					this.needsUpdate = true;
					this.getList();
				}
			}
		}
	};

</script>

<style>

	sup.notification-count {
		font-size: 0.75em;
		margin-top: -10px;
	}

	div.notification-list {
		width: 300px;
		overflow-x: hidden;
		min-height: 50px;
		max-height: 400px;
		overflow-y: auto;
	}

	p.is-notification {
		white-space: normal;
		width: 268px;
		overflow-x: hidden;
	}

</style>