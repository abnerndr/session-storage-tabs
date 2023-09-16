import { ReactNode, createContext, useEffect, useState } from "react";
import { BrowserTabTracker } from "browser-session-tabs";

interface TabProps {
  sessionId: number | unknown;
  tabKey: number | unknown;
}

export const TabContext = createContext({} as TabProps);

export default function TabContextProvider({
  children,
}: {
  children?: ReactNode;
}) {
  const [sessionId, setSessionId] = useState<number | unknown>(0);
  const [tabKey, setTabKey] = useState<number | unknown>(0);

  BrowserTabTracker.initialize({
    storageKey: "tabs",
    sessionIdGenerator: () => {
      return new Date().getTime();
    },
    sessionStartedCallback: (sessionId, tabId) => {
      console.log("New session", sessionId, tabId);
    },
  });

  useEffect(() => {
    if (BrowserTabTracker) {
      setSessionId(BrowserTabTracker.sessionId);
      setTabKey(BrowserTabTracker.tabId);
    }
  }, []);

  return (
    <TabContext.Provider
      value={{
        sessionId,
        tabKey,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}
