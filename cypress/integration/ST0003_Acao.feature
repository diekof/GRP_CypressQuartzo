#language:pt

Funcionalidade: Manutenção de Ações
    Manutenção/Cadastro de Ações

    Contexto: Página principal
        Dado que eu acesse a url "servlet/app.quartzo.tmacaoww"

    Cenario: Cadastro de uma nova ação

        Quando acesso o formulário de cadastro
            E que eu tenho os seguintes valores
            | area      | 21                |
            | nome      | acao_de_teste     |
            | descricao | Ação descrição    |
        Então confirmo os dados preenchidos
            # E devo ver a mensagem de sucesso
            # E ver a ação "acao_de_teste" na grid

    # Cenario: Editando um registro

    #     Quando eu cadastro uma nova ação
    #     # E procuro esse registro na grid
    #     # Então devo editar esse registro
