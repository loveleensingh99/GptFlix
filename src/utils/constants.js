export const ApiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',

        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
};


export const IMG_CDN = "https://image.tmdb.org/t/p/w300/"

export const ImgBg = "./assets/homebg.jpg"
