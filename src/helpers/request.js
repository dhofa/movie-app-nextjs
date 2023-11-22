import axios from 'axios'

const url = process.env.NEXT_PUBLIC_BASE_URL

export const request = async (props) => {
  const { path, method, options } = props
  console.log(`props => ${JSON.stringify(props)}`);

  try {
    let defaultHeaders = {}

    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      defaultHeaders = {
        Authorization: accessToken
      }
    }

    const res = await axios(`${url}${path}`, {
      ...options,
      method: method ?? 'GET',
      headers: { ...options?.headers, ...defaultHeaders},
      // validateStatus: (status) => status <= 505 // custom validate status
    });

    // console.log(`Response => ${JSON.stringify(res)}`);
    if (res.status === 200 || res.status === 201) {
      return res.data
    }

    // if (res.status === 505) {} // custom handle

  } catch (error) {
    console.log(error);
    return error;
  }
}