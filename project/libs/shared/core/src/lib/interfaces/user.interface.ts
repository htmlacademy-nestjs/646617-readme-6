export interface User {
  id?: string;
  email: string;
  firstname: string;
  lastname: string;
  passwordHash: string;
  dateRegistration: Date;
  publicationsNumber?: number;
  subscribersNumber?: number;
  avatar?: File;
}
