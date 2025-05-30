"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button/Button";

export default function NavButton({ href, children }) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);

  return (
    <Link href={href} aria-current={active ? "page" : undefined}>
      <Button data-active={active}>{children}</Button>
    </Link>
  );
}
