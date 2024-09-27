"use client";

import dynamic from "next/dynamic";

const AmityUiKitProvider = dynamic(
  () => import("@amityco/ui-kit").then((m) => m.AmityUiKitProvider),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <AmityUiKitProvider
        apiKey="<REPLACE WITH API KEY>"
        userId="<USER ID>"
        apiRegion="us"
        displayName="Jane"
        getAuthToken={getAuthToken}
      ></AmityUiKitProvider>
    </div>
  );
}

export async function getAuthToken(): Promise<string> {
  return Promise.resolve("<REPLACE WITH AUTH TOKEN>");
}
