class ResponsiveTable {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.hiding = false;
        this.width = null;
    }

    updateSize() {
        this.width = this.el.offsetWidth;
    }

    shouldResize() {
        return this.width !== this.el.offsetWidth;
    }

    shouldHide() {
        return this.el.offsetWidth < this.el.scrollWidth;
    }

    shouldShow() {
        return this.el.offsetWidth === this.el.scrollWidth;
    }

    hideColumns() {
        const column = this.context.template.columns
            .filter(column => column.meta.visible && !column.meta.hidden && !column.meta.rogue)
            .pop();

        if (!column) {
            return;
        }

        this.hiding = true;
        column.meta.hidden = true;
        this.retryFit();
    }

    showColumn() {
        const column = this.context.template.columns
            .find(column => column.meta.hidden);

        if (!column) {
            return;
        }

        column.meta.hidden = false;
        this.retryFit();
    }

    resize() {
        this.context.$nextTick(() => {
            if (this.shouldResize()) {
                this.fit();
            }
        });
    }

    retryFit() {
        this.context.$nextTick(() => {
            this.updateSize();
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

        if (this.shouldShow()) {
            this.showColumn();
        }
    }
}

export default ResponsiveTable;
