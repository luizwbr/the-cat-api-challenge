import RestQuery from '../../shared-components/rest-query/RestQuery.js';
import { API_URL, API_VERSION, API_KEY } from '../constants/Constans.js';

const DEFAULT_LIMIT = 10;

export default class ImagesResource {
    static fetchBySearchQuery(searchQuery, pageNum) {
        const url = `${API_URL}/${API_VERSION}/images/search`;
        const configuration = {
            searchKey: 'breed_ids',
        };

        return new RestQuery(configuration)
            .url(url)
            .search(searchQuery)
            .page(pageNum)
            .limit(DEFAULT_LIMIT)
            .set('api_key', API_KEY)
            .build();
    }
}
