import { create } from "zustand";
type UIStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: (mode?: boolean) => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
};
export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: false,
  isDarkMode: false,
  toggleSidebar:() => {
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
  },
  toggleDarkMode:(mode?: boolean) => {
    if(mode !== undefined){
      set(() => ({ isDarkMode: mode }))
      return;
    }
    set((state) => ({ isDarkMode: !state.isDarkMode }))
  },
  pageTitle: "الرئيسية",
  setPageTitle:(title) => {
    set(() => ({ pageTitle: title }))
  },
}));