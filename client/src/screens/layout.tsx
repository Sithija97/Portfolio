import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { getIssues } from "../store/issues/issueSlice";
import { getRegisteredUsers } from "../store/auth/authslice";

type IProps = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: IProps) => {
  const { user } = useAppSelector((state: RootState) => state.store.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const Layout = () => {
  const dispatch = useAppDispatch();

  const loadData = async () => {
    await dispatch(getIssues());
    await dispatch(getRegisteredUsers());
  };

  useEffect(() => {
    loadData();
  });

  return (
    <PrivateRoute>
      <Header />
      <Outlet />
    </PrivateRoute>
  );
};
