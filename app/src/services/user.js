/**
 * Created by Administrator on 2017/7/11.
 */
import request from "../utils/request";


export function login(user) {
  return request(`/api/login`,{
    method: 'POST',
    body: JSON.stringify(user),
  });
}


export function changePwd(user,token) {
  return request(`/api/modifyUser`,{
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      "token":token
    }
  });
}
