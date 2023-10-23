'use client';

import { createContext, useContext } from "react";
import useDashboardContext from "./useDasbhoardContext";
import { CustomCardProps } from "../components/Card";

interface DashboardContextProps {
  cardsValues: CustomCardProps[];
  t: (...args0: any) => string;
}

const DashboardContext = createContext<DashboardContextProps>({} as DashboardContextProps);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useDashboardContext()
  return (
    <DashboardContext.Provider value={states}>{children}</DashboardContext.Provider>
  )
}

export const useDashboard = () => useContext(DashboardContext);