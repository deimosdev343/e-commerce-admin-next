import axios from "axios";

export const getAuth = async (token: string): Promise<any> => {
    
    const res = await axios.get(
      `${process.env.BACKEND_API}/auth`,
      {
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    ); 
    return res.data;
}