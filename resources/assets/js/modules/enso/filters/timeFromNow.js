import Vue from 'vue'
import moment from 'moment'

Vue.filter('timeFromNow', value => moment(value).fromNow())
