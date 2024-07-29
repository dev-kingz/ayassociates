import AboutCard from "@/components/Cards/AboutCard";
import PhotoCard from "@/components/Cards/PhotoCard";
import PhotoTextCard from "@/components/Cards/PhotoTextCard";
import SectionHeader from "@/components/Header/SectionHeader";
import TitleHeader from "@/components/Header/TitleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { FaUmbrellaBeach } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { ProjectHighlightsCarousel } from "@/components/Carousel/ProjectHighlightsCarousel";
import { TrulifeHeaderCarousel } from "@/components/Carousel/TrulifeHeaderCarousel";
import { TrulifeResortHeaderCarousel } from "@/components/Carousel/TrulifeResortHeaderCarousel";

const TruLife = () => {
    return (
        <div className="flex grow flex-col items-center self-stretch">
            <TrulifeResortHeaderCarousel/>
        
        </div >
    );
};

export default TruLife ;
