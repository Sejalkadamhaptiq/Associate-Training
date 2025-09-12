export const Hero = (params) =>{
    return (
        <section>
            <h1>{params.blok.headline}</h1>
            <p>{params.blok.content}</p>
        </section>
    )
}