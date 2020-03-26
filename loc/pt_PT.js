module.exports = {
  _: {
    storage_is_encrypted: 'O armazenamento está encriptado. Uma password é necessária para desencriptar',
    enter_password: 'Inserir password',
    bad_password: 'pasword errada, tente novamente',
    never: 'nunca',
    continue: 'Continuar',
    ok: 'OK',
  },
  wallets: {
    options: 'opções',
    select_wallet: 'Seleccione uma Wallet',
    createBitcoinWallet: 'Para poder usar uma wallet Lightning, é necessária uma wallet Bitcoin para a financiar. Deseja continuar?',

    list: {
      app_name: 'Veles Wallet',
      title: 'wallets',
      header: 'Uma wallet representa um par entre um segredo (chave privada) e um endereço' + 'que pode partilhar para receber Bitcoin.',
      add: 'adicionar wallet',
      create_a_wallet: 'Adicionar uma wallet',
      create_a_wallet1: 'É gratuito e pode',
      create_a_wallet2: 'adicionar quantas quiser',
      latest_transaction: 'últimas transacções',
      empty_txs1: 'As suas transacções aparecerão aqui,',
      empty_txs2: 'nenhuma de momento',
      empty_txs1_lightning:
        'A wallet Lightning deve ser usada para as suas transações diárias. As taxas são muito baixas e a velocidade muito elevada',
      empty_txs2_lightning: '\nPara começar a usar toque em "gerir fundos" e recarregue o seu saldo.',
      tap_here_to_buy: 'Toque aqui para comprar Bitcoin',
    },
    reorder: {
      title: 'Reordenar Wallets',
    },
    add: {
      title: 'adicionar wallet',
      description:
        'Pode fazer um scan de um backup de uma wallet em papel (em WIF - Wallet Import Format), ou criar uma nova wallet. Segwit suportado por defeito.',
      scan: 'Scan',
      create: 'Adicionar',
      label_new_segwit: 'Novo SegWit',
      label_new_lightning: 'Novo Lightning',
      wallet_name: 'nome',
      wallet_type: 'tipo',
      or: 'ou',
      import_wallet: 'Importar wallet',
      imported: 'Importada',
      coming_soon: 'Brevemente',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'wallet',
      address: 'Endereço',
      type: 'Tipo',
      delete: 'Eliminar',
      save: 'Guardar',
      label: 'Nome',
      destination: 'destino',
      description: 'descrição',
      are_you_sure: 'Tem a certeza?',
      yes_delete: 'Sim, eliminar',
      no_cancel: 'Não, cancelar',
      delete_this_wallet: 'Apagar esta wallet',
      export_backup: 'Exportar / backup',
      buy_bitcoin: 'Comprar Bitcoin',
      show_xpub: 'Mostar XPUB da wallet',
    },
    export: {
      title: 'Exportar Wallet',
    },
    xpub: {
      title: 'XPUB da wallet',
      copiedToClipboard: 'copiado para o clipboard',
    },
    import: {
      title: 'importar',
      explanation:
        'Escreva a sua frase mnemónica, chave privada, WIF, ou qualquer informação que disponha. Vamos tentar interpretar o formato e importar a sua wallet',
      imported: 'Importada',
      error: 'Falhou. É um dado válido?',
      success: 'Sucesso',
      do_import: 'Importar',
      scan_qr: 'ou scan o QR code?',
    },
    scanQrWif: {
      go_back: 'Voltar',
      cancel: 'Cancelar',
      decoding: 'Descodificar',
      input_password: 'Inserir password',
      password_explain: 'Isto é uma chave privada encriptada BIP38',
      bad_password: 'Password errada',
      wallet_already_exists: 'Esta wallet já existe',
      bad_wif: 'WIF errado',
      imported_wif: 'WIF transferido ',
      with_address: ' com endereço ',
      imported_segwit: 'SegWit transferido',
      imported_legacy: 'Legacy transferido',
      imported_watchonly: 'Watch-only importada',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacções',
      title: 'transacções',
      description: 'Uma lista de transacções feitas ou recebidas nas suas wallets',
      conf: 'conf',
    },
    details: {
      title: 'detalhes',
      from: 'De',
      to: 'Para',
      copy: 'Copiar',
      transaction_details: 'Detalhes da transacção',
      show_in_block_explorer: 'Mostrar no block explorer',
    },
  },
  send: {
    header: 'Enviar',
    confirm: {
      header: 'Confirmar',
      sendNow: 'Enviar agora',
    },
    success: {
      done: 'Done',
    },
    details: {
      title: 'Criar Transacção',
      amount_field_is_not_valid: 'Campo de quantia não é válido',
      fee_field_is_not_valid: 'Campo de taxa não é válido',
      address_field_is_not_valid: 'Campo de endereço não é válido',
      receiver_placeholder: 'endereço de envio aqui',
      amount_placeholder: 'quantia a enviar (em VLS)',
      fee_placeholder: 'mais a taxa de transacção (em VLS)',
      create_tx_error: 'Houve um erro na criação da transacção. Por favor verifique que o endereço é válido.',
      note_placeholder: 'Nota pessoal',
      total_exceeds_balance: 'O valor total excede o saldo disponível.',
      cancel: 'Cancelar',
      scan: 'Scan',
      create: 'Criar',
      address: 'Endereço',
      send: 'Enviar',
      remaining_balance: 'Saldo restante',
    },
    create: {
      title: 'Criar Transacção',
      details: 'Detalhes',
      error: 'Erro ao criar transacção. Endereço inválido ou quantia?',
      go_back: 'Voltar',
      this_is_hex: 'Este é o hex da transacção, assinado e pronto para ser difundido para a network. Continuar?',
      to: 'Para',
      amount: 'Quantia',
      fee: 'Taxa',
      tx_size: 'Tamanho TX',
      satoshi_per_byte: 'satoshiPerByte',
      memo: 'Nota pessoal',
      broadcast: 'Difundir',
      not_enough_fee: 'Taxa demasiado baixo. Aumente a taxa.',
    },
  },
  buyBitcoin: {
    header: 'Comprar Bitcoin',
    tap_your_address: 'Toque no seu endereço para o copiar para o clipboard:',
    copied: 'Copied to Clipboard!',
  },
  receive: {
    header: 'receber',
    details: {
      title: 'Partilhar este endereço com o pagador',
      share: 'partilhar',
      copiedToClipboard: 'copiado para clipboard',
      label: 'Descrição',
      create: 'Criar',
      setAmount: 'Quantia a receber',
    },
    scan_lnurl: 'Receber lendo QR',
  },
  settings: {
    tabBarLabel: 'Definições',
    header: 'definições',
    plausible_deniability: 'Negação plausível...',
    storage_not_encrypted: 'Armazenamento: não encriptado',
    storage_encrypted: 'Armazenamento: encriptado',
    password: 'Password',
    password_explain: 'Definir a password para desencriptar o armazenamento',
    retype_password: 'Inserir password novamente',
    passwords_do_not_match: 'Passwords não coincidem',
    encrypt_storage: 'Encriptar',
    lightning_settings: 'Definições do Lightning',
    lightning_settings_explain:
      'Para se ligar ao seu próprio node LND, por favor instale o LndHub ' +
      'e coloque o seu endereço aqui nas definições. ' +
      'Deixe em branco para usar o LNDHub da Veles Wallet (lndhub.io). ' +
      'Wallets criadas depois desta alteração ligar-se-ão ao LNDHub especificado.',
    electrum_settings: 'Definições do Electrum',
    electrum_settings_explain: 'Deixe em branco para usar o valor por omissão',
    save: 'Guardar',
    about: 'Sobre',
    language: 'Idioma',
    currency: 'Moeda',
    advanced_options: 'Opções Avançadas',
    enable_advanced_mode: 'Ligar modo avançado',
  },
  plausibledeniability: {
    title: 'Negação plausível',
    help:
      'Em algumas circunstâncias, pode ser forçado a relevar uma ' +
      'password. Para manter as suas moedas seguras, A Veles Wallet pode criar outro ' +
      'armazenamento encriptado, com uma password diferente. Sobre pressão, ' +
      'pode revelar esta password a um terceiro. Se inserida na ' +
      'Veles Wallet, esta vai abrir um armazenamento "falso". Que vai parecer ' +
      'legítimo a um terceiro, mas que secretamente vai manter o seu armazenamento principal ' +
      'com as moedas em segurança.',
    help2: 'Este novo armazenamento é completamente funcional, e pode guardar ' + 'um valor minímo para parecer mais real.',
    create_fake_storage: 'Criar armazenamento encriptado FALSO',
    go_back: 'Voltar',
    create_password: 'Criar password',
    create_password_explanation: 'Password para armazenamento FALSO não deve coincidir com a password principal',
    password_should_not_match: 'Password para armazenamento FALSO não deve coincidir com a password principal',
    retype_password: 'Inserir password novamente',
    passwords_do_not_match: 'Passwords não coincidem, tente novamente',
    success: 'Sucesso',
  },
  lnd: {
    title: 'gerir saldo',
    choose_source_wallet: 'Escolha a wallet',
    refill_lnd_balance: 'Carregar o saldo da Lightning wallet',
    refill: 'Carregar',
    placeholder: 'Factura',
    withdraw: 'Transferir',
    expired: 'Expirado',
    sameWalletAsInvoiceError: 'Não pode pagar uma factura com a mesma wallet usada para a criar.',
  },
  pleasebackup: {
    title: 'A sua wallet foi criada...',
    text:
      'Por favor escreva esta frase mnemónica numa folha de papel. É o seu backup e pode usá-lo para restaurar a sua wallet noutro device.',
    ok: 'OK, eu escrevi-a num papel!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'Esta factura não foi paga e expirou',
    has_been_paid: 'Esta factura foi paga',
    please_pay: 'Por favor pague',
    sats: 'sats',
    for: 'Para:',
    additional_info: 'Informação adicional',
    open_direct_channel: 'Abrir canal directo com este node:',
  },
};
