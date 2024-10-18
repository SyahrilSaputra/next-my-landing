import Link from "next/link";
import {Menu, Mountain} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {ModeToggle} from "@/components/landing_layout_items/theme-switcher";

export const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <Mountain className="h-6 w-6"/>
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 hidden lg:block">
                <ModeToggle/>
                <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/">
                    Beranda
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/about">
                    About Me
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/gallery">
                    Gallery
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/projects">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="#">
                    Contact
                </Link>
            </nav>
            <div className={'ml-auto flex gap-4 sm:gap-6 block lg:hidden'}>

            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden right" size="icon" variant="outline">
                        <Menu className="h-6 w-6"/>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="flex flex-col gap-4">
                        <ModeToggle/>
                        <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/">
                            Beranda
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/about">
                            About Me
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/gallery">
                            Gallery
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="/projects">
                            Projects
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4 mx-4" href="#">
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}