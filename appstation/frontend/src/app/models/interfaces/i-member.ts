import { ITransaction } from "./i-transaction";

export interface IMember {
  id: number;
  userName: string;
  lastName: string;
  age: number;
  createdAt: string;
  accountBalance: number;
  gender: string;
  city: string;
  country: string;
  profileImage?: any;
  phoneNumber: string;
  postalCode: string;
  email: string;
  transactions: ITransaction[];
}
