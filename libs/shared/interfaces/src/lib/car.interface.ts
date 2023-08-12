import { CarColor, CarType } from "@nx-carstore-monorepo/shared/types";
import { IMake } from "./make.interface";

export interface ICar {
    id: string;
    make: IMake;
    model: string;
    year: number;
    colors: CarColor[];
    carType: CarType;
    fuelType: 'electric' | 'glp' | 'gasoline';
    price: number;
    isFeatured: boolean;
    imgUrl: string;
}