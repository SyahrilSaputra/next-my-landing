import Link from "next/link";
import {Menu, Mountain} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import * as React from "react";

export const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <Mountain className="h-6 w-6"/>
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    About Me
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Gallery
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Contact
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">
                        <Menu className="h-6 w-6"/>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="flex flex-col gap-4">
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Features
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Pricing
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            About
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}