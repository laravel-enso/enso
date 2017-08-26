<template>

	<div>
		<div class="btn-group paginate pull-right"
			:class="{'with-border': border}">
			<div class="btn-group paginate"
				:class="{'open': open}">
				<button class="btn btn-default btn-flat paginate"
					@click="open=!open">
					<i class="fa fa-bars"></i>
					{{ pageLength }}
					<span class="fa fa-caret-down"
						v-if="!open">
					</span>
					<span class="fa fa-caret-up"
						v-else="!open">
					</span>
				</button>
				<ul class="dropdown-menu paginate">
		            <li v-for="length in lengths"
		            	v-if="length !== pageLength && length">
		            	<a href="#" @click="changeLength(length)">{{ length }}</a>
		            </li>
				</ul>
			</div>
			<button class="btn btn-default btn-flat">
				<i class="fa fa-eye margin-right-xs"></i>
				{{ start }} -> {{ offset }} / {{ records }}
			</button>
			<button class="btn btn-default btn-flat previous"
				@click="previous"><
			</button>
			<button class="btn btn-default btn-flat current-page">
				<i class="fa fa-file-text-o margin-right-xs"></i>{{ current }} / {{ pages }}
			</button>
			<button class="btn btn-default btn-flat next"
				@click="next">>
			</button>
		</div>
		<div class="clearfix"></div>
		<slot :list="computedList">
		</slot>
	</div>

</template>

<script>

	export default {
		props: {
			list: {
				type: Array,
				required: true
			},
			length: {
				type: Number,
				default: 10
			},
			lengths: {
				type: Array,
				default() {
					return [10, 15, 20, 25, 30];
				}
			},
			border: {
				type: Boolean,
				default: false
			}
		},

		computed: {
			computedList() {
				return this.list.filter((el, index) => {
					return index >= this.start - 1
						&& index < this.current * this.pageLength;
				});
			},
			pages() {
				return Math.ceil(this.records / this.pageLength);
			},
			records() {
				return this.list.length;
			},
			start() {
				return (this.current - 1) * this.pageLength + 1;
			},
			offset() {
				return this.start + this.computedList.length - 1;
			}
		},

		watch: {
			pageLength() {
				if (this.current > this.pages) {
					this.current = this.pages;
				}
			}
		},

		data() {
			return {
				pageLength: this.length,
				open: false,
				current: 1
			}
		},
		methods: {
			next() {
				if (this.current < this.pages) {
					this.current++;
				}
			},
			previous() {
				if (this.current > 1) {
					this.current--;
				}
			},
			changeLength(newLength) {
				this.current = Math.ceil(this.start / newLength);
				this.pageLength = newLength;
				this.open=false
			}
		},

		mounted() {}
	};

</script>

<style>

	.btn-group.paginate.with-border {
		border: 1px solid #B1B3B3;
	}

	ul.dropdown-menu.paginate {
		min-width: 70px;
	}

	ul.dropdown-menu.paginate > li {
		text-align: center;
	}

	div.paginate > button.paginate {
		width: 70px;
	}

	div.paginate > button.previous,
	div.paginate > button.next {
		width: 40px;
	}

</style>