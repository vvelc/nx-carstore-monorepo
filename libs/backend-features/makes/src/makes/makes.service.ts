import { Injectable } from '@nestjs/common';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';
import { makesMockList } from './mock/makes.mock';

@Injectable()
export class MakesService {
  // create(createMakeDto: CreateMakeDto) {
  //   return 'This action adds a new make';
  // }

  findAll() {
    return makesMockList;
  }

  findOne(id: string) {
    return makesMockList.find((x) => x.id == id) ?? null;
  }

  // update(id: number, updateMakeDto: UpdateMakeDto) {
  //   return `This action updates a #${id} make`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} make`;
  // }
}
