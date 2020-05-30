import info from './info';

export default {
  head: {
    title: info.description,
    description: info.description,
    name: info.name,
    location: {
      latitude: info.location.geo.latitude.toString(),
      longitude: info.location.geo.longitude.toString()
    }
  },
  aasaam: info.name,
  legalName: info.legalName,
  changeLanguagePost: 'تغییر زبان',
  soonLanguagePost: 'زبان پست جدید',
  comeBack: 'بازگشت',
  posts: 'پست',
  home: 'خانه'
};
