import {
  AmityUiKitProvider,
  AmityUiKitFeed,
} from "@amityco/ui-kit-open-source";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <AmityUiKitProvider
          apiKey={process.env.NEXT_PUBLIC_AMITY_API_KEY!}
          userId="601"
          apiRegion="us"
          displayName="John Doe"
          getAuthToken={getAuthToken}
        >
          <AmityUiKitFeed
            showPostCreator={true}
            targetType="community"
            targetId="670cda39f3aab1c6a82cff2a"
          />
        </AmityUiKitProvider>
      </div>
    </div>
  );
}

export async function getAuthToken(): Promise<string> {
  return Promise.resolve(process.env.NEXT_PUBLIC_AMITY_AUTH_TOKEN!);
}
