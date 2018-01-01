class ResponsiveTable {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.hiding = false;
        this.width = null;
        this.height = null;
    }

    updateSize() {
        this.width = this.el.clientWidth;
        this.height = this.el.clientHeight;
    }

    shouldntResize() {
        return this.width === this.el.clientWidth && this.height !== this.el.clientHeight;
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

        this.retryFit();
    }

    showColumn() {
        const columns = this.context.template.columns
            .filter(column => column.meta.hidden);

        if (!columns.length) {
            return;
        }

        columns[0].meta.hidden = false;

        this.retryFit();
    }

    resize() {
        if (this.shouldntResize()) {
            return;
        }

        this.fit();
    }

    retryFit() {
        this.context.$nextTick(() => {
            this.fit();
        });
    }

    fit() {
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
