import { IGenUser } from "@/json-server-db/db-types";
import { mountStoreDevtool } from "simple-zustand-devtools";
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
  setCurrentUser: (currentUser) => set({ currentUser }),
  editCurrentUser: (updatedFields) => {
    const currentUser = get().currentUser;
    if (currentUser) {
      set({ currentUser: { ...currentUser, ...updatedFields } });
    }
  },
  deleteCurrentUser: () => set({ currentUser: null }),
  getCurrentUser: () => get().currentUser,
}));

// DEVTOOL INSPECTION!
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("user store", useCurrentUser);
}
