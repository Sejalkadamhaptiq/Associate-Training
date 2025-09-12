"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Grid } from "./Grid";


storyblokInit({
    components: {
        tour:Tour,
        page:Page,
        hero: Hero,
        grid:Grid,

    },
    enableFallbackComponent: true,
})

export const StoryblokProvider =({children})=>{
    return <>{children}</>
}   