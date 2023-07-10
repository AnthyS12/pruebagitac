import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/corredor.entity';

@Injectable()
export class EquipoService {

  private equipos: Equipo[]=[
    {id:1, descripcion:'ASUS Helio', caracteristicas: '16GB RAM, 500GB SSD'},
    {id:2, descripcion:'LENOVO Series6', caracteristicas: '16GB RAM, 500GB SSD'},
  ]

  create(createEquipoDto: CreateEquipoDto) {
    const equipo = new Equipo();
    equipo.id=  Math.max( ... this.equipos.map(elemento => elemento.id),0 )+1 ;
    equipo.descripcion= createEquipoDto.descripcion;
    equipo.caracteristicas= createEquipoDto.caracteristicas;
    this.equipos.push(equipo);
    return equipo;
  }

  findAll() : Equipo[] {
    return this.equipos;
  }

  findOne(id: number) {
    const equipo =  this.equipos.find(equipos=> equipo.id===id);
    if (!equipo) throw new NotFoundException(`ID ${id} not found`)
    return equipo;
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    const {descripcion, caracteristicas} = updateEquipoDto;
    const equipo = this.findOne(id);
    if (descripcion) equipo.descripcion= descripcion;
    if (caracteristicas) equipo.caracteristicas= caracteristicas;

    this.equipos =  this.equipos.map( elemento=> {
      if (elemento.id===id) return equipo;
      return elemento;
    } )

    return equipo;

  }

  remove(id: number) {
    this.findOne(id);
    this.equipos =  this.equipos.filter(elemento=> elemento.id!== id);
  }
}
