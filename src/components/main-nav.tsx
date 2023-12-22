import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import Avatar from "./avatar";

async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-12 py-4 border-b border-b-gray-200 flex justify-between">
      <div>
        <h1>Test</h1>
      </div>
      <div>
        <div className="space-x-2">
          <div className="w-8 h-8 rounded-full">
            <Avatar src={session?.user?.image} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
