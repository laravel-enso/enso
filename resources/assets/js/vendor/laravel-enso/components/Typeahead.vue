<template>

	<div
		:class="{'open':showDropdown, 'typeahead-wrapper': true}">
		<div class="input-group" :class="{'has-error' : inputHasError}">
			<i class="fa fa-times clear-button" @click="clearInput" v-if="clearButton" v-show="showClearButton"></i>
			<input type="text" class="form-control typeahead"
				:disabled="disabled"
				:placeholder="placeholder"
				v-model="currentValue"
				@input="update"
				@keydown.up="keyUp"
				@keydown.down="keyDown"
				@keydown.enter= "hit"
				@keydown.esc="reset"
				@blur="showDropdown = false">
			<span class="input-group-addon">
				<i class="fa fa-search"></i>
			</span>
		</div>
		<ul class="dropdown-menu">
			<li v-for="(item, index) in items" v-bind:class="{'active': isActive(index)}">
				<a @mousedown.prevent="hit" @mousemove="setActive(index)">
						<span v-html="highlight(item[displayProperty], currentValue)"></span>
				</a>
			</li>
		</ul>
	</div>

</template>

<script>

	export default {
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			limit: {
				type: Number,
				default: 10
			},
			url: {
				type: String,
				required: true
			},
			customParams: {
				type:Object,
				default: null
			},
			displayProperty: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
				default: 'type something'
			},
			clearButton: {
				type: Boolean,
				default: false,
			},
			regExp: {
				type: RegExp,
				default: function() {
					return /^[A-Za-z0-9 _-]*[A-Za-z0-9][A-Za-z0-9 _-]*$/;
				}
			}
		},
		computed: {
			inputHasError: function() {
				return this.currentValue && !this.regExp.test(this.currentValue);
			},
			showClearButton: function() {
				return this.clearButton && this.currentValue && !this.disabled;
			}
		},
		data: function() {
			return {
				currentIndex: 0,
				showDropdown: false,
				items: [],
				style: {
						width: this.width
				},
				currentValue: null
			};
		},
		methods: {
			highlight: function(item, currentValue) {
				currentValue.split(' ').filter(function(word) {
					return word.length;
				}).forEach(function(word) {
					item = item.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>')
				});

				return item;
			},
			update: _.debounce(function() {
				if (!this.currentValue) {
						this.reset();
						return false;
				}

				if (this.inputHasError) {
					this.showDropdown = false;
					return false;
				}

				let params = {
					currentValue: this.currentValue,
					limit: this.limit,
					customParams: this.customParams
				};

				axios.get(this.url, { params: params }).then((response) => {
					this.items = response.data;
					this.showDropdown = this.items.length > 0;
				});
			}, 100),
			reset: function() {
				this.items = [];
				this.showDropdown = false;
			},
			setActive: function(index) {
				this.currentIndex = index;
			},
			isActive: function(index) {
				return this.currentIndex === index;
			},
			hit: function() {
				if (this.showDropdown) {
					let item = this.items[this.currentIndex];
					this.currentValue = item[this.displayProperty];
					this.showDropdown = false;
					this.$emit('input', item);
					this.clearInput();
				}
			},
			keyUp: function() {
				if (this.currentIndex > 0) this.currentIndex--;
			},
			keyDown: function() {
				if (this.currentIndex < this.items.length - 1) this.currentIndex++;
			},
			clearInput: function() {
				this.currentValue = '';
				this.items = [];
				this.$emit('input', {});
			}
		}
	}

</script>

<style>

	.typeahead-wrapper {
		position: relative;
		width: 100%;
	}

	.typeahead-wrapper .input-group .input-group-addon {
		background-color: inherit;
	}

	.input-group  i.clear-button {
		position: absolute;
		cursor: pointer;
		top: calc((100% - 12px)/2);
		left: 2px;
		outline: none;
		z-index: 4;
		display: block;
	}

	.input-group  i.clear-button:focus {
		opacity: .1;
	}

	input.form-control.typeahead {
		padding-left: 25px;
	}

</style>