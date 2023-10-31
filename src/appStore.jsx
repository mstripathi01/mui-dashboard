import create from "zustand";
import { persist } from "zustand/middleware"; // to store data of javascript in local storage

let appStore = (set) => ({
  dopen: true,
  setRows : (rows) => set((state) => ({rows : rows})),
  updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

appStore = persist(appStore, { name: "my_app_store" });
export const useAppStore = create(appStore);
