![Logo](https://i.ibb.co/3T4SpXz/233321312.jpg)

## Instalação

Instale session-storage-tabs usando npm ou yarn

```bash
  npm install @abner.dev/session-storage-tabs
```

```bash
  yarn add @abner.dev/session-storage-tabs
```

## Uso/Exemplos

- Configure o projeto no arquivo raiz `_page.tsx` no nextjs ou `main.tsx` no reactjs:

```typescript
import { TabContextProvider } from '@abner.dev/session-storage-tabs'

function App() {
  return (
    <TabContextProvider>
      <Component />
    <TabContextProvider/>
  )
}
```

- O proximo passo é pegar os valores de quantas abas do seus sistema estão abertas em seu navegador, por isso criei duas variaveis importantes `sessionId` que indentifica o id do navegador e `tabKey` que indentifica a aba que o usuário está acessando no momento:

```typescript
import { useContext } from "react";
import { TabContext, TabProps } from "@abner.dev/session-storage-tabs";

function Index() {
  const { sessionId, tabKey }: TabProps = useContext(TabContext);

  return (
    <div>
      <span>{sessionId}<span/>
      <span>{tabKey}<span/>
    <div/>
  );
}
```

## Demonstração

![App Screenshot](https://i.ibb.co/BwkyP67/Captura-de-tela-2023-09-16-160250.png)

## Stack utilizada

**Front-end:** React + Vite + Context + Typescript

**Back-end:** BrowserTabTracker
