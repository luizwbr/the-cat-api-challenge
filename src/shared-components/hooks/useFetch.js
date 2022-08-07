import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(callToAction, searchQuery, pageNum) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setItems([]);
    }, [searchQuery]);

    useEffect(() => {
        const CancelToken = axios?.CancelToken;
        let cancel;

        setIsLoading(true);
        setError(false);

        axios
            .get(callToAction(searchQuery, pageNum), {
                // eslint-disable-next-line max-len, no-return-assign
                cancelToken: new CancelToken(cancelReason => cancel = cancelReason),
            })
            .then((res) => {
                // TODO aqui um novo model CAT model
                setItems(prev => [...new Set([...prev, ...res?.data])]);
                setHasMore(res?.data?.length > 0);
                setIsLoading(false);

                return null;
            })
            .catch((queryError) => {
                if (axios.isCancel(queryError)) {
                    return null;
                }
                setError(queryError);

                return null;
            });

        return () => cancel();
    }, [searchQuery, pageNum, callToAction]);

    return { isLoading, error, items, hasMore };
}

export default useFetch;
