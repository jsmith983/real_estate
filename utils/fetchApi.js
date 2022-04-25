import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'f629aaed4dmsh57d355ffefbfc3cp10d988jsnf5bce6bf3193'
        }
    });

    return data;
}
