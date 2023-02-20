import { Profiles } from "app/shared/model/Profiles";

export interface Subscriber {
  id?: string;
  user_id?: string;
  email_address?: string;
  first_name?: string;
  last_login_date?: any;
  last_name?: string;
  other_name?: string;
  password_expiry_date?: any;
  reset_password?: boolean;
  username?: string;
  profiles?: Profiles;
  avatar?: string;
  status?: string;
}
