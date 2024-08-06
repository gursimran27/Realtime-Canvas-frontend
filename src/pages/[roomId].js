import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import Board from "@/components/Board";
import { useEffect, useRef } from "react";
import { connectSocket, socket } from "@/socket";
import Close from "@/components/close";
import { useRouter } from "next/router";
import CopySection from "@/components/CopySection";

export default function Room() {
  const { roomId } = useRouter().query;
  const emitEventref = useRef(false);
  // console.log(roomId);

  if (!socket) {
    connectSocket();
    console.log(socket);
  }

  useEffect(() => {
    if (!socket || !roomId || emitEventref.current) return;

    emitEventref.current = true;
    // console.log("insite", roomIdref.current);

    socket.emit("join-room", roomId);

  }, [socket, roomId]);

  useEffect(() => {
    if (!socket) return;

    const handleUserJoined = () => {
      // console.log("New user joined room");
    };

    socket.on("joined-room", handleUserJoined);

    return () => {
      socket.off("joined-room", handleUserJoined);
    };
  }, [socket]);
  return (
    <>
      <Menu />
      <Toolbox />
      <Board />
      <div className=" absolute top-5 right-2 lg:right-5">
        <Close />
      </div>
      <div>
        <CopySection roomId={roomId} />
      </div>
    </>
  );
}
