'use server'

import { unsplash } from "@/lib/unsplash";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { Full } from "unsplash-js/dist/methods/photos/types";

export async function searchImages(searchTerm: string, page: number): Promise<Photos | null> {
    const response = unsplash.search.getPhotos({
        query: searchTerm,
        page: page,
        perPage: 21
    }).then(result => {
        switch (result.type) {
            case 'error':
                console.log('error occurred calling search API: ', result.errors[0]);
                return null;
            case 'success':
                console.log('response from search API', result.response);
                return result.response;
        }
    });

    return response;
}

export async function searchImageDetails(photoId: string): Promise<Full | null> {
    const response = unsplash.photos.get(
        { photoId }
    ).then(result => {
        switch (result.type) {
            case 'error':
                console.log('error occurred calling get photo API: ', result.errors[0]);
                return null;
            case 'success':
                console.log('response from get details API', result.response);
                return result.response;
        }
    });

    return response;
}
