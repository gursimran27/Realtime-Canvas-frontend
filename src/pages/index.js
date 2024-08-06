import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { connectSocket } from "@/socket";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    connectSocket();
    router.push(`/${roomId}`);
  };
  
  const joinRoom = () => {
    if (roomId) {
      connectSocket();
      router.push(`/${roomId}`);
    } else {
      alert("Please provide a valid room id");
    }
  };
  return (
    <>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className=" flex justify-center items-center w-[100vw] h-[100vh] absolute ">
        <div
          className={` w-4/12 min-w-max mx-auto p-2   rounded-2xl mt-8 text-white flex flex-col items-center justify-evenly gap-3  border-2 border-[#06040430] bg-[#ffffff1a] backdrop-blur-sm`}
        >
          <h1 className=" text-2xl font-semibold text-center mt-4 select-none">
            Canvas App
          </h1>
          <div className={` flex flex-col items-center mt-3 w-full gap-4`}>
            <input
              className=" text-black text-lg p-1 rounded w-9/12 mb-3"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e?.target?.value)}
            />
            <button
              className=" bg-buttonPrimary py-2 px-4 rounded mb-4 hover:scale-[0.9] transition-all duration-300"
              onClick={joinRoom}
            >
              Join Room
            </button>
          </div>
          <span className={`my-3 text-xl -mt-1`}>
            --------------- OR ---------------
          </span>
          <button
            className=" bg-buttonPrimary py-2 px-4 rounded mb-4 hover:scale-[0.9] transition-all duration-300"
            onClick={createAndJoin}
          >
            Create a new room
          </button>
        </div>
      </div>
    </>
  );
}
