import * as React from "react"

import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"


export default function Home() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Hi
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Discover the power of our innovative solutions. Streamline your workflow and boost
                                    productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our
                            Features</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Intuitive Design</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Our user-friendly interface ensures a smooth experience for all
                                        users.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Powerful Analytics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Gain valuable insights with our advanced analytics
                                        tools.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Seamless Integration</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>Easily integrate with your existing tools and
                                        workflows.</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}