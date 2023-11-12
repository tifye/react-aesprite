import ReactAseprite from "./react-aseprite";
import React from "react";
import AsepriteWebSocketConnection from "./websocket";
import { AsepriteContext, setAsepriteContext } from "./aseprite-context";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

async function main() {
  const socket = new AsepriteWebSocketConnection();
  await socket.connect();

  const context = new AsepriteContext(socket);
  setAsepriteContext(context);

  ReactAseprite.render(
    <Dialog title="Meep">
      <Button
        text="Click me, Mino!"
        label="Mino"
        focus={false}
        selected={false}
        visible={true}
        onclick={() => console.log("Mino was click")}
      />
      <Button label="Unexcepted" text="Another one?" />
    </Dialog>
  );
}

main();
