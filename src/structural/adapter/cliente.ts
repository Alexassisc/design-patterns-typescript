import { ValidatorEmailAdapter } from './adapter-validator/adapter-validator';
import { EmailValidator } from './interface-validator/interface-validator';

function cadastrarUsuario(email: string, validator: EmailValidator) {
  if (!validator.isValid(email)) {
    console.log('É inválido');
    return;
  } else {
    console.log('É válido');
  }
}

const email = 'Alexteste@gmail.com';
const validator = new ValidatorEmailAdapter();

cadastrarUsuario(email, validator);
