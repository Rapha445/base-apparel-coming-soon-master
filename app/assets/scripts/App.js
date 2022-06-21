import '../styles/styles.css';
import 'lazysizes';
import EmailValidation from './EmailValidation';

new EmailValidation();

if (module.hot) {
    module.hot.accept()
};