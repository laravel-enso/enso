import resizeDetector from 'element-resize-detector';
import ResponsiveTable from './ResponsiveTable';

const erd = resizeDetector({ strategy: 'scroll' });
let table = null;

export default {
    inserted: (el, binding, { context }) => {
        table = new ResponsiveTable(el, context);
        erd.listenTo(el, () => table.resize());
    },
    componentUpdated: () => {
        table.resize();
    },
    unbind(el) {
        const erd = resizeDetector({ strategy: 'scroll' });
        erd.uninstall(el);
    },
};
