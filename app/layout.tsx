import "../styles/globals.css";
import Link from "next/link";

// import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Idea Management</title>
      </head>
      <body>
        <main>
          {/* For example this nav will be in every child cause is in the layout */}
          <nav>
            <Link href="/">Home</Link>
            <Link href="/ideas">All Ideas</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
