const { default: Link } = require("next/link");

import './navbar.css'
 
const routes = [
    {name: "Server", path: "/server"},
    {name: "Client", path: "client"},
    {name: "Staticprop", path: "/staticprop"},
]

export default function Navbar (){
    return (
        <>
        {routes.map(r => (
        <Link className="links" key={r.index} href={r.path}>{r.name}</Link>
        ))}
        </>
    )
}