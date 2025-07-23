import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(req: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./schemas/task.schema").TaskDocument, "find", {}>;
    findOne(id: string, req: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./schemas/task.schema").TaskDocument, "findOne", {}>;
    update(id: string, updateTaskDto: UpdateTaskDto, req: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./schemas/task.schema").TaskDocument, "findOneAndUpdate", {}>;
    remove(id: string, req: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("./schemas/task.schema").TaskDocument, {}> & import("./schemas/task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./schemas/task.schema").TaskDocument, "findOneAndDelete", {}>;
}
