const measurementUnits = [
    'kg',
    'g',
    'Oz',
    'lb',
    'L',
    'mL',
    'fl. Oz',
    'gal',
    'unit'
  ];
  
  export { measurementUnits };

const preparationLoss = [
      { 'option':  '0%',
      'value':  1},
      { 'option':  '5%',
      'value':  0.95},
      { 'option':  '10%',
      'value':  0.9},
      { 'option':  '15%',
      'value':  0.85 },
      { 'option':  '20%',
      'value':  0.8 },
      { 'option':  '25%',
      'value':  0.75 },
      { 'option':  '30%',
      'value':  0.7 },
      { 'option':  '35%',
      'value':  0.65 },
      { 'option':  '40%',
      'value':  0.6 },
      { 'option':  '45%',
      'value':  0.55 },
      { 'option':  '50%',
      'value':  0.5 },
    //   { 'option':  '55%',
    //   'value':  0.45 },
    //   { 'option':  '60%',
    //   'value':  0.4 },
    //   { 'option':  '65%',
    //   'value':  0.35 },
    //   { 'option':  '70%',
    //   'value':  0.3 },
    //   { 'option':  '75%',
    //   'value':  0.25 },
    //   { 'option':  '80%',
    //   'value':  0.2 },
    //   { 'option':  '85%',
    //   'value':  0.15 },
    //   { 'option':  '90%',
    //   'value':  0.1 },
    //   { 'option':  '95%',
    //   'value':  0.05 },
]
export { preparationLoss };
  
  const measurementFunctions =  { 
    'unit': {
        'unit': (val) => (val  * 1),
        'unk' : (val) =>  (val * 0),
    },
    'L': {
          'mL': (val) => (val  * 1000),
          'fl. Oz': (val) =>  (val * 35.1951),
          'gal': (val) =>  (val * 0.2199),
          'L' : (val) => (val * 1 ),
          'unk' : (val) =>  (val * 0),
         },
    'mL': {
        'mL': (val) => (val  * 1), 
        'L': (val) => (val  * 0.001),
        'fl. Oz': (val) =>  (val * 0.035195100000219199654),
        'gal': (val) =>  (val * 0.000219969),
        'unk' : (val) =>  (val * 0)
    },
    'gal': {
        'mL': (val) => (val  * 4546.09), 
        'L': (val) => (val  * 4.54609),
        'fl. Oz': (val) =>  (val * 160),
        'gal': (val) =>  (val * 1),
        'unk' : (val) =>  (val * 0)
    },
    'fl. Oz': {
        'mL': (val) => (val  * 28.4131), 
        'L': (val) => (val  * 0.0284131),
        'fl. Oz': (val) =>  (val * 1),
        'gal': (val) =>  (val * 0.00625),
        'unk' : (val) =>  (val * 0)
    },
    'kg': {
        'kg': (val) => (val * 1),
        'g': (val) => (val * 1000),
        'oz': (val) => (val * 35.274),
        'lb': (val) => (val * 2.204625002841),
        'unk': (val) => (val * 0)
    },
    'g': {
        'kg': (val) => (val * 0.001),
        'g': (val) => (val * 1),
        'oz': (val) => (val * 0.035274),
        'lb': (val) => (val * 0.00220462),
        'unk': (val) => (val * 0)
    },
    'Oz': {
        'kg': (val) => (val * 0.0283495),
        'g': (val) => (val * 28.3495),
        'oz': (val) => (val * 1),
        'lb': (val) => (val * 0.0625),
        'unk': (val) => (val * 0)
    },
    'lb': {
        'kg': (val) => (val * 0.453592),
        'g': (val) => (val * 453.592),
        'oz': (val) => (val * 16),
        'lb': (val) => (val * 1),
        'unk': (val) => (val * 0)
    },
  }
  export {measurementFunctions}