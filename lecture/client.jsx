const React = require('react')
const ReactDom = require('react-dom')

import Lotto from './Lotto';

// const Test = require('./RenderTest')
// const GuGuDan = require('./GuGuDan')
// const WordRelay = require('./WordRelay')
// const NumberBaseball = require('./NumberBaseball')
// const NumberBaseballHooks = require('./NumberBaseballHooks')
// const RSP = require('./RSP')
// const Lotto = require('./Lotto')

ReactDom.render(<Lotto />, document.querySelector('#root'))