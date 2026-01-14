import { create } from 'zustand';

interface ToastState {
  message: string | null;
  timeoutId: number | null;
  show: (msg: string, duration?: number) => void;
  clear: () => void;
}

export const useToastStore = create<ToastState>((set, get) => ({
  message: null,
  timeoutId: null,

  show: (msg, duration = 1500) => {
    const prev = get().timeoutId;
    if (prev != null) window.clearTimeout(prev);

    set({ message: msg });

    const id = window.setTimeout(() => {
      set({ message: null, timeoutId: null });
    }, duration);

    set({ timeoutId: id });
  },
  clear: () => {
    const prev = get().timeoutId;
    if (prev != null) window.clearTimeout(prev);
    set({ message: null, timeoutId: null });
  },
}));
