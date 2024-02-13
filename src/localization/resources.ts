// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  en: {
    translation: {
      global: {
        edit: 'Edit',
        openModal: 'Open Modal',
        modalInput: {
          placeholder: 'Modal Text...',
        },
      },
      navbar: {
        items: {
          profile: 'Profile',
          products: 'Products',
          categories: 'Categories',
        },
      },
      operations: {
        add: 'Add Operation',
        showMore: 'Show More',
        randomOperationTitle: 'Clothes sale',
        randomOperationDescription: 'Selling quality clothes at good prices',
      },
      forms: {
        authForm: {
          logIn: 'Log In',
          signInButton: 'Sign In',
          register: 'Register',
          signUpButton: 'Sign up',
          createAnAccount: 'Create an Account',
          alreadyHaveAnAccount: 'Already have an account',
        },
        operationForm: {
          createTitle: 'Operation create',
          updateTitle: 'Operation update',
          createButton: 'Create',
          updateButton: 'Update',
        },
        profileForm: {
          title: 'Update Profile',
          updateButton: 'Update',
        },
      },
    },
  },
  ru: {
    translation: {
      global: {
        edit: 'Редактировать',
        openModal: 'Открыть Модалку',
        modalInput: {
          placeholder: 'Текст Модалки...',
        },
      },
      navbar: {
        items: {
          profile: 'Profile',
          products: 'Products',
          categories: 'Categories',
        },
      },
      operations: {
        add: 'Add Operation',
        showMore: 'Показать ещё',
        randomOperationTitle: 'Продажа одежды',
        randomOperationDescription: 'Продажа качественной одежды, низкие цены',
      },
      forms: {
        authForm: {
          logIn: 'Вход',
          signInButton: 'Войти',
          register: 'Регистрация',
          signUpButton: 'Зарегистрироваться',
          createAnAccount: 'Создать аккаунт',
          alreadyHaveAnAccount: 'Уже есть аккаунт',
        },
        operationForm: {
          createTitle: 'Operation create',
          updateTitle: 'Operation update',
          createButton: 'Create',
          updateButton: 'Update',
        },
        profileForm: {
          title: 'Update Profile',
          updateButton: 'Update',
        },
      },
    },
  },
};
