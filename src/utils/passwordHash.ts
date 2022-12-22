import bcrypt from 'bcrypt';

class PasswordHash {
  public static hash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };
}

export default PasswordHash;

/**
 * pakai static agar tidak perlu bikin object lagi
 */
