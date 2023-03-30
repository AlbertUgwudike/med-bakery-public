import axios from "axios";

// Add a response interceptor
axios.interceptors.response.use(
    res => {
        if (res.data.error === "-- email extraction failed --") {
            window.location.href = "/ExpiryLogin";
            throw "token expired, redirect to signout page";
        }
        return res;
    },
    error => {
        // Do something with response error
        return Promise.reject(error);
    }
);

const myaxios = {
    post: (url: string, data: any) => {
        return axios({
            method: "POST",
            url,
            data,
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
        });
    },
    get: (url: string) => {
        return axios({ method: "GET", url, maxBodyLength: Infinity, maxContentLength: Infinity });
    },
};

export default myaxios;
