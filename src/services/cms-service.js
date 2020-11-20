import schedules from './data/schedule.json';
import bikers from './data/bikers.json';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
const flickr_key = process.env.REACT_APP_FLICKR_KEY
class CmsService {
  getSchedule() {
    return schedules;
  }

  getBikers() {
    return bikers;
  }

  getBiker(id) {
    const biker = bikers.find(biker => biker.id == id);
    return biker;
  }

  async postSlogan(data) {
    try {
      const response = await axios.post(`${url}/submissions`, data);
      if (response.status == 201) {
        return response;
      }
    } catch (error) {
      return error.response
    }
  } 

  async getPhotos(page, per_page) {
    const url = `https://www.flickr.com/services/rest/?
      method=flickr.photos.search&
      api_key=${flickr_key}&extras=&
      per_page=${per_page}&
      page=${page}&
      format=json&nojsoncallback=1&
      tags=bicycle,bikes,bikerace
      tag_mode=or`;
      
    try {
      const response = await axios.get(`${url}/photos?page=${page}&per_page=${per_page}`)
      console.log(response)
      return response.data.photos
    } catch (error) {
      return error.response
    }
  } 
}

export default new CmsService();