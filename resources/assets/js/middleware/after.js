import documentTitle from './after/documentTitle';
import progressBar from './after/progressBar';

export default (to) => {
    progressBar();
    documentTitle(to);
};

