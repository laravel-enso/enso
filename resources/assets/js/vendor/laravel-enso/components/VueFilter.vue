<template>
  <div class="box box-primary">
    <table class="text-center">
      <tbody>
          <tr>
              <td colspan="3">
                  <slot name="vue-filter-name"></slot>
              </td>
          </tr>
          <tr>
              <td>
                  <input type="radio"
                      :name="'radio-' + _uid"
                      value=1
                      v-model="value"
                      @change="changed">
                    <label :for="'yes-' + _uid"><slot name="vue-filter-yes"></slot></label>
              </td>
              <td>
                  <input type="radio"
                     :name="'radio-' + _uid"
                      value=0
                      v-model="value"
                      @change="changed">
                <label :for="'no-' + _uid"><slot name="vue-filter-no"></slot></label>
              </td>
               <td>
                  <input type="radio"
                      :name="'radio-' + _uid"
                      value=""
                      v-model="value"
                      @change="changed">
                <label :for="'n-a-' + _uid"><slot name="vue-filter-n-a"></slot></label>
              </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    data: function() {
        return {
            value: ''
        };
    },

    methods: {
        changed: function() {
            this.$emit('input', this.value);
        }
    }
  }

</script>