
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
            <div className="navbar navbar-start">
                <div className="ps-4">
                    <a className="text-lg">slesage</a>
                </div>
            </div>
            <div className="navbar navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        <svg
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="24px"
                            height="24px"
                        >
                            <path
                                fill="none"
                                stroke="#aeeebf"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M80 160h352M80 256h352M80 352h352"
                             />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                             Links.map((link) => (
                                <li key={link.href}>
                                      <Link href={link.href}>{link.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}