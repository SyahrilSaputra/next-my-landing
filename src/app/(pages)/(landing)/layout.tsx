import {Header} from "@/components/landing_layout_items/header";
import * as React from "react";
import {Footer} from "@/components/landing_layout_items/footer";

export default function LandingLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}