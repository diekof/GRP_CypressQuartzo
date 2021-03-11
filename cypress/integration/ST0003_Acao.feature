#language:pt

Funcionalidade: Manutenção de Ações
    Manutenção/Cadastro de Ações

    Contexto: Página principal
        Dado que eu me autentique com sucesso
        E que eu acesse a url "servlet/app.quartzo.tmacaoww"

    Cenario: Cadastro de uma nova ação

        Quando eu clico no botão de inserir
        Então devo preencher os campos

    Cenario: Editando um registro

        Quando eu cadastro uma nova ação
        # E procuro esse registro na grid
        # Então devo editar esse registro
