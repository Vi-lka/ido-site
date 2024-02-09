import axios from "axios";

type Err = {
    error: {
      status: number,
      name: string,
      message: string,
    }
}

type User = {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    subscribed: boolean
}

export const getUserInfo = async (token: string): Promise<User> => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me`, 
            config
        );
        return data as User
    } catch (err) {
        console.log(err)
        if (axios.isAxiosError(err) && err.response) {
          const errorMessage = (err.response.data as Err).error.message
          console.log("AxiosError: ", errorMessage)
          throw new Error(errorMessage)
        } else {
          const errorMessage = (err as Error).message
          console.log("Error: ", errorMessage)
          throw new Error(errorMessage)
        }
    }
  };