import { create } from "zustand";
import type { Plant } from "@/data/plants";

export interface CartItem {
  plant: Plant;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (plant: Plant) => void;
  removeItem: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setOpen: (open: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (plant: Plant) => {
    const { items } = get();
    const existing = items.find((i) => i.plant.id === plant.id);
    if (existing) {
      set({
        items: items.map((i) =>
          i.plant.id === plant.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ items: [...items, { plant, quantity: 1 }] });
    }
    set({ isOpen: true });
  },

  removeItem: (plantId: string) => {
    const { items } = get();
    set({ items: items.filter((i) => i.plant.id !== plantId) });
  },

  updateQuantity: (plantId: string, quantity: number) => {
    const { items } = get();
    if (quantity <= 0) {
      set({ items: items.filter((i) => i.plant.id !== plantId) });
      return;
    }
    set({
      items: items.map((i) =>
        i.plant.id === plantId ? { ...i, quantity } : i
      ),
    });
  },

  clearCart: () => set({ items: [] }),

  toggleCart: () => set({ isOpen: !get().isOpen }),
  setOpen: (open: boolean) => set({ isOpen: open }),

  getTotalItems: () =>
    get().items.reduce((sum, item) => sum + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((sum, item) => sum + item.plant.price * item.quantity, 0),
}));
