// src/app/components/navbar/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/feedback", label: "Feedback" },
];

const salonName = "Brand";

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // control sheet open/close

    return (
        <nav className="w-full bg-black/70 text-white fixed top-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Brand */}
                <Link href="/" className="text-2xl font-bold">
                    {salonName}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-3 py-1 rounded-md ${pathname === link.href
                                ? "bg-white text-black font-semibold"
                                : "hover:underline hover:underline-offset-4"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant="outline"
                        className="hover:bg-white hover:text-black dark:text-white text-black"
                    >
                        Get Quote
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <HiMenuAlt3 className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-black text-white w-64">
                            <SheetHeader>
                                <SheetTitle className="text-2xl font-bold text-white">
                                    {salonName}
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 flex flex-col space-y-4 text-center">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)} // closes menu when link clicked
                                        className={`px-2 text-lg ${pathname === link.href
                                            ? "text-cyan-400 font-semibold"
                                            : "hover:text-cyan-400"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                {/* Get Quote button in mobile */}
                                <div>
                                    <Button
                                        variant="outline"
                                        className="mt-3 hover:bg-white hover:text-black dark:text-white text-black text-sm"
                                        onClick={() => { window.location.href = '/contact'; }}
                                    >
                                        Get Quote
                                    </Button>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
