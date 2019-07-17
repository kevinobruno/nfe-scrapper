const defaultInvoice = {
  invoice: {
    number: '144451',
    serie: '10',
    issueDate: new Date('2019/06/19 19:18:57'),
    accessKey: '13190622991939001250650100001444511002312092'
  },
  market: {
    name: 'SUPERMERCADOS DBLTDA',
    address: {
      street: 'AV. EPHIGEIO SALLES',
      number: '200',
      neighborhood: 'ADRIANOPOLIS',
      city: 'MANAUS',
      state: 'AM'
    }
  },
  products: [
    {
      code: '1015494',
      description: 'HAMBURG BOV DEF PERD 672G',
      quantity: 1,
      value: 12.99,
    },
    {
      code: '1647083',
      description: 'PRES PERD TRAD FAT 200G',
      quantity: 1,
      value: 6.99,
    },
    {
      code: '1863908',
      description: 'QJ PRATO TOYA INTERF 200G',
      quantity: 1,
      value: 5.98,
    },
    {
      code: '101451',
      description: 'BISC RECH NESTLE NEGRESCO 140G',
      quantity: 1,
      value: 1.99,
    },
    {
      code: '1771078',
      description: 'BISC RECH NESTLE NEGRESCO CHOC 140G',
      quantity: 1,
      value: 2.42,
    },
    {
      code: '901407',
      description: 'BOLO ANA MARIA PULLMAN CHOC 80GR',
      quantity: 1,
      value: 2.69,
    },
    {
      code: '901407',
      description: 'BOLO ANA MARIA PULLMAN CHOC 80GR',
      quantity: 1,
      value: 2.69,
    },
    {
      code: '901407',
      description: 'BOLO ANA MARIA PULLMAN CHOC 80GR',
      quantity: 1,
      value: 2.69,
    },
    {
      code: '1475932',
      description: 'BISC RECH NESTLE PRESTIGIO 140G',
      quantity: 1,
      value: 2.49,
    },
    {
      code: '1475819',
      description: 'CHOC NESTLE KITKAT 41 5GR TB',
      quantity: 1,
      value: 2.75,
    },
    {
      code: '669946',
      description: 'CAFE ALMOF KIMIMO 250G',
      quantity: 1,
      value: 4.49,
    },
    {
      code: '669946',
      description: 'CAFE ALMOF KIMIMO 250G',
      quantity: 1,
      value: 4.49,
    },
  ],
};

const additionalInfoInvoice = {
  invoice: {
    number: '463884',
    serie: '35',
    issueDate: new Date('2019/07/16 16:35:31'),
    accessKey: '13190710713693000113650350004638841567420423'
  },
  market: {
    name: 'HI RESTAURANTE LTDA - ME',
    address: {
      street: 'AV MARIO YPIRANGA',
      number: '1300',
      neighborhood: 'ADRIANOPOLIS',
      city: 'MANAUS',
      state: 'AM'
    }
  },
  products: [
    {
      code: 'EX3028',
      description: 'MANIA 28 PROMO',
      quantity: 1,
      value: 15.4,
    },
    {
      code: 'EX0167',
      description: 'SODA (LATA)',
      quantity: 1,
      value: 5.5,
    }
  ]
};

module.exports = { additionalInfoInvoice, defaultInvoice };
