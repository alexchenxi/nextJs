import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="description" content="This is a demo dashboard for invoices created by Alex"/>
      <title>Alex Invoices Manage Dashboard</title>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
