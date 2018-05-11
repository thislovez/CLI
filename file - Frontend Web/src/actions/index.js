import axios from 'axios'
const API_URL = 'http://localhost:7777/api/curriculum';


//CREATE
export function createCurriculum(data) {
  const response = axios.post(API_URL, data);
  return {
    type: 'GET_CURRICULUM',
    payload: response
  }
}


//Read
export function getCurriculum() {
  const response = axios.get(API_URL);
  console.log('getcurriculum', response);
  return{
    type: 'GET_CURRICULUM',
    payload: response
  }
}


//Update
export function updateCurriculum(id,data) {
  const response = axios.put(API_URL + '/' +id , data)
  return {
    type: 'GET_CURRICULUM',
    payload: response
  }
}



//DELETE
export function deleteCurriculum(id) {
  const response = axios.delete(API_URL + '/' + id);
  return {
    type: 'GET_CURRICULUM',
    payload: response
  }
}
