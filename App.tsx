import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PostScreen from './screens/PostScreen';

import { NhostClient, NhostReactProvider } from "@nhost/react";
import * as SecureStore from "expo-secure-store";
window = undefined;

const nHost = new NhostClient({
  backendUrl: "https://yheihjsjbgubegcwtbxu.nhost.run",
  clientStorageType: "expo-secure-storage",
  clientStorage: SecureStore
})

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NhostReactProvider nhost={nHost}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </NhostReactProvider>
    );
  }
}
