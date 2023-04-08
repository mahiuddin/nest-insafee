import {
    IsEmail,
    IsNotEmpty,
    IsString
} from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    first_name: string;

    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}