import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-messasge';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  // this, pq tá recebendo o form
  hideErrorMessage(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Formulário Enviado...!');
});

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido!');
};

const checkEqualPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement,
) => {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem!');
    showErrorMessage(password2, 'Senhas não batem!');
  }
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'Esse campo não pode está vazio!');
  });
};

// ocultar a mensagem de erro
const hideErrorMessage = (form: HTMLFormElement): void => {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
};

// exibir mensagem de erro
const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true;
  // se existir algum erro, entra no forEach
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
};
