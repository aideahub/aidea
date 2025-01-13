import axios from "axios"
import env_vars from "../components/env_variables/env_config";

const REST_API = {


    fetchPost: async (slug) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const url_path = `${env_vars.API_ENDPOINT}/api/posts/${slug}`;
        try {
            const response = await axios.get(url_path, config);
            const data = await response.data;
            return data;
        } catch (error) {
            console.log("Error fetching post: ", error)
            throw error;
        }
    },


    listPostsDetails: async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const url_path = `${env_vars.API_ENDPOINT}/api/posts`;
        try {
            const response = await axios.get(url_path, config);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }
}

export default REST_API;
