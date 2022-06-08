import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

  constructor(private rolesService: RolesService) {}
  
  @Get('/:value')
  public getRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @Post()
  public creareRole(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto);
  }

}
