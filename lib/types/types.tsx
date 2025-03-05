export interface Motor {
    serialNumber: number;
    hp: number;
}

export interface Car {
    name: string;
    type: string;
    color: string;
    motor: Motor;
}

