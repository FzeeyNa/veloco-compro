import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace — Coming Soon | Veloco.",
  description:
    "Veloco Marketplace — Template website siap pakai untuk segala kebutuhan bisnis Anda. Segera hadir.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
