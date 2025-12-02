import { create } from "zustand";
type UIStore = {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
};
export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: true,
  isDarkMode: false,
  toggleSidebar:() => {
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
  },
  toggleDarkMode:() => {
    set((state) => ({ isDarkMode: !state.isDarkMode }))
  },
}));