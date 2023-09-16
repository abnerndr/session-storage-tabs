import { ReactNode, createContext, useEffect, useState } from "react";
import { BrowserTabTracker } from "browser-session-tabs";

export type TabProps = {
  sessionId: any;
  tabKey: any;
};

export const TabContext = createContext({} as TabProps);

export default function TabContextProvider({
  children,
}: {
  children?: ReactNode;
}) {
  const [sessionId, setSessionId] = useState<any>(null);
  const [tabKey, setTabKey] = useState<any>(null);

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
