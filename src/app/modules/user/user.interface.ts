import { Gender_User, Role } from '../../../enums/user';



export type IUser = {
  id: number;
  name: string;
  image: string;
  gender: Gender_User;
  email: string;
  password: string;
  role: Role;
};


export type IUpdateUser = {
  id?: number;
  name?: string;
  image?: string;
  gender?: Gender_User;
  email?: string;
  password?: string;
  role?: Role;
}