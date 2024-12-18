"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "./Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";

interface RoomProps {
  room: string; // Room ID passed as a prop
}

const CollabarativeRoom = ({ room }: RoomProps) => {
  return (
    <RoomProvider id={room}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collabrative-room">
          <Header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollabarativeRoom;
