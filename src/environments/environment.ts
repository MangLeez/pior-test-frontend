const BaseUrl = 'http://localhost:8201/test';

export const environment = {

  production: false,
  services:{
    paramgroup:{
      endPoint:BaseUrl+'/paramgroup'
    },
    paraminfo:{
      endPoint:BaseUrl+'/paraminfo'
    }
  }
};






