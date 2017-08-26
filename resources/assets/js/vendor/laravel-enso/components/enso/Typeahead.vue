<template>

	<div class="typeahead-wrapper"
		:class="{ 'open': showDropdown }">
		<div class="input-group" :class="{ 'has-error': hasError }">
			<input type="text" class="form-control"
				:disabled="disabled"
				:id="'typeahead-' + _uid"
				:placeholder="placeholder"
				:value="value"
				@input="update($event.target.value);getData();"
				@keydown.up="keyUp"
				@keydown.down="keyDown"
				@keydown.enter="hit"
				@keydown.esc="update('')"
				@blur="dropdown=false">
			<span class="input-group-addon">
				<a class="input-button"
					@click="clear();$emit('clear')"
					v-if="showClearButton">
					<i class="fa fa-times"></i>
				</a>
				<a class="input-button"
					@click="element.focus()">
					<i class="fa fa-search"></i>
				</a>
			</span>
		</div>
		<ul class="dropdown-menu">
			<li v-for="(item, index) in items"
				:class="{'active': isActive(index)}">
				<a @mousedown.prevent="hit"
					@mousemove="setActive(index)"
					v-html="$options.filters.highlight(item[displayProperty], value)">
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
			params: {
				type: Object,
				default: null
			},
			displayProperty: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
				default: 'Searching for something?'
			},
			regExp: {
				type: RegExp,
				default() {
					return /^[A-Za-z0-9 _-]*[A-Za-z0-9][A-Za-z0-9 _-]*$/;
				}
			},
			value: {
				type: String,
				default: ""
			}
		},

		computed: {
			hasError() {
				return this.value && !this.regExp.test(this.value);
			},
			showClearButton() {
				return this.value && !this.disabled;
			},
			showDropdown() {
				return !this.hideDropdown && this.value && !this.hasError && this.items.length > 0;
			},
			element() {
				return document.getElementById('typeahead-' + this._uid);
			}
		},

		watch: {
			value() {
				if (this.value === "") {
					this.items = [];
				}
			}
		},

		data() {
			return {
				index: 0,
				items: [],
				hideDropdown: false
			};
		},

        filters: {
        	highlight(item, value) {
        		value.split(' ').filter(word => {
					return word.length;
				}).forEach(word => {
					item = item.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>')
				});

				return item;
        	}
        },

		created() {
            this.getData = _.debounce(this.getData, 200);
        },

		methods: {
			getData() {
				if (!this.value || this.hasError) {
					return false;
				}

				axios.get(this.url, {params: this.getParams()}).then(response => {
					this.hideDropdown = false;
					this.items = response.data;
				}).catch(error => {
					this.reportEnsoException(error);
				});
			},
			getParams() {
				return {
					value: this.value,
					limit: this.limit,
					params: this.params
				};
			},
			update(value) {
				this.$emit('input', value);
			},
			setActive(index) {
				this.index = index;
			},
			isActive(index) {
				return this.index === index;
			},
			hit() {
				if (this.showDropdown) {
					this.update(this.items[this.index][this.displayProperty]);
					this.$emit('update', this.items[this.index]);
					this.hideDropdown = true;
				}
			},
			keyUp() {
				if (this.index > 0) {
					this.index--;
				}
			},
			keyDown() {
				if (this.index < this.items.length - 1) {
					this.index++
				};
			},
			clear() {
				this.update("");
				this.$emit('update', {});
			}
		}
	}

</script>

<style>

	.typeahead-wrapper {
		position: relative;
		width: 100%;
	}

    a.input-button {
    	cursor: pointer;
    }

</style>