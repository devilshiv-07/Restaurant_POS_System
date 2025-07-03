import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../https";
import { useEffect, useState } from "react";
import { removeUser, setUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { logoutInProgress } = useSelector((state) => state.user);
  
  useEffect(() => {
    // Skip fetching user data if logout is in progress
    if (logoutInProgress) {
      setIsLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const { data } = await getUserData();
        const { _id, name, email, phone, role } = data.data;
        dispatch(setUser({ _id, name, email, phone, role }));
      } catch (error) {
        dispatch(removeUser());
        navigate("/auth");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, navigate, logoutInProgress]);

  return isLoading;
};

export default useLoadData;