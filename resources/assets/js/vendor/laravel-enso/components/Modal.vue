<template>

	<transition name="modal" v-if="show">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container" :style="{ 'max-width': maxWidth + 'px' }">
					<div class="modal-header" v-if="header">
						<center>
							<h5>
								<slot name="header">
								</slot>
							</h5>
						</center>
					</div>
					<div class="modal-body"
						:style="{ 'max-height': maxHeight ? maxHeight + 'px' : null, 'height' : height ? height + 'px' : null }">
						<slot name="body">
							{{ labels.areYouSure }}
						</slot>
					</div>
					<div class="modal-footer">
						<button type="button"
							class="btn btn-primary"
							@click="cancelAction">
							<slot name="cancel">
								{{ labels.cancel }}
							</slot>
						</button>
						<button type="button"
							class="btn btn-primary button-default"
							@click="commitAction" v-if="!cancelOnly">
							<slot name="ok">
								{{ labels.ok }}
							</slot>
						</button>
					</div>
				</div>
			</div>
		</div>
	</transition>

</template>

<script>

	export default {
		props: {
			show: {
				type: Boolean,
				required: true,
			},
			header: {
				type: Boolean,
				default: false
			},
			commitEvent: {
				type: String,
				default: 'commit-action'
			},
			cancelEvent: {
				type: String,
				default: 'cancel-action'
			},
			height: {
				type: String,
				default: ''
			},
			maxHeight: {
				type: String,
				default: '500'
			},
			maxWidth: {
				type: String,
				default: '250'
			},
			cancelOnly: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				labels: Store.labels
			}
		},

		methods: {
			cancelAction() {
				this.$emit(this.cancelEvent);
			},
			commitAction() {
				this.$emit(this.commitEvent);
			}
		}
	}

</script>

<style>

	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		min-width: 250px;
		margin: 0px auto;
		padding: 5px 5px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
	}

	.modal-header {
		margin-top: 0;
		color: #42b983;
		padding: 5px;
		border-bottom: 1px solid #bbbbbb;
	}

	.modal-body {
		margin: 0;
	    border-bottom: 1px solid #bbbbbb;
	    overflow-y: scroll;
	}

	.modal-footer {
		padding:5px;
	}

	.modal-default-button {
		float: right;
	}

	.modal-enter {
		opacity: 0;
		transition: height 0.3s ease-in-out;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

</style>