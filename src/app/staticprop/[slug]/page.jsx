async function getServerProps(){
    const serverRes = await fetch("https://rickandmortyapi.com/api/character", {
        cache: "no-store"
    })
    return serverRes.json()
}

// get staticPath 

export async function generateStaticParams(){
    const characters = await getServerProps()

    return characters?.results.map(c => (
        {
            slug: c?.type.replace(/\s+/g,"-").toLowerCase()
        }
    ))

}

export default function Staticpage({params}){
    return (
        <>
        <p>The character man is: {params.slug} </p>
        
        </>
    )
}
