import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: 'none' }}
      />
      <Stack.Screen
        name="Screens/newNote/index"
        options={{ headerShown: false, animation: 'none' }}
      />
      <Stack.Screen
        name="Screens/settings/index"
        options={{ headerShown: false, animation: 'none' }}
      />
      <Stack.Screen
        name="Screens/summary/index"
        options={{ headerShown: false, animation: 'none' }}
      />
      <Stack.Screen
        name="Screens/viewNote/index"
        options={{ headerShown: false, animation: 'none' }}
      />
      <Stack.Screen
        name="Screens/viewCategory/index"
        options={{ headerShown: false, animation: 'none' }}
      />
    </Stack>
  );
}
