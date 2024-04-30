"use client";

import { LinkIcon, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-switcher";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";

function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="sticky top-0 flex h-20 items-center justify-between gap-4 border-b px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold md:text-base"
        >
          <LinkIcon className="h-6 w-6" />
          <span className="text-xl hover:underline">Sam&apos;s Links</span>
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground",
            segment === null ? "text-foreground" : "text-muted-foreground",
          )}
        >
          Upload
        </Link>
        <Link
          href="/links"
          className={cn(
            "transition-colors hover:text-foreground",
            segment === "links" ? "text-foreground" : "text-muted-foreground",
          )}
        >
          Links
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <LinkIcon className="h-6 w-6" />
              <div>Sam&apos;s Links</div>
            </Link>
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground",
                segment === null ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Upload
            </Link>
            <Link
              href="/links"
              className={cn(
                "transition-colors hover:text-foreground",
                segment === "links"
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              Links
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant={"secondary"}>Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Navbar;
