import { defaultAxiosInstance } from "./Api";
import { AxiosInstance } from 'axios';


const UserService = (api: AxiosInstance = defaultAxiosInstance) => ({
  logIn: async (email: string, password: string) => { //need to create a user
    const data = await api.post("/reviews/sign-in", { userName: email, ps: password });  // what we need to get from login$
    if (data && data.status === 200) {
      console.log(data.headers.authorization)
      localStorage.setItem("accessToken", data.headers.authorization) //lîn localstorage -> setItem accesToken to the token
      return data["data"]; //and returning
    }
  },
}
)

export default UserService