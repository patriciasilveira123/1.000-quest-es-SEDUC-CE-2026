export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  passwordHash: string;
  avatarColor?: string;
  registeredAt: string;
}

export interface AuthSession {
  user: {
    id: string;
    name: string;
    email: string;
    avatarColor?: string;
  };
  token: string;
  loginAt: string;
}
