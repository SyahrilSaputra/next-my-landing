import * as React from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";


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
                                    is a software developer with over 2 years of experience, proficient in PHP and
                                    JavaScript, with expertise in frameworks such as Laravel, React JS, React Native,
                                    Bootstrap, and Tailwind CSS. He has successfully built and deployed more than five
                                    applications, focused on enhancing efficiency and streamlining data management.
                                    Passionate about continuous learning and sharing insights in the field of
                                    informatics
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My
                            Projects</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <CardContainer>
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        Make things float in air
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        Hover over this card to unleash the power of CSS perspective
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href="https://twitter.com/mannupaaji"
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            Try now →
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            Sign up
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
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