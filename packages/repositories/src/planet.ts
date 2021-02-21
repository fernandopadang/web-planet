import { API } from '@web-planet/helpers';

export default {
  getPlanet (payload: object) {
    return API ({
      url: "https://swapi.dev/api/planets/",
      method: "get",
      data: payload,
      fullUrl: true
    });
  },
  getPlanetDetail (payload: object) {
    return API ({
      url: `https://swapi.dev/api/planets/${payload.id}`,
      method: "get",
      fullUrl: true
    });
  }
}