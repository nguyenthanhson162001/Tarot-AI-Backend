import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeskService } from './desk.service';
import { CreateDeskDto } from './dto/create-desk.dto';
import { UpdateDeskDto } from './dto/update-desk.dto';
import { deskPaths as paths } from './desk.constants';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_TAGS } from 'src/infrastructure/swagger';

@Controller(paths.prefix)
@ApiTags(API_TAGS.DESK)
export class DeskController {
  constructor(private readonly deskService: DeskService) { }

  @Post(paths.createDesk.path)
  @ApiOperation(paths.createDesk.operation)
  create(@Body() createDeskDto: CreateDeskDto) {
    return this.deskService.create(createDeskDto);
  }

  @Get(paths.listDesk.path)
  @ApiOperation(paths.listDesk.operation)
  findAll() {
    return this.deskService.findAll();
  }

  @Get(paths.getDesk.path)
  @ApiOperation(paths.getDesk.operation)
  findOne(@Param('id') id: string) {
    return this.deskService.findOne(+id);
  }

  @Patch(paths.updateDesk.path)
  @ApiOperation(paths.updateDesk.operation)
  update(@Param('id') id: string, @Body() updateDeskDto: UpdateDeskDto) {
    return this.deskService.update(+id, updateDeskDto);
  }

  @Delete(paths.deleteDesk.path)
  @ApiOperation(paths.deleteDesk.operation)
  remove(@Param('id') id: string) {
    return this.deskService.remove(+id);
  }
}
