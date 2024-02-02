import { Profile } from '@/types';

export type AuthBody = {
  email: string;
  password: string;
};

export type AuthResult = {
  token: string;
  profile: Profile;
};
