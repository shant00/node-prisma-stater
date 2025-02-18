import { IUser } from './user.interface';
import { userRepository } from './user.repository';



const createUser = async (user: IUser) => {
  return await userRepository.createUser(user);
}



export const userService = {
  createUser
}