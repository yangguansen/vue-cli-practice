import axios from 'axios';

export default {
  getNavitation() {
    const instance = axios.create();

    return instance.post( '/v2/api/Community/Navigations', { a: 1 } ).then( res => res.data.data );
  }
}
