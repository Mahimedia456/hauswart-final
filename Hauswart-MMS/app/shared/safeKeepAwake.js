import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";

export async function safeActivateKeepAwake() {
  try {
    await activateKeepAwakeAsync();
  } catch (e) {
    // ignore in production / if not supported
  }
}

export function safeDeactivateKeepAwake() {
  try {
    deactivateKeepAwake();
  } catch (e) {
    // ignore
  }
}
