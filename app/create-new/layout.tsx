"use client";
import SlackLogo from "@images/logo/slack-logo.svg";
const CreateNewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="center py-10">
        <SlackLogo className="h-6 object-cover" />
      </header>
      <div>{children}</div>
    </div>
  );
};

export default CreateNewLayout;
