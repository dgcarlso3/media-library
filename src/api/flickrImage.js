/**
 * Created by dcate on 2/5/17.
 */
const FLICKR_API_KEY = "a46a979f39c49975dbdd23b378e6d3d5";
const flickrEndpoint = (searchQuery) => (
    `https://api.flickr.com/services/rest?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`
);

export const flickrImage = (searchQuery) => {
    return fetch(flickrEndpoint(searchQuery))
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


