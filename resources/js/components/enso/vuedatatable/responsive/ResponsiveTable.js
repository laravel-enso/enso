import debounce from 'lodash/debounce';

class ResponsiveTable {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.resize = debounce(this.resize, 16);
        this.width = null;
    }

    hasChanged() {
        return this.width !== this.el.offsetWidth;
    }

    shouldHide() {
        return this.el.offsetWidth < this.el.scrollWidth;
    }

    shouldShow() {
        return this.el.offsetWidth === this.el.scrollWidth && this.hasChanged();
    }

    updateWidth() {
        this.width = this.el.offsetWidth;
    }

    hideColumn() {
        const column = this.context.template.columns
            .filter(column => column.meta.visible && !column.meta.hidden && !column.meta.rogue)
            .pop();

        if (!column) {
            return;
        }

        column.meta.hidden = true;

        this.update();
    }

    showColumn() {
        const column = this.context.template.columns
            .find(column => column.meta.hidden);

        if (!column) {
            return;
        }

        column.meta.hidden = false;
        this.update();
    }

    update() {
        this.context.$nextTick(() => {
            this.updateWidth();
            if (this.shouldHide()) {
                this.hideColumn();
            }
        });
    }

    resize() {
        if (this.shouldHide()) {
            this.hideColumn();
            return;
        }

        if (this.shouldShow()) {
            this.showColumn();
        }
    }
}

export default ResponsiveTable;
