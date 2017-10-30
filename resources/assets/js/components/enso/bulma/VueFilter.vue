<template>
  <div class="box" :class="boxClass">
    <table class="text-center">
      <tbody>
        <tr>
          <td :colspan="options.length + 1">
            <b>{{ title }}</b>
          </td>
        </tr>
        <tr>
          <td v-for="option in options">
            <input :name="'radio-' + _uid"
              @change="update"
              type="radio"
              v-model="internalValue" :value="option.value">
              <label class="vue-filter" v-html="option.label"></label>
            </input>
          </td>
          <td v-if="offSwitch">
            <input :name="'radio-' + _uid"
              @change="update"
              type="radio"
              v-model="internalValue" :value="null">
              <label class="vue-filter">
                <!-- can use a classObject here -->
                <i class="fa fa-power-off text-red"
                  :class="{ 'text-red': internalValue === null, 'text-green': internalValue !== null }">
                </i>
              </label>
            </input>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// input and label inheritance is not a valid html semantic
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: 'primary'
    },
    options: {
      type: Array,
      default () {
        return {}
      }
    },
    value: {
      required: true
    },
    offSwitch: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    internalValue: this.value
  }),
  computed: {
    boxClass: () => 'box-' + this.theme
  },
  methods: {
    update () {
      this.$emit('input', this.internalValue)
    }
  }
}
</script>

<style lang="sass">
label.vue-filter
  margin-bottom: 0
  margin-top: 3px
</style>
