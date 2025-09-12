import { StoryblokComponent } from "@storyblok/react";

export const Grid = (params) =>{
    return (
        <section>
            <h2>{params.blok.headlines}</h2>
            {params.blok.items.map((blok)=>{
                <StoryblokComponent blok={blok} key={blok._uid}/>
            })}
        </section>
    )
}