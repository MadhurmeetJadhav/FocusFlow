import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <SafeAreaProvider>
            <Provider store={store}>{children}</Provider>
        </SafeAreaProvider>
    )
}