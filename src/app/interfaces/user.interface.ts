export interface User {
  name: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  passwordConfirm?: string | null
  dob: string | null;
  // pronouns: Pronouns | null;
  pronouns: string | null
  terms: boolean | null;
}

enum Pronouns {
  'She Her',
  'He Him',
  'They Them',
}
