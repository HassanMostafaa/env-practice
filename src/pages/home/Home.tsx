"use client";
import React, { useEffect, type FunctionComponent } from "react";
import { SHome } from "./styles/SHome";
import { IGenUser } from "@/json-server-db/db-types";
import { SimpleCard } from "@/src/components/simple-card/SimpleCard";
import { useCurrentUser } from "@/src/store/useCurrentUser";
import { Counter } from "@/src/store/store";

export interface IHome {
  currentUser: IGenUser | null;
}

export const Home: FunctionComponent<IHome> = ({ currentUser }) => {
  const {
    setCurrentUser,
    currentUser: currentUserState,
    deleteCurrentUser,
  } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      deleteCurrentUser();
    }
  }, [currentUser, setCurrentUser, deleteCurrentUser]);

  const logout = () => {
    deleteCurrentUser();
  };

  return (
    <SHome>
      {!currentUserState && <SimpleCard title={"Welcome guest :)"} text="" />}
      {currentUserState && (
        <SimpleCard
          title={currentUserState.name}
          text={currentUserState.email}
        />
      )}
      {currentUserState && <button onClick={logout}>Logout</button>}
    </SHome>
  );
};
