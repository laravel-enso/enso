import Enum from './Enum';

const bootEnums = (enums, __) => {
    const obj = {};
    Object.keys(enums)
        .forEach(enumName => (obj[enumName] = new Enum(enums[enumName], __)));

    return obj;
};

export default bootEnums;
