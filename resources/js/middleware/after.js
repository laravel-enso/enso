import documentTitle from './after/documentTitle';
import progressBar from './after/progressBar';
import bookmarks from './after/bookmarks';

export default (to) => {
    progressBar();
    documentTitle(to);
    bookmarks(to);
};

