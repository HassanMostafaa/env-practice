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

// if (process.env.NODE_ENV === "dev") {
//   mountStoreDevtool("Store1", useStore1);

//   mountStoreDevtool("Store2", useStore2);
// }
