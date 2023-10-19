import { async } from "@firebase/util";
// it return the rule

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

// import useAxiosLock from "./useAxiosLock";
const useAdmin = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // const [axiosSecure] = useAxiosSecure();
  // const { user, isLoading } = useAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled:
      !isLoading && !!user?.email && !!localStorage.getItem("AccessToken"),
    queryFn: async () => {
      const res = await axiosSecure(`/users/admin/${user?.email}`);
      // console.log("is admin response ", res);
      // to check returned data admin or not ,return the role res.data.admin
      // if true dashboard will get isAdmin = true and enable his layout
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
