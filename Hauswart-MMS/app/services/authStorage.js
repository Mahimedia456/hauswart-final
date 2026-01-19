import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "hauswart_token";
const ROLE_KEY = "hauswart_role";

export async function saveAuth(token, role) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(ROLE_KEY, role);
}

export async function getAuth() {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  const role = await AsyncStorage.getItem(ROLE_KEY);
  return { token, role };
}

export async function clearAuth() {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.removeItem(ROLE_KEY);
}
