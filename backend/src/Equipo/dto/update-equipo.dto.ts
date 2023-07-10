import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoDto } from './create-equipo.dto';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {
    @IsString()
    @IsNotEmpty()
    id:string;

    @IsString()
    @IsNotEmpty()
    descripcion:string;

    @IsString()
    @IsNotEmpty()
    caracteristicas:string;
}
