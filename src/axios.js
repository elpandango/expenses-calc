import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://expenses-calc-8cbca.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;