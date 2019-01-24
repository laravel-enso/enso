import updateMenuState from './after/updateMenuState';
import documentTitle from './after/documentTitle';
import progressBar from './after/progressBar';
import bookmarks from './after/bookmarks';

export default (to) => {
    updateMenuState();
    progressBar();
    documentTitle(to);
    bookmarks(to);
};
