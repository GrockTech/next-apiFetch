"use client"
import Link from 'next/link'
import useSWR from 'swr'


const  fetcher  = (path) => fetch(`https://rickandmortyapi.com/${path}`).then(res => res.json())


export default function ClientPage (){
    const characters = useSWR("api/character", fetcher)
return(
    <div>
<h1>This is client page</h1>
        {characters?.data?.results.map(c =>(
            <ul key={c.id}>
                <Link href={`/staticprop/${c.name}`}>
                <li>{c.name}</li>
                </Link>
            </ul>
        ))}


    </div>
)
}

