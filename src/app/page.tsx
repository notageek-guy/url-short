import { LoginButton, LogoutButton } from "@/components/auth-buttons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

import React from "react";

async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session && session.user && <LogoutButton />}

      {!session && <LoginButton />}
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Page;
