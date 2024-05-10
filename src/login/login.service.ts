import { Injectable, NotAcceptableException, Param } from '@nestjs/common';
import { imformationOfUserDto } from './dto/create-login.dto';
import { UserDto } from './dto/user.dto';
import { SignUp } from './dto/signup.dto';

@Injectable()
export class LoginService {
  private users: UserDto[] = [
    {
      uniqueId: 1,
      id: 'park1234',
      password: 'park1234',
      name: 'park',
      email: 'park@gmail.com',
    },
    {
      uniqueId: 2,
      id: 'kim1234',
      password: 'kim1234',
      name: 'kim',
      email: 'kim@gmail.com',
    }
  ];

  signIn(userInfo: imformationOfUserDto) {
    const user = this.users.filter(u => u.id === userInfo.id).at(0)
    if(user === undefined || user.password !== userInfo.password){
      return new NotAcceptableException('wrong id or password, try again');
    }
    return user;
  }

  signUp(userInfo: SignUp){
    // if(userInfo.password === undefined || userInfo.id === undefined || userInfo.name === undefined || userInfo.email === undefined) {
    //   return new  NotAcceptableException('please, write all content. try again.');
    // }
    // else {
    //   this.users.push({uniqueId: this.users.length+1, ...userInfo})
    //   return this.users;
    // }
    this.users.push({uniqueId: this.users.length+1, ...userInfo})
    return this.users;
  }

  getUser(uniqueId: string){
    const UI = Number(uniqueId);
    const user = this.users.find(u => u.uniqueId === UI)
    return {
      name : user.name,
      email : user.email
    };
  }

  deleteUser(uniqueId: string){
    const UI = Number(uniqueId);
    console.log(UI);
    this.users = this.users.filter(u => u.uniqueId !== UI);
    return this.users;
  }

}
