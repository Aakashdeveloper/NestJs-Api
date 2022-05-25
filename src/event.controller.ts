import { Controller, Get, Post, Patch, Delete, Param, Query} from '@nestjs/common';

@Controller('/event')
export class EventController {
  @Get()
  findAll(){ }
  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }
  @Post()
  create(){ }
  @Patch()
  update(@Query('id') id, @Query('name') name) {
    return `${id} is ${name}`;
  }
  @Delete()
  remove(){ }
}
