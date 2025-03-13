import { Geologica } from "next/font/google";

export const geologica = Geologica({
    variable: "--font-geologica",
    subsets: ["latin"],
});

export default function Page(){
    return (
        <div>
            <main className="p-4 max-w-3xl">
                <div className="py-6 justify-start">
                    <h1 className={geologica.className}>
                        About
                    </h1>
                </div>
                <div className="p-4 text-left">
                    <p>
                        Welcome! My name is Sam and I am a graphic designer, front-end developer, and multi-media artist. My professional work spans many different fields but above all I have found adaptability, resilience, and patience to be great strengths no matter where I happen to be. I have a love for puzzles, both visual and logic-based, and like to look at every challenge as a puzzle to be solved. After all, every failure is an opportunity to learn and look at something from another point of view. 
                    </p>
                    <p>
                        I hold a BFA from the Minneapolis College of Art and Design in Web and Multimedia Environments and a minor in Advertising. My major allowed me to rediscover my love for programming while also honing my design and ideation skills, and introducing me to interactive media.
                    </p>
                    <br></br>
                    <p>
                        When I am not hunting down bugs or discussing color palettes I can be found hiking through the woods, trying out a new baking recipe, or reading in the sun with my cat.
                    </p>
                    <br></br>
                    <p>
                        Curious about any of my qualifications? Please feel free to get in touch!
                    </p>
                </div>
            </main>
        </div>
    );
}