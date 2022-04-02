export type userDataType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type userContextType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type formPropsType = {
  className?: string;
  isLoading: boolean;
  onSubmit?: (evt: any) => void;
  onFinish: (userData: userDataType) => Promise<void>;
};
