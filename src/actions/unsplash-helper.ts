'use server'

import { unsplash } from "@/lib/unsplash";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

export async function searchImages(searchTerm: string, page: number): Promise<Photos | null> {
    const response = unsplash.search.getPhotos({
        query: searchTerm,
        page: page,
        perPage: 21
    }).then(result => {
        switch (result.type) {
            case 'error':
                console.log('error occurred: ', result.errors[0]);
                return null;
            case 'success':
                console.log('response from API', result.response);
                return result.response;
        }
    });

    return response;
}
