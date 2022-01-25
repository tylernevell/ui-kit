type ColorsType = {
  type:
    | 'disabled'
    | 'primary'
    | 'hover'
    | 'active'
    | 'white'
    | 'whiteS'
    | 'grayM'
    | 'grayL'
    | 'grayS'
    | 'gray'
    | 'grayK'
    | 'black'
    | 'redGirl'
    | 'redBoy'
    | 'red'
    | 'superRed'
    | 'green';
};

type ColorsArrayType = {
  type: ColorsType;
  hexString: string;
};

const ColorsArray = [
  {
    type: 'disabled',
    hexString: '#8ab8d7',
  },
  {
    type: 'primary',
    hexString: '#1470af',
  },
  {
    type: 'hover',
    hexString: '#12659e',
  },
  {
    type: 'active',
    hexString: '#0e4e7a',
  },
  {
    type: 'white',
    hexString: '#ffffff',
  },
  {
    type: 'whiteS',
    hexString: '#FFFFFFE0',
  },
  {
    type: 'grayM',
    hexString: '#fafafa',
  },
  {
    type: 'grayL',
    hexString: '#f1f1f1',
  },
  {
    type: 'grayS',
    hexString: '#d4d4d4',
  },
  {
    type: 'gray',
    hexString: '#1111117A',
  },
  {
    type: 'grayK',
    hexString: '#6b6b6b',
  },
  {
    type: 'black',
    hexString: '#111111',
  },
  {
    type: 'redGirl',
    hexString: '#f9e3e3',
  },
  {
    type: 'redBoy',
    hexString: '#f2caca',
  },
  {
    type: 'red',
    hexString: '#db524e',
  },
  {
    type: 'superRed',
    hexString: '#c7302b',
  },
  {
    type: 'green',
    hexString: '#27ae60',
  },
];

export { ColorsArray };
export type { ColorsArrayType };
