import { type ReactNode } from "react";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface OverlayState {
  isOpen: boolean;
  overlay: { state: string; content?: ReactNode };
  history: { state: string; content?: ReactNode }[];
}

export const useOverlayStore = create(
  combine(
    {
      isOpen: false,
      overlay: { state: "IDLE" },
      history: [],
    } as OverlayState,
    (set) => ({
      openOverlay: (state: string, content?: ReactNode) =>
        set((current) => ({
          isOpen: true,
          overlay: { state, content },
          history:
            current.overlay.state === "IDLE"
              ? [{ state, content }]
              : [...current.history, current.overlay],
        })),
      popOverlay: () =>
        set((current) =>
          current.history.length <= 1
            ? {
                isOpen: false,
                overlay: { state: "IDLE" },
                history: [],
              }
            : {
                overlay: current.history.slice(0, -1).at(-1)!,
                history: current.history.slice(0, -1),
              },
        ),
      closeOverlay: () =>
        set({ isOpen: false, overlay: { state: "IDLE" }, history: [] }),
    }),
  ),
);
