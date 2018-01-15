import axios from 'axios';
import toast from 'toast';

const loading = toast.loading();
const error = toast.error();

axios.defaults.baseURL = '/api/';

axios.defaults.headers[ 'Content-Type' ] = 'application/x-www-form-urlencoded';

//  添加请求拦截器
axios.interceptors.request.use( function ( config ) {

  loading.show( '加载中' );
  console.log( config );

  return config;
}, function ( error ) {
  return Promise.reject( error );
} )

axios.interceptors.response.use( function ( response ) {
  // 对响应数据做点什么
  loading.hide();
  if ( response.data.status != 200 ) {
    error.show( response.data.message );
  }
  return response;
}, function ( error ) {
  error.show( '请求失败' );
  // 对响应错误做点什么
  return Promise.reject( error );
} );
