/** Model for the Request entity */
export interface Request {
  id: string;
  name: string;
  description: string;
  link: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

/** Model for the User entity */
export interface User {
  id: string;
  username: string;
  display_name: string;
  bio: string;
  created_at: string;
  updated_at: string;
}
