/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
  Get,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { LoginMemberDto } from './dto/login-member.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/auth.jwt.guard';
import { CurrentUser } from 'src/common/decorators/member.decorators';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('member')
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    private readonly authService: AuthService,
  ) {}
  
  @Get()
  getHello() {
    return "Hello We Are NestJs + Dokcer"
  }

  @Post('signup')
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }

  @Post('login')
  async login(@Body() loginMemberDto: LoginMemberDto) {
    return this.authService.login(loginMemberDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async patchMember(@CurrentUser() memberEmail: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.patchMember(memberEmail, updateMemberDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteMember(@CurrentUser() memberEmail: string) {
    return this.memberService.deleteMember(memberEmail);
  }
}
