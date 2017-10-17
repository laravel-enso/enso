<template>

	<div class="container" v-if="initialised">

    	<div class="box profile-heading">
      		<div class="columns is-multiline">
       			<div class="column is-half-desktop">
       				<div class="columns is-mobile">
       					<div class="column is-narrow">
       						<div class="image is-128x128">
								<img :src="avatarLink">
							</div>
       					</div>
       					<div class="column">
       						<div class="level">
       							<div class="level-item has-padding-top-small">
       								<div>
			       						<p class="title is-3">{{ profileUser.fullName }}</p>
					          			<p>{{ __('role') }}: {{ profileUser.role.name }}</p>
					          			<p>{{ __('since') }}: {{ profileUser.created_at }}</p>
					          			<p class="has-margin-top-small">
					          				<div class="level user-controls"
					          					v-if="isSelfVisiting">
					          					<div class="level-left">
					          						<button class="button is-small is-warning"
								          				v-if="avatarId"
								          				@click="deleteAvatar">
								          				<span class="icon">
														    <i class="fa fa-trash-o"></i>
													    </span>
													    <span>
									          				{{ __('Avatar') }}
								          				</span>
								          			</button>
								          			<file-uploader v-if="!avatarId"
														@upload-successful="$store.commit('setUserAvatar', $event.id)"
														:url="uploadAvatarLink">
														<template slot="upload-button"
															slot-scope="props">
															<button  class="button is-small is-info"
																@click="props.openFileBrowser">
																<span class="icon">
																	<i class="fa fa-upload"></i>
																</span>
																<span>
																	{{ __('Avatar') }}
																</span>
										          			</button>
									          			</template>
													</file-uploader>
					          					</div>
					          					<div class="level-right">
					          						<button class="button is-small is-danger"
								          				@click="logout()">
								          				<span class="icon">
								          					<i class="fa fa-sign-out"></i>
								          				</span>
								          				<span>
									          				{{ __('Log Out') }}
									          			</span>
								          			</button>
					          					</div>
					          				</div>
					          				<div v-else>
					          					<button class="button is-small is-warning"
					          						@click="$bus.$emit('start-impersonating', profileUser.id)"
					          						v-if="!$store.state.impersonating">
							          				{{ __('Impersonate') }}
							          			</button>
					          				</div>
					          			</p>
				          			</div>
		          				</div>
		          			</div>
       					</div>
       				</div>
        		</div>
        		<div class="column is-half-desktop">
        			<div class="columns is-mobile">
	          			<div class="column has-text-centered">
				          <p class="stat-value">{{ profileUser.loginCount }}</p>
				          <p class="stat-key">{{ __('logins') }}</p>
				        </div>
				        <div class="column has-text-centered has-lateral-borders">
				          <p class="stat-value">{{ profileUser.actionLogCount }}</p>
				          <p class="stat-key">{{ __('actions') }}</p>
				        </div>
				        <div class="column has-text-centered">
				          <p class="stat-value">{{ profileUser.rating }}</p>
				          <p class="stat-key">{{ __('rating') }}</p>
				        </div>
				    </div>
          		</div>
	        </div>
      	</div>

      	<div class="columns is-centered">
      		<div class="column is-two-thirds-tablet">
      			<div class="box">
      				<nav class="pagination is-small has-margin-bottom-large" role="navigation" aria-label="pagination">
					  	<a class="pagination-previous"
					  		@click="getPage(profileUser.timeline.current_page - 1)"
					  		:disabled="profileUser.timeline.prev_page_url===null">
					  		{{ __('Previous') }}
					  	</a>
					  	<a class="pagination-next"
					  		@click="getPage(profileUser.timeline.current_page + 1)"
					  		:disabled="profileUser.timeline.next_page_url===null">
					  		{{ __('Next') }}
					  	</a>
					  	<ul class="pagination-list" v-if="isShort">
					  		<li v-for="i in profileUser.timeline.last_page">
						    	<a class="pagination-link"
						    		:class="{ 'is-current': profileUser.timeline.current_page === i}"
						    		@click="getPage(i)">
						    		{{ i }}
						    	</a>
						    </li>
					  	</ul>
					  	<ul class="pagination-list" v-if="isAtStart && !isShort">
						    <li v-for="i in 3">
						    	<a class="pagination-link"
						    		:class="{ 'is-current': profileUser.timeline.current_page === i}"
						    		@click="getPage(i)">
						    		{{ i }}
						    	</a>
						    </li>
						    <li><span class="pagination-ellipsis">&hellip;</span></li>
						    <li>
						    	<a class="pagination-link"
						    		@click="getPage(profileUser.timeline.last_page)">
						    		{{ profileUser.timeline.last_page }}
						    	</a>
						    </li>
					  	</ul>
					  	<ul class="pagination-list" v-if="hasMiddle && !isShort">
						    <li>
						    	<a class="pagination-link"
						    		@click="getPage(1)">
						    		1
						    	</a>
						    </li>
						    <li><span class="pagination-ellipsis">&hellip;</span></li>
						    <li>
						    	<a class="pagination-link"
						    		@click="getPage(profileUser.timeline.current_page - 1)">
						    		{{ profileUser.timeline.current_page - 1 }}
						    	</a>
						    </li>
						    <li>
						    	<a class="pagination-link is-current">
						    		{{ profileUser.timeline.current_page }}
						    	</a>
						    </li>
						    <li>
						    	<a class="pagination-link"
						    		@click="getPage(profileUser.timeline.current_page + 1)">
						    		{{ profileUser.timeline.current_page + 1 }}
						    	</a>
						    </li>
						    <li><span class="pagination-ellipsis">&hellip;</span></li>
						    <li>
						    	<a class="pagination-link"
						    		@click="getPage(profileUser.timeline.last_page)">
						    		{{ profileUser.timeline.last_page }}
						    	</a>
						    </li>
					  	</ul>
					  	<ul class="pagination-list" v-if="isAtEnd && !isShort">
					  		<li>
						    	<a class="pagination-link"
						    		@click="getPage(1)">
						    		1
						    	</a>
						    </li>
						    <li><span class="pagination-ellipsis">&hellip;</span></li>
						    <li v-for="i in 3">
						    	<a class="pagination-link"
						    		:class="{ 'is-current': profileUser.timeline.current_page === profileUser.timeline.last_page - 3 + i}"
						    		@click="getPage(profileUser.timeline.last_page - 3 + i)">
						    		{{ profileUser.timeline.last_page - 3 + i }}
						    	</a>
						    </li>
					  	</ul>
					</nav>
	      			<ul class="timeline">
		      			<div v-for="(actions, day) in timeline"
		      				class="timeline-content">
						  	<li class="timeline-header">
						    	<span class="tag is-medium is-primary">{{ __(day) }}</span>
						  	</li>
						  	<!-- <li class="timeline-item">
						    	<div class="timeline-marker"></div>
						    	<div class="timeline-content">
						      		<p class="heading">January 2016</p>
						      		<p>Timeline content - Can include any HTML element</p>
						    	</div>
						  	</li> -->
							<li class="timeline-item" v-for="action in actions">
							    <div class="timeline-marker is-icon">
							      	<i :class="getIcon(action.route)"></i>
							    </div>
							    <div class="timeline-content">
							      	<p class="heading">{{ getHRDate(action.created_at) }} {{ getHRTime(action.created_at) }}</p>
							      	<p>{{ action.permission.description }}</p>
							    </div>
							</li>
						</div>
						<li class="timeline-header"
							v-if="profileUser.timeline.current_page === profileUser.timeline.last_page">
						    <span class="tag is-medium is-primary">{{ __('End') }}</span>
						</li>
						<li class="timeline-item"
							v-else>
						    <div class="timeline-marker is-icon">
						    	<i class="fa fa-fw fa-ellipsis-h"></i>
						    </div>
						</li>
					</ul>
				</div>
      		</div>
      	</div>

	</div>

</template>

<script>
	import FileUploader from '../../../../components/enso/fileuploader/FileUploader.vue';
	import { mapGetters } from 'vuex';
	import { mapState } from 'vuex';
	import Cookie from 'js-cookie';

	export default {
		components: { FileUploader },

		computed: {
			...mapGetters('locale', {
				__: '__',
				locale: 'current'
			}),
			...mapState(['user', 'meta']),
			uploadAvatarLink() {
				return route('core.avatars.store', [], false)
			},
			isSelfVisiting() {
				return this.user.id === this.profileUser.id;
			},
	    	avatarId() {
	    		return this.isSelfVisiting ? this.user.avatarId : this.profileUser.avatarId;
	    	},
	    	avatarLink() {
	    		return route('core.avatars.show', (this.avatarId || 'null'), false);
	    	},
	    	timeline() {
	    		let self = this;

	    		return this.profileUser.timeline.data.pluck('created_at').reduce((days, record) => {
	    			days.push(this.getDay(record));
	    			return days;
	    		}, []).filter((value, index, self) => self.indexOf(value) === index).reduce((timeline, day) => {
	    			timeline[day] = self.profileUser.timeline.data.filter(record => self.getDay(record.created_at) === day);
	    			return timeline;
	    		}, {});
	    	},
	    	isShort() {
	    		return this.profileUser.timeline.last_page <= 5;
	    	},
	    	isAtStart() {
	    		return this.profileUser.timeline.current_page <= 2;
	    	},
	    	isAtEnd() {
	    		return this.profileUser.timeline.last_page - this.profileUser.timeline.current_page <= 2;
	    	},
	    	hasMiddle() {
	        	return !this.isAtStart && !this.isAtEnd
	        },
	        paginationUrl() {
	        	return '/api/administration/users/' + this.profileUser.id + '?page=';
	        }
	    },

		data() {
			return {
				initialised: false,
				profileUser: {}
			}
		},

		watch: {
			locale: {
				handler() {
					this.getPage(this.profileUser.timeline.current_page);
				}
			}
		},

		methods: {
			deleteAvatar() {
	            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(() => {
	                this.$store.commit('setUserAvatar', null);
	            }).catch(error => {
					this.handleError(error);
				});
	        },
	        logout() {
	        	axios.post(route('logout', [], false).toString()).then(() => {
		            this.$store.dispatch('auth/logout');
	        	}).catch(error => {
					this.handleError(error);
				});
	        },
	        getDay(timestamp) {
	        	return moment(timestamp).calendar().split(' ')[0];
	        },
	        getHRDate(timestamp) {
	        	return moment(timestamp).format(this.meta.dateFormat);
	        },
	        getHRTime(timestamp) {
	        	return moment(timestamp).format('H:mm');
	        },
	        getIcon(action) {
	        	if (action.indexOf('index') > 0) return 'fa fa-eye has-text-success';
	        	if (action.indexOf('create') > 0) return 'fa fa-plus has-text-warning';
	        	if (action.indexOf('edit') > 0) return 'fa fa-pencil has-text-warning';
	        	return 'fa fa-trash-o has-text-danger';
	        },
	        getPage(page) {
	        	axios.get(this.paginationUrl + page).then(response => {
					this.profileUser = response.data.user;
				}).catch(error => {
					this.handleError(error);
				});
	        }
		},

		mounted() {
			axios.get(route(this.$route.name, this.$route.params.id, false)).then(response => {
				this.profileUser = response.data.user;
				this.initialised = true;
			}).catch(error => {
				this.handleError(error);
			});
		}
	};

</script>

<style>

	.has-lateral-borders {
	    border-left: 1px solid rgba(0,0,0,0.2);
	    border-right: 1px solid rgba(0,0,0,0.2);
	}

	.stat-value {
		font-size: 3em;
		padding-top: 12px;
	}

	.stat-key {
		font-size: 1.4em;
		font-weight: 200;
		padding-bottom: 8px;
	}

	.level.user-controls {
		margin-bottom: 0;
	}

	.timeline-content {
		transition:all 1s ease;
	}

</style>