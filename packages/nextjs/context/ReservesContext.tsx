import React, { createContext, useContext } from "react";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";

const ReservesContext = createContext<any>(null);

export const useReserves = () => {
  return useContext(ReservesContext);
};

export const ReservesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();

  return (
    <ReservesContext.Provider
      value={{
        reservesData,
        userReservesData,
        isLoadingReserves,
        isErrorReserves,
        isLoadingUserReserves,
        isErrorUserReserves,
      }}
    >
      {children}
    </ReservesContext.Provider>
  );
};
