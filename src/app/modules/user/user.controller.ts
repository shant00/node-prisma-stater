import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { userService } from './user.service';


const registerUser = catchAsync(async (req: Request, res: Response) => {
  const user: IUser = await userService.createUser(req.body);

  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: 'User registered successfully !',
    data: user,
  });
});



export const AuthController = {
  registerUser,
};
