import { Car } from '@/lib/types/types'
import React from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    return (
        <div className='bg-gray-800 h-28 m-8' >
            <div className='bg-gray-800 p-8'>{car.name}</div>
        </div>

    )
}