import { Alert, Snackbar } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import { getSession } from 'next-auth/react'

// const token = JSON.parse();
// const token = user.data.id;
const instance = axios.create({
  //baseURL: 'http://capstone-backend-0957-11-v2.herokuapp.com/',
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  //baseURL: 'http://localhost:4000',
  timeout: 15000
  // headers: {
  //       Authorization: `Bearer ${getSession().data?.access_token}` ,
  //       "Content-Type": "application/json",
  //   },
})

const responseBody = (response: AxiosResponse) => response

instance.interceptors.response.use(
  function (response) {
    return response
  }
  // function (error: any) {
  //   return <Snackbar open={true} autoHideDuration={6000}>
  //   <Alert severity="error" sx={{ width: '100%' }}>
  //     This is an error message!
  //   </Alert>
  // </Snackbar>
  //     //  Promise.reject(error);
  // }
)

const requests = {
  get: (url: string, token: string) =>
    instance
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(responseBody),

  postimage: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  post: (url: string, body: {}, token: string) =>
    instance
      .post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(responseBody),

  put: (url: string, body: {}, token: string) =>
    instance
      .put(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(responseBody),

  delete: (url: string, token: string) =>
    instance
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(responseBody),

  postSpecial: (url: string, body: {}, token: string) =>
    instance.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`
      }
    })
}

export default requests
