# Sistema de Escalas COOPEX

Sistema para gerenciamento e envio de escalas de trabalho para cooperados.

## Funcionalidades

- Login de administrador com credenciais fixas (COOPEX/05062721)
- Upload de planilha Excel com escalas
- Processamento automático dos dados
- Envio individualizado de escalas por e-mail para cada cooperado

## Estrutura do Projeto

### Frontend
- `admin-login.html` - Página de login do administrador
- `admin.html` - Painel administrativo para upload e envio de escalas
- `style.css` - Estilos da aplicação
- `firebase.js` - Configuração do Firebase

### Backend (Flask)
- `src/main.py` - Aplicação principal
- `src/routes/escalas.py` - Rotas para processamento e envio de escalas
- `requirements.txt` - Dependências Python

## Formato da Planilha Excel

A planilha deve conter as seguintes colunas:
- **Nome Cooperado** - Nome do cooperado
- **Email** - E-mail do cooperado
- **Data** - Data da escala
- **Turno** - Turno de trabalho
- **Horário** - Horário de trabalho
- **Nome Contrato** - Nome do contrato

## Como Usar

### 1. Login no Sistema

1. Abra `index.html` no navegador.
2. **Para Administrador:**
   - E-mail: `coopexentregas.rn@gmail.com`
   - Senha: `05062721`
   - Após o login, você será redirecionado para o painel administrativo (`admin.html`).
3. **Para Cooperado:**
   - Use o e-mail e senha cadastrados via `register.html`.
   - Após o login, você será redirecionado para a sua área (`cooperado.html`).

### 2. Upload de Planilha (para Administrador)

1. No painel administrativo, clique em "Choose File"
2. Selecione sua planilha Excel (.xlsx)
3. Clique em "Processar e Enviar"

## Credenciais de Administrador

- **E-mail:** `coopexentregas.rn@gmail.com`
- **Senha:** `05062721`

## Tecnologias Utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Python Flask
- Banco de dados: Firebase Firestore (para cooperados)
- E-mail: SMTP Gmail
- Processamento de planilhas: Pandas, OpenPyXL

