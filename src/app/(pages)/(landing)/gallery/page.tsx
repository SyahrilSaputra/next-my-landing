import * as React from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";

const galleryItems = [
    { id: 1, src: "/placeholder.svg?height=500&width=500", alt: "Gallery Image 1", title: "Image 1", description: "Description for Image 1" },
    { id: 2, src: "/placeholder.svg?height=500&width=500", alt: "Gallery Image 2", title: "Image 2", description: "Description for Image 2" },
    { id: 3, src: "/placeholder.svg?height=500&width=500", alt: "Gallery Image 3", title: "Image 3", description: "Description for Image 3" },
    { id: 4, src: "/placeholder.svg?height=500&width=500", alt: "Gallery Image 4", title: "Image 4", description: "Description for Image 4" },
    { id: 5, src: "/placeholder.svg?height=500&width=500", alt: "Gallery Image 5", title: "Image 5", description: "Description for Image 5" },
    { id: 6, src: "/placeholder.svg?height=500&width=500", alt: "Gallery Image 6", title: "Image 6", description: "Description for Image 6" },
]

export default function Gallery() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
                            Our Gallery
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryItems.map((item) => (
                                <Dialog key={item.id}>
                                    <DialogTrigger asChild>
                                        <div className="cursor-pointer overflow-hidden rounded-lg">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={500}
                                                height={500}
                                                className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[625px]">
                                        <DialogHeader>
                                            <DialogTitle>{item.title}</DialogTitle>
                                            <DialogDescription>{item.description}</DialogDescription>
                                        </DialogHeader>
                                        <div className="mt-4">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={500}
                                                height={500}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}