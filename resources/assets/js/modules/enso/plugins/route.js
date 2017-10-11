import store from '../../../store';

var Router = function(name, params, absolute) {
    this.name = name;
    this.urlParams = this.normalizeParams(params);
    this.queryParams = this.normalizeParams(params);
    this.absolute = absolute === undefined ? true : absolute;
    this.domain = this.constructDomain();
    this.url = store.state.routes[this.name].uri.replace(/^\//, '');

    String.call(this);
};

Router.prototype = Object.create(String.prototype);
Router.prototype.constructor = Router;

Router.prototype.normalizeParams = function(params) {
    if (params === undefined)
        return {};

    params = typeof params !== 'object' ? [params] : params;
    this.numericParamIndices = Array.isArray(params);

    return Object.assign({}, params);
};

Router.prototype.constructDomain = function() {
    if (this.name === undefined) {
        throw 'Ziggy Error: You must provide a route name';
    } else if (store.state.routes[this.name] === undefined) {
        throw 'Ziggy Error: route "'+ this.name +'" is not found in the route list';
    } else if (! this.absolute) {
        return '/';
    }

    return (store.state.routes[this.name].domain || store.state.meta).replace(/\/+$/,'') + '/';
};

Router.prototype.with = function(params) {
    this.urlParams = this.normalizeParams(params);

    return this;
};

Router.prototype.withQuery = function(params) {
    Object.assign(this.queryParams, params);

    return this;
};

Router.prototype.constructUrl = function() {
    var url = this.domain + this.url,
        tags = this.urlParams,
        paramsArrayKey = 0;

    return url.replace(
        /{([^}]+)}/gi,
        function (tag) {
            var keyName = tag.replace(/\{|\}/gi, '').replace(/\?$/, ''),
                key = this.numericParamIndices ? paramsArrayKey : keyName;

            paramsArrayKey++;
            if (typeof tags[key] !== 'undefined') {
                delete this.queryParams[key];
                return tags[key].id || tags[key];
            }
            if (tag.indexOf('?') === -1) {
                throw 'Ziggy Error: "' + keyName + '" key is required for route "' + this.name + '"';
            } else {
                return '';
            }
        }.bind(this)
    );
};

Router.prototype.constructQuery = function() {
    if (Object.keys(this.queryParams).length === 0)
        return '';

    var queryString = '?';

    Object.keys(this.queryParams).forEach(function(key, i) {
        queryString = i === 0 ? queryString : queryString + '&';
        queryString += key + '=' + this.queryParams[key];
    }.bind(this));

    return queryString;
};

Router.prototype.toString = function() {
    this.parse();
    return this.return;
};

Router.prototype.valueOf = function() {
    this.parse();
    return this.return;
};

Router.prototype.parse = function() {
    this.return = this.constructUrl() + this.constructQuery();
};

window.route = function(name, params, absolute) {
    return new Router(name, params, absolute);
};
