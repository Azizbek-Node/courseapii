import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Delete,
  Put,
  ForbiddenException,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { Types } from 'mongoose';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly usersService: UsersService,
  ) {}

  // Faqat adminlar uchun
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCourseDto: CreateCourseDto, @Request() req) {
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admin can create courses');
    }
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  // Faqat adminlar uchun
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
    @Request() req,
  ) {
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admin can update courses');
    }
    return this.coursesService.update(id, updateCourseDto);
  }

  // Faqat adminlar uchun
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Only admin can delete courses');
    }
    return this.coursesService.remove(id);
  }

  // Student kursga yoziladi
  @UseGuards(JwtAuthGuard)
  @Post(':courseId/register')
  async registerCourse(@Param('courseId') courseId: string, @Request() req) {
    if (req.user.role !== 'student') {
      throw new ForbiddenException('Only students can register for courses');
    }
    const student = await this.usersService.findOne(req.user.userId);
    if (!student) throw new ForbiddenException('Student not found');
    if (student.registeredCourses?.some((id) => id.toString() === courseId)) {
      return { message: 'Already registered for this course' };
    }
    student.registeredCourses.push(new Types.ObjectId(courseId)); // <-- to'g'ri format
    await student.save();
    return { message: 'Successfully registered for the course' };
  }
}
