
export function flatmap(arrays) {
  return [].concat.apply([], arrays);
}

//TODO TESTS
function resolvePlugin(type, obj) {
  return function(obj) {
    let plugin = {};
    if (typeof obj === 'string') {
      plugin = {
        id: obj,
        module: require(obj),
        config: {}
      };
    } else {
      plugin = obj;
      if (typeof plugin.module === 'string') {
        plugin.id = plugin.module;
        plugin.module = require(plugin.id);
      }
    }

    if (typeof obj.module === 'function' && !obj.id) {
      throw new Error(`Can not specify a custom ${type} without an id property`);
    }
    
    plugin.config = plugin.config || {};

    return plugin;
  };
}

// abstracted just to provide slightly better error messages.
export const resolveReporter = resolvePlugin('reporter');
export const resolveAnalyzer = resolvePlugin('analyzer');
