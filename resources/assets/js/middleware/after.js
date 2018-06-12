import documentTitle from './after/documentTitle';
import nprogress from './after/nprogress';

export default (to) => {
    nprogress();
    documentTitle(to);
};

