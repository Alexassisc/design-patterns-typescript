import isEmail from 'validator/lib/isEmail';
import { EmailValidator } from '../interface-validator/interface-validator';

export class ValidatorEmailAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return isEmail(email);
  }
}
