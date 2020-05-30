import info from './info';

export default {
  aasaamlink: info.url,
  head: {
    title: info.description,
    description: info.description,
    name: info.name,
    location: {
      latitude: info.location.geo.latitude.toString(),
      longitude: info.location.geo.longitude.toString()
    }
  },
  legalName: info.legalName,
  aasaam: info.name,
  changeLanguagePost: 'Artículo disponible en español',
  soonLanguagePost: 'Artículo disponible en español pronto',
  comeBack: 'Come back',
  posts: 'Posts',
  home: 'Home'
};
