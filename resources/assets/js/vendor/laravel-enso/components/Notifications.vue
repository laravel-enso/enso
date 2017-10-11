<template>

	<li id="notifications" class="dropdown notifications-menu">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown"
			@click="getList()">
			<i class="fa fa-bell-o"></i>
			<span class="label label-danger"
				v-if="unreadCount"
				v-text="unreadCount">
			</span>
		</a>
		<ul class="dropdown-menu" v-cloak>
			<li class="header">
				<span v-if="unreadCount">
					{{ labels.youHave }}
					<b>{{ unreadCount }}</b>
					<span v-if="unreadCount == 1">
						{{ labels.one }}
					</span>
					<span v-else>
						{{ labels.many }}
					</span>
				</span>
				<span v-else>
					{{ labels.noNotifications }}
				</span>
				<span class="pull-right" v-if="loading">
					<i class="fa fa-spinner fa-spin text-orange"></i>
				</span>
			</li>
			<li>
				<ul class="menu" id="notifications-body" @scroll="computeScrollPosition($event)">
					<li v-for="notification in notifications">
						<a href="#" @click.up="process(notification)">
							<i class="fa fa-envelope-open-o text-green"
								v-if="notification.read_at">
							</i>
							<i class="fa fa-envelope-o text-orange"
								v-else>
							</i>
							<span :class="{ 'bold' : !notification.read_at }">
								{{ notification.data.body }}
							</span>
						</a>
					</li>
				</ul>
			</li>
			<li class="footer" v-if="unreadCount || notifications.length">
				<a href="#">
					<a href="#" class="pull-left"
						@click="markAllAsRead()">
						{{ labels.markAllAsRead }}
					</a>
				  	<a href="#" class="pull-right"
				  		@click="clearAll()">
				  		{{ labels.clearAll }}
				  	</a>
				  	<div class="clearfix"></div>
				</a>
			</li>
		</ul>
	</li>

</template>

<script>

	export default {
		props: {
			userId: {
				type: Number,
				required: true
			},
			paginate: {
				type: Number,
				default: 6
			}
		},

		data() {
			return {
				labels: Store.labels,
				unreadCount: 0,
				totalCount: 0,
				notifications: [],
				needsUpdate: true,
				offset: 0,
				loading: false
			}
		},

		methods: {
			getCount() {
				axios.get('/core/notifications/getCount').then(response => {
					this.unreadCount = response.data;
				}).catch(error => {
					this.reportEnsoException(error);
				});
			},
			getList() {
				if (!this.needsUpdate || this.loading) {
					return false;
				}

				this.loading = true;

				axios.get('/core/notifications/getList/' + this.offset + '/' + this.paginate).then(response => {
					this.notifications = this.offset ? this.notifications.concat(response.data) : response.data;
					this.offset = this.notifications.length;
					this.needsUpdate = false;
					this.loading = false;
				}).catch(error => {
					this.loading = false;
					this.reportEnsoException(error);
				});
			},
			getMore() {
				this.needsUpdate = true;
				this.getList();
				$('#notifications').addClass('open');
			},
			process(notification) {
				axios.patch('/core/notifications/markAsRead/' + notification.id).then(response => {
					this.unreadCount = this.unreadCount ? --this.unreadCount : this.unreadCount;
					window.location.href = notification.data.link;
					notification = response.data; // fixme
				}).catch(error => {
					this.reportEnsoException(error);
				});
			},
			markAllAsRead() {
				axios.patch('/core/notifications/markAllAsRead').then(response => {
					this.setAllAsRead();
				}).catch(error => {
					this.reportEnsoException(error);
				});
			},
			setAllAsRead() {
				this.notifications.forEach(notification => {
					notification.read_at = notification.read_at || moment().format('Y-MM-DD H:mm:s');
				});

				this.unreadCount = 0;
			},
			clearAll() {
				axios.patch('/core/notifications/clearAll').then(response => {
					this.notifications = [];
					this.unreadCount = 0;
				}).catch(error => {
					this.reportEnsoException(error);
				});
			},
			listen() {
				let self = this;

				Echo.private('App.User.' + this.userId).notification(function(notification) {
					self.unreadCount++;
					self.needsUpdate = true;
					self.offset = 0;
				});

				this.geListIfBodyIsOpen();
			},
			geListIfBodyIsOpen() {
				if ($('#notifications').hasClass('open')) {
					self.getList();
					document.getElementById('notifications-body').scrollTop = 0;
				}
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
		},

		mounted() {
			this.getCount();
			this.listen();
		}
	}

</script>

<style>

	li#notifications.notifications-menu >.dropdown-menu>li.header {
		font-size: 13px;
	}

	li#notifications > ul.dropdown-menu {
		font-size: 12px;
	}

	.navbar-custom-menu > .navbar-nav > li > .dropdown-menu {
		width: 300px;
	}

</style>