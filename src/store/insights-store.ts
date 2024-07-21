import { create } from "zustand";

interface State {
  panelCount: number[];
  setPanelCount: (panelCount: number[]) => void;
  solarPanelCapacity: number;
  setSolarPanelCapacity: (solarPanelCapacity: number) => void;

  panelVisibility: boolean;
  togglePanelVisibility: (togglePanelVisibility: boolean) => void;
  panelCapacity: number;
  setPanelCapacity: (panelCapacity: number) => void;
}

export const useBuildingInsightStore = create<State>()((set) => ({
  panelCount: [1],
  setPanelCount: (panelCount) => set({ panelCount }),
  solarPanelCapacity: 0,
  setSolarPanelCapacity: (solarPanelCapacity) => set({ solarPanelCapacity }),
  panelVisibility: false,
  togglePanelVisibility: (panelVisibility) => set({ panelVisibility }),
  panelCapacity: 0,
  setPanelCapacity: (panelCapacity) => set({ panelCapacity }),
}));
