import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { imformationOfUserDto } from './dto/create-login.dto';
import { SignUp } from './dto/signup.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/signin')
  login(@Body() userInfo: imformationOfUserDto) {
    return this.loginService.signIn(userInfo);
  }

  @Post('/signup')
  signUp(@Body() userInfo: SignUp) {
    return this.loginService.signUp(userInfo);
  }
  @Get(':uniqueid')
  getUser(@Param('uniqueid') uniqueid: string) {
    return this.loginService.getUser(uniqueid);
  }

  @Delete(':uniqueid')
  deleteUser(@Param('uniqueid') uniqueid: string) {
    return this.loginService.deleteUser(uniqueid);
  }
}
