import Tooltip from 'tooltip.js';

export default {
    inserted: (el, { arg, value, modifiers }) => {
        const color = Object.keys(modifiers).join(' ') || 'black';

        const tooltip = new Tooltip(el, {
            placement: arg || 'top',
            title: value,
            template: `<div class="tooltip" role="tooltip"><div class="tooltip-arrow ${color}"></div><div class="tooltip-inner ${color}"></div></div>`,
        });
    },
};
