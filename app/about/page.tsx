import { Geologica } from "next/font/google";

export const geologica = Geologica({
    variable: "--font-geologica",
    subsets: ["latin"],
});

export default function Page(){
    return (
        <div>
            <main>
                <div className="py-6 justify-start">
                    <h1 className={geologica.className}>
                        About
                    </h1>
                </div>
                <div>
                    <p>
                        
                    </p>
                </div>
            </main>
        </div>
    );
}