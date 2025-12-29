export async function safeActivateKeepAwake() {
  try {
    const mod = await import("expo-keep-awake");
    if (mod?.activateKeepAwake) {
      await mod.activateKeepAwake();
    }
  } catch (e) {}
}

export async function safeDeactivateKeepAwake() {
  try {
    const mod = await import("expo-keep-awake");
    if (mod?.deactivateKeepAwake) {
      await mod.deactivateKeepAwake();
    }
  } catch (e) {}
}
