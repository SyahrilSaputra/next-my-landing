import * as React from "react"

import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Github, Linkedin, Twitter} from "lucide-react";


export default function About() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    About Acme Inc
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Were on a mission to revolutionize the way people work and collaborate.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our
                            Mission</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center mb-12">
                            At Acme Inc, we strive to create innovative solutions that empower businesses and
                            individuals to achieve their full potential. Our cutting-edge technology and user-centric
                            approach are at the heart of everything we do.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Innovation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>We're constantly pushing the boundaries of what's possible in
                                        technology.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Collaboration</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>We believe in the power of teamwork and open
                                        communication.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>User-Centric</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Our users are at the center of every decision we
                                        make.</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our
                            Team</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {name: "Alice Johnson", role: "CEO", image: "/placeholder.svg?height=100&width=100"},
                                {name: "Bob Smith", role: "CTO", image: "/placeholder.svg?height=100&width=100"},
                                {
                                    name: "Carol Williams",
                                    role: "Head of Design",
                                    image: "/placeholder.svg?height=100&width=100"
                                },
                            ].map((member) => (
                                <Card key={member.name}>
                                    <CardHeader>
                                        <Avatar className="w-24 h-24 mx-auto mb-4">
                                            <AvatarImage src={member.image} alt={member.name}/>
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <CardTitle>{member.name}</CardTitle>
                                        <CardDescription>{member.role}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex justify-center space-x-4">
                                        <Button size="icon" variant="ghost">
                                            <Twitter className="h-5 w-5"/>
                                            <span className="sr-only">Twitter</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <Linkedin className="h-5 w-5"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <Github className="h-5 w-5"/>
                                            <span className="sr-only">GitHub</span>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}