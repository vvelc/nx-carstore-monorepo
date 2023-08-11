import { Injectable } from '@nestjs/common';
import { carsMockList } from './mocks/cars.mock';

@Injectable()
export class CarsService {
  // create(createCarDto: CreateCarDto) {
  //   return 'This action adds a new car';
  // }

  findAll() {
    return carsMockList;
  }

  findOne(id: string) {
    return carsMockList.find((x) => x.id == id);
  }

  // update(id: number, updateCarDto: UpdateCarDto) {
  //   return `This action updates a #${id} car`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} car`;
  // }
}
