import axios from 'axios';



const api = axios.create({
    timeout: 10000,
});

export const get = async (url: string) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error in GET request:', error);
        throw error;
    }
};

// Generic POST request function
export const post = async (url: string, data: any) => {
    try {
        console.log(url, data);

        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
};

export const put = async (url: string, data: any) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Error in PUT request:', error);
        throw error;
    }
};

export const remove = async (url: string) => {
    try {
        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        console.error('Error in DELETE request:', error);
        throw error;
    }
};
