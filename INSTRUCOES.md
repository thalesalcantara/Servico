# Instruções de Uso - Sistema de Escalas COOPEX

## Configuração Inicial

### 1. Configurar Backend

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Configurar E-mail

Edite o arquivo `backend/src/routes/escalas.py` e configure suas credenciais de e-mail:

```python
EMAIL_USER = "seu_email@gmail.com"      # Seu e-mail Gmail
EMAIL_PASSWORD = "sua_senha_app"        # Senha de app do Gmail
```

**Como obter senha de app do Gmail:**
1. Acesse sua conta Google
2. Vá em "Segurança" > "Verificação em duas etapas"
3. Role até "Senhas de app" e gere uma nova senha
4. Use essa senha no código

### 3. Executar Backend

```bash
# Terminal 1 - Backend
cd backend
source venv/bin/activate
python src/main.py
```

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

### 3. Formato da Planilha

A planilha Excel deve conter as seguintes colunas:

| Nome Cooperado | Email | Data | Turno | Horário | Nome Contrato |
|----------------|-------|------|-------|---------|---------------|
| João Silva | joao@email.com | 01/07/2025 | Manhã | 08:00-12:00 | Contrato A |
| Maria Santos | maria@email.com | 01/07/2025 | Tarde | 13:00-17:00 | Contrato B |

### 4. Processo de Envio

1. O sistema processa a planilha e mostra um preview
2. Revise os dados processados
3. Clique em "Confirmar e Enviar E-mails"

## Estrutura do Projeto

```
coopex-escalas6/
├── admin.html           # Painel administrativo
├── index.html           # Login unificado (Admin e Cooperado)
├── register.html        # Cadastro de cooperados
├── reset-password.html  # Recuperação de senha
├── cooperado.html       # Painel do cooperado
├── style.css           # Estilos
├── firebase.js         # Configuração Firebase
├── backend/            # Backend Flask
│   ├── src/
│   │   ├── main.py     # Aplicação principal
│   │   └── routes/
│   │       └── escalas.py  # Rotas de escalas
│   └── requirements.txt
└── README.md           # Documentação
```

## Solução de Problemas

### Backend não inicia
- Verifique se o ambiente virtual está ativado
- Instale as dependências: `pip install -r requirements.txt`

### E-mails não são enviados
- Verifique as credenciais de e-mail no arquivo `escalas.py`
- Certifique-se de usar uma senha de app do Gmail
- Verifique se a verificação em duas etapas está habilitada

### Erro de CORS
- O backend já está configurado com CORS habilitado
- Certifique-se de que o backend está rodando na porta 5000

### Planilha não é processada
- Verifique se o arquivo é .xlsx (Excel)
- Certifique-se de que as colunas têm os nomes corretos
- Verifique se há dados válidos nas linhas

