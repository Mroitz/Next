import React from 'react'
import Card from './card'
import { Car } from '@/lib/types/types'

type Props = { cars: Car[] }

export default function CarList({ cars }: Props) {
    return (
        <div >
            <div className='grid grid-cols-2 md:grid-cols-4'>
                {cars.map((car: Car) => (
                    <Card car={car} />
                ))}
            </div>
        </div>

    )
}