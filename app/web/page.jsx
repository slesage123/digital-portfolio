import React from "react";
import Link from "next/link";
import { Phudu } from "next/font/google";

const phudu = Phudu({
    subsets: ["latin"],
    weight: "500"
});


export default function Page(){
    return(
        <main>
            <div className="align-top text-2xl py-4 text-center">
                <h1 className={phudu.className}>
                    Other Web Projects
                </h1>
            </div>
            <div className="text-center p-4 md:py-8">
                <div className="max-w-11/12 text-center">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Link</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="hover:bg-base-300">
                                <th>
                                    <Link href="https://lets-draw-together.glitch.me" className="underline">
                                        Let's Draw Together
                                    </Link>
                                </th>
                                <td>
                                    A Collaborative gestural drawing experience.
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover:bg-base-300">
                                <th>
                                    <Link href="https://new-media-dance-generator.glitch.me" className="underline">
                                        Dance Generator
                                    </Link>
                                </th>
                                <td>
                                    A small project using p5.js and ml5 PoseNet to track the face and hands. Requires webcam permissions.
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr className="hover:bg-base-300">
                                <th>
                                    <Link href="https://electric-flowers.glitch.me" className="underline">
                                        Electric Flowers
                                    </Link>
                                </th>
                                <td>A small in-view project pondering on fleeting things.</td>
                            </tr>
                            {/* row 4 */}
                            <tr className="hover:bg-base-300">
                                <th>
                                    <Link href="https://eye-see-you.glitch.me" className="underline">
                                        Eye See You
                                    </Link>
                                </th>
                                <td>When we look into to void.. Requires webcam permissions.</td>
                            </tr>
                            {/* row 5 */}
                            <tr className="hover:bg-base-300">
                                <th>
                                    <Link href="https://a-glitch-manifesto.glitch.me" className="underline">
                                        Glitch Manifesto
                                    </Link>
                                </th>
                                <td>Archived student work c 2019.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}