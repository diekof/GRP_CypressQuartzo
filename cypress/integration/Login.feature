#language:pt

Funcionalidade: Login
    Para que eu possa cadastrar e gerenciar minhas tarefas
    Sendo um usuário
    Posso acessar o sistema com meu email e senha previamente cadastrados.

    Contexto: Página principal
        Dado que eu acesso a página principal

    @logout
    Cenario: Usuário deve ser autorizado

        Quando eu faço login com "admin_geral" e "abacoaba"
        Então devo ser autenticado com sucesso
        E devo ter acesso a página inicial

    Esquema do Cenario: Tentativa de acesso
        Quando eu faço login com "<usuario>" e "<senha>"
        Então devo ver a seguinte mensagem "<alerta>"

        Exemplos:
            |usuario        |senha      |alerta                         |    
            |admin_geral    |123456     |Senha inválida.                |
            |diego          |abacoaba   |Usuário não cadastrado.        |
            |               |123456     |O campo login é obrigatório.   |
            |admin_geral    |           |O campo senha é obrigatório.   |