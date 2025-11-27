import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
    return (
        <div className="w-full relative h-screen overflow-hidden">
            <Image
                src="/hero-image.gif"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute w-full flex flex-col items-center mt-24">
                <h2 className="font-bold text-7xl font-game-font">
                    Start Your
                </h2>
                <h3
                    className="font-bold text-8xl font-game-font text-yellow-400"
                    style={{
                        textShadow:
                            "2px 2px 0 #000, -2px -2px 0 #000,2px 2px 0 #000, -2px -2px 0 #000",
                    }}
                >
                    Coding Adventure Today !
                </h3>
                <h4 className="mt-5 font-game-font text-3xl">
                    Biginner friendly coding courses and projects
                </h4>
                <Button
                    className="font-game-font text-3xl p-6 mt-6"
                    variant={"pixel"}
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    );
}

export default Hero;
