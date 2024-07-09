'use client';
import { useRouter } from "next/navigation"
import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import { Layers, LayersIcon } from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"



export function TopNavMenuProjects() {
    const favProjects = [
        {
            id: 1,
            name: "Project 1",
        },
        {
            id: 2,
            name: "Project 2",
        },
        {
            id: 3,
            name: "Project 3",
        },
    ]

    const recentProjects = [
        {
            id: 4,
            name: "Project 4",
        },
        {
            id: 5,
            name: "Project 5",
        },
        {
            id: 6,
            name: "Project 6",
        },
    ]

    const router = useRouter();
    const handleClick = (key: number) => {
        if (key === 0) {
            router.push('/projects')
        } else {
            router.push(`/projects/${key}`)
        }
    }
    return (
        
        <div className="grow">

        <Command className="rounded-lg border shadow-md h-full">
            
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Dashboard">
                    <CommandItem onSelect={(() => handleClick(0))}>
                        <LayersIcon className="mr-2 h-4 w-4" />
                        <span>Project Dashboard</span>
                        {/* <CommandShortcut>⌘P</CommandShortcut> */}
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading={`Favourites (${favProjects.length})`}>
                    {favProjects.map((project) => (
                        <CommandItem onSelect={() => handleClick(project.id)} key={project.id}>
                            {/* <LayersIcon className="mr-2 h-4 w-4" /> */}
                            <span>{project.name}</span>
                        </CommandItem>
                    ))}
                   
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading={`Recent (${recentProjects.length})`}>
                    {recentProjects.map((project) => (
                        <CommandItem onSelect={() => handleClick(project.id)} key={project.id} >
                            {/* <LayersIcon className="mr-2 h-4 w-4" /> */}
                            <span>{project.name}</span>
                        </CommandItem>
                    ))}
                    
                </CommandGroup>
                
            </CommandList>
        </Command>
        </div>
    )
}

