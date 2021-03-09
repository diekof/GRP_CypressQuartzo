#language:pt

Funcionalidade: Manutenção de Ações
    Manutenção/Cadastro de Ações

    Contexto: Página principal
        Dado que eu acesse a url "app.wmacoes"

    Cenario: Cadastro de uma nova ação

        Quando eu faço login com "admin_geral" e "abacoaba"
        Então devo ser autenticado com sucesso
        E devo ter acesso a página inicial