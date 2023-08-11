import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MakesService } from './makes.service';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';

@Controller('makes')
export class MakesController {
  constructor(private readonly makesService: MakesService) {}

  // @Post()
  // create(@Body() createMakeDto: CreateMakeDto) {
  //   return this.makesService.create(createMakeDto);
  // }

  @Get()
  findAll() {
    return this.makesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.makesService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMakeDto: UpdateMakeDto) {
  //   return this.makesService.update(+id, updateMakeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.makesService.remove(+id);
  // }
}
