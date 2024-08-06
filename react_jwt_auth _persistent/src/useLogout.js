import axios from "./api/axios";
import useAuth from "./hooks/useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios("/logout", {
        withCredentials: True,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
};

export default useLogout;
