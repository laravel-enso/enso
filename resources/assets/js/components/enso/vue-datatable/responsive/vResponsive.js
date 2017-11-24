import resizeDetector from 'element-resize-detector';
import ResponsiveTable from './ResponsiveTable';

export default {
    inserted: (el, binding, { context }) => {
        const table = new ResponsiveTable(el, context);
        const erd = resizeDetector({ strategy: 'scroll' });

        table.resize();

        erd.listenTo(el, () => {
            table.resize();
        });
    },
};
