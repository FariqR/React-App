import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 3a826d1da84a74d0ec31c5897fe6495446baacb2d9b81f7d105e10d4fc5e0961'
    }   
});