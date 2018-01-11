const routeImporter = requireContext => requireContext.keys()
    .map(fileName => requireContext(fileName))
    .reduce((routes, route) => (Array.isArray(route.default)
        ? [...routes, ...route.default]
        : [...routes, route.default]), []);

export default routeImporter;
