import axios from "axios";

export function UseShortenAndStoreURL(data) {
    console.log('data' , data)
    return axios.post(`${process.env.REACT_APP_DOMAINNAME}/url/shortenedAndStorage`,  data ,{})
}
export function UseGetOriginalURL(hashedString) {
    return axios.get(`${process.env.REACT_APP_DOMAINNAME}/url/getTheOriginalURL/${hashedString}`)
}

