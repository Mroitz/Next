import React from "react";
import { Car } from "@/lib/types/types";
import CarList from "../components/Cars/carlist";
type Props = {};

const cars: Car[] = [
    {
        name: "Bugatti Chiron Super Sport 300+",
        type: "Hypercar",
        color: "Jet Black with Orange Stripes",
        motor: {
            serialNumber: 4587,
            hp: 1578,
        }
    },
    {
        name: "Koenigsegg Jesko Absolut",
        type: "Hypercar",
        color: "Graphite Grey",
        motor: {
            serialNumber: 6723,
            hp: 1600,
        }
    },
    {
        name: "Rimac Nevera",
        type: "Electric Hypercar",
        color: "Pearl White",
        motor: {
            serialNumber: 9102,
            hp: 1914,
        }
    },
    {
        name: "McLaren Speedtail",
        type: "Hybrid Hypercar",
        color: "Liquid Silver",
        motor: {
            serialNumber: 3356,
            hp: 1036,
        }
    },
    {
        name: "Pagani Huayra Roadster BC",
        type: "Hypercar",
        color: "Carbon Blue",
        motor: {
            serialNumber: 7811,
            hp: 791,
        }
    }
];


export default function page({ }: Props) {
    return (
        <div>
            <div className="pl-8 text-2xl font-bold">Cars</div>
            <CarList cars={cars}></CarList>
        </div>
    );
}