// the translations
// (tip move them in a JSON file and import them,

// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

export const resources = {
  en: {
    translation: {
      global: {
        submit: 'Submit',
        create: 'Create',
      },
      components: {
        fileUpload: {
          upload: 'Upload File',
        },
        forms: {
          authForm: {
            signIn: 'Sign In',
            signUp: 'Sign Up',
            email: 'Email Address',
            password: 'Password',
            dontHaveAccount: "Don't have an account? Sign Up",
            alreadyHaveAccount: 'Already have an account? Sign In',
          },
          categoryForm: {
            name: 'Name',
          },
          productForm: {
            name: 'Name',
            category: 'Category',
            oldPrice: 'Old Price',
            price: 'Price',
            desc: 'Description',
          },
          profileForm: {
            title: 'Profile Update',
            name: 'Name',
          },
          validationMessages: {
            emailRequired: 'Email is required',
            emailInvalid: 'Invalid email address',
            passwordRequired: 'Password is required',
            passwordInvalid: 'Password must be at least 8 characters long',
            nameRequired: 'Name is required',
            nameInvalid: 'Name must be at least 7 characters long',
            priceRequired: 'Price is required',
            categoryRequired: 'Category is required',
          },
        },
        productCard: {
          addToCart: 'Add to Cart',
        },
      },
      sections: {
        notFound: {
          title: 'Not Found',
          text: 'The page you’re looking for doesn’t exist.',
          homeLink: 'Back Home',
        },
        layout: {
          signIn: 'Sign In',
          navbar: {
            profile: 'Profile',
            products: 'Products',
            categories: 'Categories',
          },
        },
        categories: {
          createTitle: 'Category create',
          filter: {
            sortDirection: {
              asc: 'Ascending',
              desc: 'Descending',
            },
            sortField: {
              name: 'Name',
              date: 'Publish Date',
            },
            inputs: {
              name: 'Name',
              sortField: 'Sort By',
              sortDirection: 'Sort Direction',
            },
          },
        },
        products: {
          createTitle: 'Product create',
          filter: {
            sortDirection: {
              asc: 'Ascending',
              desc: 'Descending',
            },
            sortField: {
              name: 'Name',
              date: 'Publish Date',
            },
            inputs: {
              name: 'Name',
              sortField: 'Sort By',
              sortDirection: 'Sort Direction',
              categories: 'Categories',
            },
          },
        },
        checkout: {
          emptyText: 'Your Shopping Cart is Empty',
          checkoutConfirm: 'Checkout',
        },
      },
    },
  },
  ru: {
    translation: {
      global: {
        submit: 'Подтвердить',
        create: 'Создать',
      },
      components: {
        fileUpload: {
          upload: 'Загрузить файл',
        },
        forms: {
          authForm: {
            signIn: 'Войти',
            signUp: 'Зарегистрироваться',
            email: 'Адрес электронной почты',
            password: 'Пароль',
            dontHaveAccount: 'Нет аккаунта? Зарегистрируйтесь',
            alreadyHaveAccount: 'Уже есть аккаунт? Войдите',
          },
          categoryForm: {
            name: 'Название',
          },
          productForm: {
            name: 'Название',
            category: 'Категория',
            oldPrice: 'Старая цена',
            price: 'Цена',
            desc: 'Описание',
          },
          profileForm: {
            title: 'Обновление профиля',
            name: 'Имя',
          },
          validationMessages: {
            emailRequired: 'Электронная почта обязательна',
            emailInvalid: 'Неверный адрес электронной почты',
            passwordRequired: 'Пароль обязателен',
            passwordInvalid: 'Пароль должен содержать как минимум 8 символов',
            nameRequired: 'Имя обязательно',
            nameInvalid: 'Имя должно содержать как минимум 7 символов',
            priceRequired: 'Цена обязательна',
            categoryRequired: 'Категория обязательна',
          },
        },
        productCard: {
          addToCart: 'В корзину',
        },
      },
      sections: {
        notFound: {
          title: 'Страница не найдена',
          text: 'Страница, которую вы ищете, не существует.',
          homeLink: 'На главную',
        },
        layout: {
          signIn: 'Войти',
          navbar: {
            profile: 'Профиль',
            products: 'Продукты',
            categories: 'Категории',
          },
        },
        categories: {
          createTitle: 'Создание Категории',
          filter: {
            sortDirection: {
              asc: 'По возрастанию',
              desc: 'По убыванию',
            },
            sortField: {
              name: 'Названию',
              date: 'Дате публикации',
            },
            inputs: {
              name: 'Название',
              sortField: 'Сортировать по',
              sortDirection: 'Направление сортировки',
            },
          },
        },
        products: {
          createTitle: 'Создание Продукта',
          filter: {
            sortDirection: {
              asc: 'По возрастанию',
              desc: 'По убыванию',
            },
            sortField: {
              name: 'Названию',
              date: 'Дате публикации',
            },
            inputs: {
              name: 'Название',
              sortField: 'Сортировать по',
              sortDirection: 'Направление сортировки',
              categories: 'Категории',
            },
          },
        },
        checkout: {
          emptyText: 'Ваша корзина пуста',
          checkoutConfirm: 'Оформить заказ',
        },
      },
    },
  },
};
