import Vue from 'vue';

const SI = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

Vue.filter('shortNumber', (number, precision = 2) => {
    if (number === 0) {
        return number;
    }

    const tier = Math.floor(Math.log10(number) / 3);

    if (tier === 0) {
        return number;
    }

    const suffix = SI[tier];
    const scale = 10 ** (tier * 3);
    const scaled = number / scale;
    const formatted = Number(scaled.toFixed(precision)) + suffix;

    return formatted;
});
