import documentTitle from './after/documentTitle';
import progressBar from './after/progressBar';
import history from './after/history';

export default (to) => {
    progressBar();
    documentTitle(to);
    history(to);
};

