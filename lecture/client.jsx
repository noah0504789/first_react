const React = require('react')
const ReactDom = require('react-dom')

import MineSearch from './MineSearch';

// const Test = require('./RenderTest')
// const GuGuDan = require('./GuGuDan')
// const WordRelay = require('./WordRelay')
// const NumberBaseball = require('./NumberBaseball')
// const NumberBaseballHooks = require('./NumberBaseballHooks')
// const RSP = require('./RSP')
// const Lotto = require('./Lotto')

ReactDom.render(<MineSearch />, document.querySelector('#root'))