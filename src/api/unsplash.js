import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ox3OTcm772sfe72s8S6bbKimEBtkTcporzUuwPIDiYM'
  }
});