import { IGenUser } from "@/json-server-db/types";
import { create } from "zustand";

interface CurrentUserState {
  currentUser: IGenUser | null;
  setCurrentUser: (user: IGenUser) => void;
  editCurrentUser: (updatedFields: Partial<IGenUser>) => void;
  deleteCurrentUser: () => void;
  getCurrentUser: () => IGenUser | null;
}

export const useCurrentUser = create<CurrentUserState>((set, get) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
  editCurrentUser: (updatedFields) => {
    const currentUser = get().currentUser;
    if (currentUser) {
      set({ currentUser: { ...currentUser, ...updatedFields } });
    }
  },
  deleteCurrentUser: () => set({ currentUser: null }),
  getCurrentUser: () => get().currentUser,
}));
