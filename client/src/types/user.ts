interface UserPayload {
  id: number;
  email: string;
  name: string;
}
interface Auth {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  user: UserPayload | null;
  setUser: (value: UserPayload | null) => void;
}
