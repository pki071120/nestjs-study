import { IsNotEmpty, IsEmail } from "class-validator";

export class SignUp {
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public password: string;

  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;
}