import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEquipoDto {
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