import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const Ctx = createContext(null);

export function TaskSessionProvider({ children }) {
  const [taskId, setTaskId] = useState(null);

  const [status, setStatus] = useState("inProgress"); // inProgress | onHold | completed
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const tickRef = useRef(null);

  const stopTick = useCallback(() => {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = null;
  }, []);

  const startTick = useCallback(() => {
    stopTick();
    tickRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
  }, [stopTick]);

  useEffect(() => {
    // sync running -> interval
    if (running) startTick();
    else stopTick();
    return () => stopTick();
  }, [running, startTick, stopTick]);

  const ensureTask = useCallback((id, init = {}) => {
    setTaskId(id);

    // only set init when first time / changed task
    setStatus((prev) => (prev ? prev : init.status ?? "inProgress"));
    setElapsed((prev) => (typeof prev === "number" && prev > 0 ? prev : init.elapsed ?? 0));

    const s = init.status ?? "inProgress";
    setRunning(s === "inProgress");
    setStatus(s);
  }, []);

  // ✅ ACTIONS (THIS is what your screens need)
  const hold = useCallback(({ reason, notes } = {}) => {
    setStatus("onHold");
    setRunning(false);
    // you can store reason/notes in another state if you want
  }, []);

  const resume = useCallback(({ notes } = {}) => {
    setStatus("inProgress");
    setRunning(true);
  }, []);

  const complete = useCallback(({ notes, checks } = {}) => {
    setStatus("completed");
    setRunning(false);
  }, []);

  const value = useMemo(
    () => ({
      session: { taskId, status, elapsed, running },
      ensureTask,
      hold,
      resume,
      complete,
    }),
    [taskId, status, elapsed, running, ensureTask, hold, resume, complete]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTaskSession() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTaskSession must be used inside TaskSessionProvider");
  return v;
}
