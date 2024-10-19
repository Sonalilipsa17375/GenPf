import { createContext } from "react";

const User = createContext({
  name: '',
  contact: '',
  email: '',
  github: '',
  resume: '',
  techstack: ''
});

export default User;