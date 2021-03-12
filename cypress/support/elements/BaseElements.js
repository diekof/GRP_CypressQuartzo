class BaseElements{

    textoTituloHome = () => { return '.TextBlockTitleMaster' }
    caixaMensagemWarning    = () => { return '.ui-pnotify-text' }
    caixaMensagemError      = () => { return '[role="alert"]' }
    caixaMensagemSuccess    = () => { return '[role="alert"]' }
    usuario_global          = () => { return 'diego.silva' }
    senha_global            = () => { return 'abacoaba' }

    botao_confirmar = () => { return '#BTNTRN_ENTER' }
    botao_grid = () => { return '#GridContainerRow_0001 > .WWActionGroupColumn > .btn-group > .btn'}

}

export default BaseElements;