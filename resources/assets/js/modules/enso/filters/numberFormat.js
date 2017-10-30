import Vue from 'vue'

Vue.filter('numberFormat', value => {
  value += ''

  let x, x1, x2
  let sum = 0
  const rgx = /(\d+)(\d{3})/

  x = value.split('.')
  x1 = x[0]
  x2 = x.length > 1 ? '.' + x[1] : ''

  while (rgx.test(x1)) x1 = x1.replace(rgx, '$1' + ',' + '$2')

  sum = x1 + x2

  return sum
})
