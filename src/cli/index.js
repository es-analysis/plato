
import clapi from 'clapi';

import store from '../commands/batch/store';

const plato = clapi.Application.init();

plato.command('default', store)
  .pre((input, output) => {
    
  });

export default plato;