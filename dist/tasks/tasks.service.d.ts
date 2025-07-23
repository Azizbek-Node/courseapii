import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    create(createTaskDto: CreateTaskDto, userId: string): Promise<import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(userId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, TaskDocument, "find", {}>;
    findOne(id: string, userId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, TaskDocument, "findOne", {}>;
    update(id: string, updateTaskDto: UpdateTaskDto, userId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, TaskDocument, "findOneAndUpdate", {}>;
    remove(id: string, userId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, TaskDocument, "findOneAndDelete", {}>;
}
