describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          });
    afterEach('Конец теста', function () {
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         });

   it('Верный пароль и верный логин', function () {
    // Ввести правильный логин
    cy.get('#mail').type('german@dolnikov.ru');
    // Ввести правильный пароль
    cy.get('#pass').type('iLoveqastudio1');
    // Нажать войти
    cy.get('#loginButton').click();
    // Проверить нужный текст
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
});

it('Автотест на проверку логики восстановления пароля', function () {
    // Нажать на восстановить пароль
    cy.get('#forgotEmailButton').click();
    // Ввести любой имейл
    cy.get('#mailForgot').type('babkinadsha@yandex.ru');
    // Нажать отправить код
    cy.get('#restoreEmailButton').click();
    // Проверить нужный текст
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
});

it('НЕверный пароль и верный логин', function () {
    // Ввести правильный логин
    cy.get('#mail').type('german@dolnikov.ru');
    // Ввести НЕправильный пароль
    cy.get('#pass').type('iLoveqastudio12345678');
    // Нажать войти
    cy.get('#loginButton').click();
    // Проверить нужный текст
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
});

it('Верный пароль и НЕверный логин', function () {
    // Ввести НЕправильный логин
    cy.get('#mail').type('babkinadsha@yandex.ru');
    // Ввести правильный пароль
    cy.get('#pass').type('iLoveqastudio1');
    // Нажать войти
    cy.get('#loginButton').click();
    // Проверить нужный текст
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
});

it('логин без @', function () {
    // Ввести логин без @
    cy.get('#mail').type('germandolnikov.ru');
    // Ввести правильный пароль
    cy.get('#pass').type('iLoveqastudio1');
    // Нажать войти
    cy.get('#loginButton').click();
    // Проверить нужный текст
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
});

it('проверку на приведение к строчным буквам в логин', function () {
    // Ввести логин GerMan@Dolnikov.ru
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    // Ввести правильный пароль
    cy.get('#pass').type('iLoveqastudio1');
    // Нажать войти
    cy.get('#loginButton').click();
    // Проверить нужный текст
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
});
})