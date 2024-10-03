export const metadata = {
  title: "Web Journal Studio",
  description:
    "This is a Web Journal Studio. You can create, edit and publish your thoughts and articles as you want.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
