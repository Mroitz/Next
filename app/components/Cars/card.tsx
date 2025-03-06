"use client";
import { Car } from '@/lib/types/types'
import React, { useState } from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`rounded-xl p-4 m-8 border-4 cursor-pointer ${isActive ? "bg-green-900" : "bg-gray-600"}`} onClick={() => {
            setIsActive(!isActive);
        }}>
            <div className='font-bold text-2xl'>{car.name}</div>
            <div className=''>{car.type}</div>
            <div className=''>{car.color}</div>
            <div className='pt-5 font-bold'>
                <div>HP: {car.motor.hp}</div>
                <div>SerialNumber {car.motor.serialNumber}</div>
            </div>
            {isActive ? "active" : "inactive"}

        </div>

    )
}