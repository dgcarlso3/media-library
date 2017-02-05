/**
 * Created by dcate on 2/5/17.
 */
import fetch from 'node-fetch'

const SHUTTER_CLIENT_ID = "f08ac09a598f937a83aa";
const SHUTTER_CLIENT_SECRET = "282fdf2174876ef0588467f989d01d69bf8ce5c5";
const shutterStockEndpoint = (searchQuery) => (
    `https://${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}@api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`
);

const basicAuth = () => "Basic ".concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));

const authParameters = {
    headers: {
        Authorization: basicAuth()
    }
};

export const shutterStockVideo = (searchQuery) => {
    return fetch(shutterStockEndpoint(searchQuery), authParameters)
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