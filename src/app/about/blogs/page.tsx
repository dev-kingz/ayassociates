import PhotoCard from "@/components/Cards/PhotoCard";
import PhotoTextCard from "@/components/Cards/PhotoTextCard";
import SectionHeader from "@/components/Header/SectionHeader";
import TitleHeader from "@/components/Header/TitleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
    return (
        <div className="flex grow flex-col items-center self-stretch">
            <div className="relative flex h-[15vh] w-full items-center justify-end">
                <Image
                    src="/gallery/backgrounds/footer.jpg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    className="z-0 "
                />
            </div>
            <h1 className="py-10 text-6xl text-secondary">
                Coming Soon
            </h1>
        </div >
    );
};

export default BlogsPage;
