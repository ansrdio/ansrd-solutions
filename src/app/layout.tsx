import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANSRD Solutions — Cybersecurity Governance for SMEs",
  description:
    "Get certified and secure without hiring a CISO. We turn Cyber Essentials, ISO 27001, NIST CSF and SOC 2 into prioritized implementation plans your team can follow.",
  metadataBase: new URL("https://www.ansrdsolutions.com"),
  openGraph: {
    type: "website",
    title: "ANSRD Solutions — Cybersecurity Governance for SMEs",
    description:
      "Get certified and secure without hiring a CISO. Behaviour-driven implementation for Cyber Essentials, ISO 27001, NIST CSF and SOC 2.",
    url: "https://www.ansrdsolutions.com",
    siteName: "ANSRD Solutions",
    // TODO: create 1200×630 OG image at /public/og-image.png
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ANSRD Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANSRD Solutions — Cybersecurity Governance for SMEs",
    description:
      "Get certified and secure without hiring a CISO. Behaviour-driven implementation for SMEs.",
    // TODO: same OG image
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ANSRD Solutions Ltd",
              url: "https://www.ansrdsolutions.com",
              // TODO: [LOGO PATH] — update once logo is in /public
              logo: "https://www.ansrdsolutions.com/logo.png",
              description:
                "Behaviour-driven cybersecurity governance and implementation for SMEs.",
              // TODO: [CONTACT EMAIL]
              email: "hello@ansrdsolutions.com",
              // TODO: [LINKEDIN URL]
              sameAs: ["https://linkedin.com/company/ansrd"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
                // TODO: [REGISTERED ADDRESS]
                streetAddress: "[REGISTERED ADDRESS]",
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
