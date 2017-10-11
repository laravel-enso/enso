import Router from 'vue-router';

import { Auth } from './routes/enso/auth';
import { Dashboard } from './routes/enso/dashboard';
import { Administration } from './routes/enso/administration';
import { System } from './routes/enso/system';
import { DataImport } from './routes/enso/dataImport';
import { notFound } from './routes/enso/notFound';

const routes = Auth.concat([ Dashboard, Administration, System, DataImport, notFound ]);

const router = new Router({
	mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.title !== from.meta.title) {
		document.title = to.meta.title;
	}
  	next();
});

export default router;