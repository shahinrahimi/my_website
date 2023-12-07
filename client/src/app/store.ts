import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TokenState {
    token:  string | null,
    setToken: (token:string | null) => void
}

export const useAuthStore = create<TokenState>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token:string | null):void => set({ token })        
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => sessionStorage)
        },
    )
)