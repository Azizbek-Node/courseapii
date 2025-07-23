import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { UsersService } from '../users/users.service';
import { Types } from 'mongoose';
export declare class CoursesController {
    private readonly coursesService;
    private readonly usersService;
    constructor(coursesService: CoursesService, usersService: UsersService);
    create(createCourseDto: CreateCourseDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateCourseDto: UpdateCourseDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    remove(id: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/course.schema").Course, {}> & import("./schemas/course.schema").Course & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    registerCourse(courseId: string, req: any): Promise<{
        message: string;
    }>;
}
