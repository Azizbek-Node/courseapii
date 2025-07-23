import { Document, Types } from 'mongoose';
export type TaskDocument = Task & Document;
export declare enum TaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in-progress",
    DONE = "done"
}
export declare class Task {
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: Date;
    createdBy: Types.ObjectId;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, Document<unknown, any, Task, any> & Task & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, import("mongoose").FlatRecord<Task>, {}> & import("mongoose").FlatRecord<Task> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
