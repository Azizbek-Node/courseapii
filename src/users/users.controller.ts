import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CoursesService } from '../courses/courses.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('students')
@ApiBearerAuth()
@Controller('students')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
  ) {}

  @ApiOperation({ summary: 'Register a new student' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Student created' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all students' })
  @ApiResponse({ status: 200, description: 'List of all students' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get student by id' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 200, description: 'Student found' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Update student' })
  @ApiParam({ name: 'id', required: true })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Student updated' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete student' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 200, description: 'Student deleted' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @ApiOperation({ summary: 'Get all courses for a student' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 200, description: 'List of student courses' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @UseGuards(JwtAuthGuard)
  @Get(':id/courses')
  async getStudentCourses(@Param('id') id: string, @Request() req) {
    // Faqat o‘zini yoki admin ko‘ra oladi
    if (req.user.userId !== id && req.user.role !== 'admin') {
      throw new ForbiddenException('You can only view your own courses');
    }
    const student = await this.usersService.findOne(id);
    if (!student) throw new ForbiddenException('Student not found');
    return this.coursesService
      .findAll()
      .where('_id')
      .in(student.registeredCourses)
      .exec();
  }
}
