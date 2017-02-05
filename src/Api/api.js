/**
 * Created by dcate on 2/3/17.
 */
import fetch from 'node-fetch'

const FLICKR_API_KEY = "a46a979f39c49975dbdd23b378e6d3d5";
const SHUTTER_CLIENT_ID = "f08ac09a598f937a83aa";
const SHUTTER_CLIENT_SECRET = "282fdf2174876ef0588467f989d01d69bf8ce5c5";
// const SHUTTER_APP_NAME = "Media Library";
// const REFRESH_TOKEN = "2/3_sx2J9tyXyRb11TFv5OgrlvbrBP-mPIrQ-QCVtb7y0zcIgyltnR3PW-xEl_mke5PnLDUix0inbLxe-AxEalZMHC3UWwg2ObmVySLBedHZE_Bc8zCJREDQdnFn7wFZcEDMUHAT0a15RsqzFf60NppeXlM_-WcH8IAVQx7c9LSc0oILgGlJ5v8dDGVqwhRfcX";

// const ACCESS_TOKEN = "1/eyJjbGllbnRfaWQiOiJmMDhhYzA5YTU5OGY5MzdhODNhYSIsInJlYWxtIjoiY3VzdG9tZXIiLCJzY29wZSI6InVzZXIudmlldyIsInVzZXJuYW1lIjoiZ3NocHNydWxlODAiLCJ1c2VyX2lkIjoxNzA5MDg4ODQsIm9yZ2FuaXphdGlvbl9pZCI6bnVsbCwiY3VzdG9tZXJfaWQiOjE3MDkwODg4NCwiZXhwIjoxNDg2MjcyNDQ3fQ.H3ZIZm9ot13Dc0BgsC-cNqHNdDqP36ym-HpFqJu5tY57eh3EJdEAcz0qIVbT7qMVzU8Af1TD8ZtebsXBesrXCQ";
// const tokenBasedAuth = () => "Bearer ".concat(ACCESS_TOKEN);
const basicAuth = () => "Basic ".concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));

const authParameters = {
    headers: {
        Authorization: basicAuth()
    }
};

export const shutterStockVideos = (searchQuery) => {
    const SHUTTERSTOCK_API_ENDPOINT = `https://${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}@api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;
    return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
        .then(response => {return response.json();})
        .then(json => {return json.data.map( ({id, assets, description}) => ({
            id,
            mediaUrl: assets.preview_mp4.url,
            description
            }));
        })
        // .then(stuff => {console.log(stuff, "Video Stuff");return stuff;})
    ;
};

export const flickrImage = (searchQuery) => {
    const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`

    return fetch(FLICKR_API_ENDPOINT)
        .then(response => { return response.json(); })
        .then(json => {
            return json.photos.photo.map( ({farm, server, id, secret, title}) => ({
                id,
                title,
                mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
            }));
        })
        // .then(stuff => {console.log(stuff, "Image Stuff");return stuff;})
    ;
};

export const generateHash = (string) => {
    const str = String(string);
    let total = 0;
    for (var x=0; x<str.length; x++) {
        total+=(str.charCodeAt(x)*x);
    }
    return total%x;
}

