import joinAttributes from './helpers/joinAttributes.js';

const DEFAULT_SEARCH_KEY = 'search';
const DEFAULT_PAGE_KEY = 'page';
const DEFAULT_LIMIT_KEY = 'limit';

export default class RestQuery {
    constructor(configuration) {
        this.searchKey = configuration?.searchKey || DEFAULT_SEARCH_KEY;
        this.pageKey = configuration?.pageKey || DEFAULT_PAGE_KEY;
        this.limitKey = configuration?.limitKey || DEFAULT_LIMIT_KEY;

        this.params = '';
        this.customParams = '';
    }

    #setAttribute(key, value, paramName = 'params') {
        this[paramName] = {
            ...this.params,
            [key]: value,
        };
    }

    set(key, value) {
        this.#setAttribute(key, value, 'customParams');

        return this;
    }

    url(url) {
        this.#setAttribute('url', url);

        return this;
    }

    search(search) {
        this.#setAttribute(this.searchKey, search);

        return this;
    }

    page(page) {
        this.#setAttribute(this.pageKey, page);

        return this;
    }

    limit(limit) {
        this.#setAttribute(this.limitKey, limit);

        return this;
    }

    build() {
        let url = '';
        let params = {
            ...this.params,
            ...this.customParams,
        };
        ({ url, ...params } = params);

        return `${url}?${joinAttributes(params)}`;
    }
}
