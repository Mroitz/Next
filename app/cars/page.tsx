import React from "react";
import Card from "../components/Cars/card";
import { Car } from "@/lib/types/types";
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
            <div className="text-2xl">Cars</div>

            <div className="grid-cols-4 ">
                {cars.map((car: Car) => (
                    <Card car={car} />
                ))}
            </div>

        </div>
    );
}