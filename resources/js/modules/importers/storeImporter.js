const storeImporter = requireContext => requireContext.keys()
    .map(fileName => [fileName.replace(/(^.\/)|(\.js$)/g, ''), requireContext(fileName)])
    .reduce((modules, [name, module]) => {
        module.namespaced = true;
        return { ...modules, [name]: module };
    }, {});

export default storeImporter;
