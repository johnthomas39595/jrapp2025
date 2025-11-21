import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#522772" translucent={false} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
