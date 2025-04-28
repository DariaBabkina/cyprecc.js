
//автотест для покемонов: на покупку нового аватара для своего тренера


it('автотест для покемонов: на покупку нового аватара для своего тренера', function () {
    // Открываю сайт
    cy.visit('https://pokemonbattle.ru/');
    // Ввести правильный логин
    cy.get('#k_email').type('babkinadasha@gmail.com');
    // Ввести правильный пароль
    cy.get('#k_password').type('Dasha21321321');
    // Нажать войти
    cy.get('.MuiButton-root').click();
    // Проверить отображение главной страницы с покомонами после авторизациим
    cy.get('.style_1_heading_38_400_pokemon_classic').contains('Покемоны')
    // Нажать на своего тренера
    cy.get('.header_card_trainer').click();
    cy.wait(2000);
    // Нажать смена аватара
    cy.get('.k_mobile > :nth-child(5)').click();
    // Кликаем Купить у первого доступного аватара
    cy.get('.available > button').first().click();
    // Вводим номер карты
    cy.get('.card_number').type('4620869113632996');  
    // Вводим CVV карты 
    cy.get('.card_csv').type('125');
    // Вводим срок действия карты
    cy.get('.card_date').type('1226');
    // Вводим имя владельца действия карты
    cy.get('.card_name').type('NAME');
    // Нажимаем кнопку Оплатить
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    // Вводим код подтверждения СМС
    cy.get('.threeds_number').type('56456');
    // Нажимаем кнопку Оплатить
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    // Проверяем наличие и видимость сообщения об успешной покупке
    cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });

