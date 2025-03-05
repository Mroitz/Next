import Link from "next/link";
import React from "react";

type Props = {};

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className="flex justify-center font-bold p-5">
                <li className="pr-4">
                    <Link href="/">Home </Link>
                </li>
                <li className="pr-4">
                    <Link href="/cars">Cars</Link>
                </li>
                <li>
                    <Link href="/trucks">Trucks</Link>
                </li>
            </ul>
        </div>
    );
}