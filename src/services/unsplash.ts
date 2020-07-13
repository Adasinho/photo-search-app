import Unsplash from "unsplash-js";

const ACCESS_KEY: string = String(process.env.REACT_APP_API_ACCESS_KEY);

const unsplash = new Unsplash({
    accessKey: ACCESS_KEY
})

export const getRandomImage = () => {
    return unsplash.photos.getRandomPhoto({})
        .then(data => data.json());
}