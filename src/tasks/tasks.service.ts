import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto, userId: string) {
    return this.taskModel.create({
      ...createTaskDto,
      createdBy: new Types.ObjectId(userId),
    });
  }

  findAll(userId: string) {
    return this.taskModel.find({ createdBy: userId });
  }

  findOne(id: string, userId: string) {
    return this.taskModel.findOne({ _id: id, createdBy: userId });
  }

  update(id: string, updateTaskDto: UpdateTaskDto, userId: string) {
    return this.taskModel.findOneAndUpdate(
      { _id: id, createdBy: userId },
      updateTaskDto,
      { new: true },
    );
  }

  remove(id: string, userId: string) {
    return this.taskModel.findOneAndDelete({ _id: id, createdBy: userId });
  }
}
