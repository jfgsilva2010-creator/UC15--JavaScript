document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------------
  // 1. SAUDAÇÃO DINÂMICA
  // -----------------------------------------------------------------------
  const greetingElement = document.getElementById('greeting');
  const currentHour = new Date().getHours();
  let greetingText = 'Olá!';

  if (currentHour >= 5 && currentHour < 12) {
    greetingText = 'Bom dia!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = 'Boa tarde!';
  } else {
    greetingText = 'Boa noite!';
  }

  if (greetingElement) {
    greetingElement.textContent = `${greetingText} Seja bem-vindo(a)!`;
  }

  // -----------------------------------------------------------------------
  // 2. ANO AUTOMÁTICO NO RODAPÉ
  // -----------------------------------------------------------------------
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // -----------------------------------------------------------------------
  // 3. MENU HAMBÚRGUER (MOBILE)
  // -----------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburgerBtn.addEventListener('click', () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });

  // Fechar menu ao clicar em qualquer link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // -----------------------------------------------------------------------
  // 4. MODO CLARO / ESCURO (LIGHT / DARK MODE)
  // -----------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Restaurar preferência salva
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggleBtn.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    themeToggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  });

  // -----------------------------------------------------------------------
  // 5. VALIDAÇÃO DE FORMULÁRIO COM FEEDBACK AO USUÁRIO
  // -----------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpar erros anteriores
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    let isValid = true;

    // Validação do Nome
    if (name === '') {
      showError('name-error', 'Por favor, preencha o seu nome.');
      isValid = false;
    }

    // Validação do E-mail (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      showError('email-error', 'Por favor, preencha o seu e-mail.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError('email-error', 'Por favor, informe um e-mail válido.');
      isValid = false;
    }

    // Validação da Mensagem
    if (message === '') {
      showError('message-error', 'Por favor, escreva uma mensagem.');
      isValid = false;
    }

    // Validação do Consentimento (LGPD / Privacidade)
    if (!consent) {
      showError('consent-error', 'Você precisa concordar com o uso dos dados para contato.');
      isValid = false;
    }

    // Se válido, exibe mensagem de sucesso e limpa o formulário
    if (isValid) {
      const successMsg = document.getElementById('form-success');
      successMsg.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
      contactForm.reset();

      setTimeout(() => {
        successMsg.textContent = '';
      }, 5000);
    }
  });

  function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
    document.getElementById('form-success').textContent = '';
  }
});