class ResponsiveTable {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.hiding = false;
    }

    shouldHide() {
        return this.el.clientWidth < this.el.scrollWidth;
    }

    shouldUnhide() {
        return this.el.clientWidth === this.el.scrollWidth && !this.hiding;
    }

    hideColumns() {
        const columns = this.context.template.columns
            .filter(column => column.meta.visible && !column.meta.hidden);

        if (!columns.length) {
            return;
        }

        this.hiding = true;
        columns[columns.length - 1].meta.hidden = true;

        this.context.$nextTick(() => {
            this.resize();
        });
    }

    showColumn() {
        const columns = this.context.template.columns
            .filter(column => column.meta.hidden);

        if (!columns.length) {
            return;
        }

        columns[0].meta.hidden = false;

        this.context.$nextTick(() => {
            this.resize();
        });
    }

    resize() {
        if (this.shouldHide()) {
            this.hideColumns();
            return;
        }

        if (this.hiding) {
            this.hiding = false;
            return;
        }

        if (this.shouldUnhide()) {
            this.showColumn();
        }
    }
}

export default ResponsiveTable;
