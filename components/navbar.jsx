
import React from "react";
import Link from "next/link";

const Links = [
    { href: "/", text: "Home" },
    {href : "/portfolio", text : "Portfolio"},
    { href: "/about", text: "About" },
];

export default function Navbar() {
    return (
        <nav className="bg-base-300">
            <ul className="menu md:ml-8 sm:flex-row">
                {
                  Links.map((link) => (
                       <li key={link.href}>
                        <Link href={link.href}>{link.text}</Link>
                       </li>
                  ))
                }
            </ul>
        </nav>
    );
}