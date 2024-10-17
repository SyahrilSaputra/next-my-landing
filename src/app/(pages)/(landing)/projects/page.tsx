import * as React from "react"
import {ArrowRight} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        description: "A cutting-edge web application for task management.",
        tags: ["React", "Node.js", "MongoDB"],
        status: "In Progress",
    },
    {
        id: 2,
        title: "Project Beta",
        description: "Mobile app for fitness tracking and workout planning.",
        tags: ["React Native", "Firebase", "Redux"],
        status: "Completed",
    },
    {
        id: 3,
        title: "Project Gamma",
        description: "E-commerce platform with AI-powered recommendations.",
        tags: ["Vue.js", "Python", "TensorFlow"],
        status: "Planning",
    },
    {
        id: 4,
        title: "Project Delta",
        description: "Blockchain-based supply chain management system.",
        tags: ["Solidity", "Ethereum", "Web3.js"],
        status: "In Progress",
    },
    {
        id: 5,
        title: "Project Epsilon",
        description: "Augmented reality app for interior design visualization.",
        tags: ["Unity", "ARKit", "C#"],
        status: "Testing",
    },
    {
        id: 6,
        title: "Project Zeta",
        description: "Cloud-based data analytics platform for businesses.",
        tags: ["Python", "AWS", "Tableau"],
        status: "Completed",
    },
]

export default function ProjectListPage() {
    return (
        <>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
                            Our Projects
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <Card key={project.id} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <Badge variant="outline">{project.status}</Badge>
                                        <Button variant="ghost" size="sm">
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}