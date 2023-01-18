export enum View {
  Landing = "landing",
  Signup = "signup",
  Verify = "verify",
  Login = "login",
  Home = "home",
}

export const IS_PRIVATE: Record<View, boolean> = {
  [View.Landing]: false,
  [View.Signup]: false,
  [View.Verify]: false,
  [View.Login]: false,
  [View.Home]: true,
};

export interface Bet {
  amount: number;
  win: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ApiResponse<T> {
  route: string;
  data: T;
}
