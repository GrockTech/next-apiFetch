import Link from "next/link"

import {use} from "react"


// get static prop function 

async function getCharacters(){
const character = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "force-cache"
})

return  character.json()
}

export default function StaticPage (){
    const allCharacter = use(getCharacters())
    return(
        <div>
<h1>Static Props</h1>
{allCharacter?.results.map(cha => (
    <ul key={cha.id}>
        <Link href={`/staticprop/${cha.name}`.replace(/\s+/g).toLocaleLowerCase()}>
        <li>{cha.name}</li>
        </Link>
        
    </ul>
))}
    
        </div>
    )
    }
    
    