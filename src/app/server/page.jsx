import Link from "next/link"

import {use} from "react"

async function getServerProps(){
    const serverRes = await fetch("https://rickandmortyapi.com/api/character", {
        cache: "no-store"
    })
    return serverRes.json()
}

export default function ServerPage (){

const res = use(getServerProps())
    return(
        <div>
    
    <h1>this is server</h1>
{res?.results.map(c => (
     <ul key={c.id}>
     <Link href={`/server/${c.name}.replace(/\s+/g)`.toLocaleLowerCase()}>
     <li>{c.name}</li>
     </Link>
    
    </ul>

))}
   
        </div>
    )
    }
    
    