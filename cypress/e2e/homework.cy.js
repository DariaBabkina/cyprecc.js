it('Верный пароль и верный логин', function () {
        // Открываю сайт
        cy.visit('https://login.qa.studio/');
        // Ввести правильный логин
        cy.get('#mail').type('german@dolnikov.ru');
        // Ввести правильный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Нажать войти
        cy.get('#loginButton').click();
        // Проверить нужный текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        // Проверить наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Автотест на проверку логики восстановления пароля', function () {
        // Открываю сайт
        cy.visit('https://login.qa.studio/');
        // Нажать на восстановить пароль
        cy.get('#forgotEmailButton').click();
        // Ввести любой имейл
        cy.get('#mailForgot').type('babkinadsha@yandex.ru');
        // Нажать отправить код
        cy.get('#restoreEmailButton').click();
        // Проверить нужный текст
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        // Проверить наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('НЕверный пароль и верный логин', function () {
        // Открываю сайт
        cy.visit('https://login.qa.studio/');
        // Ввести правильный логин
        cy.get('#mail').type('german@dolnikov.ru');
        // Ввести НЕправильный пароль
        cy.get('#pass').type('iLoveqastudio12345678');
        // Нажать войти
        cy.get('#loginButton').click();
        // Проверить нужный текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        // Проверить наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Верный пароль и НЕверный логин', function () {
        // Открываю сайт
        cy.visit('https://login.qa.studio/');
        // Ввести НЕправильный логин
        cy.get('#mail').type('babkinadsha@yandex.ru');
        // Ввести правильный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Нажать войти
        cy.get('#loginButton').click();
        // Проверить нужный текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        // Проверить наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('логин без @', function () {
        // Открываю сайт
        cy.visit('https://login.qa.studio/');
        // Ввести логин без @
        cy.get('#mail').type('germandolnikov.ru');
        // Ввести правильный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Нажать войти
        cy.get('#loginButton').click();
        // Проверить нужный текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        // Проверить наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('проверку на приведение к строчным буквам в логин', function () {
        // Открываю сайт
        cy.visit('https://login.qa.studio/');
        // Ввести логин GerMan@Dolnikov.ru
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        // Ввести правильный пароль
        cy.get('#pass').type('iLoveqastudio1');
        // Нажать войти
        cy.get('#loginButton').click();
        // Проверить нужный текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        // Проверить наличие кнопки крестик
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });