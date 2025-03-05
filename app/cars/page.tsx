import React from "react";
import Card from "../components/Cars/card";
import { Car } from "@/lib/types/types";
type Props = {};

const car1: Car = {
    name: "Bugatti Chiron Super Sport 300+",
    type: "Hypercar",
    color: "Jet Black with Orange Stripes",
    motor: {
        serialNumber: 4587,
        hp: 1578,
    }
};

const car2: Car = {
    name: "Koenigsegg Jesko Absolut",
    type: "Hypercar",
    color: "Graphite Grey",
    motor: {
        serialNumber: 6723,
        hp: 1600,
    }
};

const car3: Car = {
    name: "Rimac Nevera",
    type: "Electric Hypercar",
    color: "Pearl White",
    motor: {
        serialNumber: 9102,
        hp: 1914,
    }
};

const car4: Car = {
    name: "McLaren Speedtail",
    type: "Hybrid Hypercar",
    color: "Liquid Silver",
    motor: {
        serialNumber: 3356,
        hp: 1036,
    }
};

const car5: Car = {
    name: "Pagani Huayra Roadster BC",
    type: "Hypercar",
    color: "Carbon Blue",
    motor: {
        serialNumber: 7811,
        hp: 791,
    }
};

export default function page({ }: Props) {
    return (
        <div>
            <div className="text-2xl">Cars</div>
            <Card car={car1}></Card>
            <Card car={car2}></Card>
            <Card car={car3}></Card>
            <Card car={car4}></Card>
            <Card car={car5}></Card>
        </div>
    );
}