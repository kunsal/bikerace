import schedules from './data/schedule.json';
import bikers from './data/bikers.json';
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
}

export default new CmsService();