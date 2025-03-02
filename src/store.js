import create from "zustand";

const useSheetStore = create((set) => ({
  data: [["A", "B", "C"], ["1", "2", "3"]],
  updateData: (newData) => set({ data: newData }),
}));

export default useSheetStore;
