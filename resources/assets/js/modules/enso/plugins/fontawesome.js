import Vue from 'vue';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faListAlt } from '@fortawesome/fontawesome-free-solid/shakable.es';
import { faGithub } from '@fortawesome/fontawesome-free-brands/shakable.es';

fontawesome.library.add(faListAlt, faGithub);

Vue.component('fa', FontAwesomeIcon);
