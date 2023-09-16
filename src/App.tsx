import { useContext } from "react";
import { TabContext } from "./provider/TabProvider";

function App() {
  const { sessionId, tabKey } = useContext(TabContext);
  const newObject = Object.values([
    {
      id: sessionId,
      key: tabKey,
    },
  ]).map((item) => ({ id: item.id, key: item.key }));
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <a href="https://ltzcapital.com.br" target="_blank">
          <img
            src="https://ltzcapital.com.br/_templates/site/assets/images/logo-ltz.png"
            alt="Vite logo"
          />
        </a>
        <span
          style={{
            marginLeft: "2%",
            marginRight: "2%",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          +
        </span>
        <a href="https://ltzcapital.com.br" target="_blank">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocI51bS-DG7vCX8ypBNxwbUn16BpnNpaLc4U8FOGs1VOizk=s288-c-no"
            style={{
              width: "100px",
              borderRadius: "100%",
            }}
            alt="Vite logo"
          />
        </a>
      </div>
      {/* <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <code>
          My lib{" "}
          <a
            style={{
              textDecoration: "none",
            }}
            href=""
          >
            <span
              style={{
                background: "#282828",
                color: "#c2c2c2",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              session-storage-tabs
            </span>{" "}
          </a>
          with managment tabs
        </code>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {newObject.map((item: any) => (
          <h3
            style={{
              width: "20%",
              background: "#282828",
              color: "#c2c2c2",
              padding: "4px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <span>{item.id}</span> - <span>tab: {item.key}</span>
          </h3>
        ))}
      </div> */}
    </>
  );
}

export default App;
