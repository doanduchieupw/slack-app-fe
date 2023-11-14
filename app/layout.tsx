// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript } from "@mantine/core";
import { larsseit } from "@fonts";
import Providers from "@utils/provider";

export const metadata = {
  title: "Slack",
  description: "I have followed setup instructions carefully",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={larsseit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
