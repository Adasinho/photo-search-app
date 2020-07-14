import Unsplash from "unsplash-js";
import axios from "axios";

const ACCESS_KEY: string = String(process.env.REACT_APP_API_ACCESS_KEY);
const AUTOCOMPLETE_PATH: string = "https://unsplash.com/nautocomplete/";

const unsplash = new Unsplash({
    accessKey: ACCESS_KEY
})

export const getRandomImage = () => {
    return unsplash.photos.getRandomPhoto({})
        .then(data => data.json());
}

export const searchImage = (keyword: string) => {
    return unsplash.search.photos(keyword)
        .then(data => data.json());
}

export const getSuggestion = (keyword: string) => {
    const formattedKeyword = keyword.replace(" ", "%20");

    return axios.get(AUTOCOMPLETE_PATH + formattedKeyword)
        .then(res => res.data());
}