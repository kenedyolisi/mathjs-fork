'use strict'

import { factory } from '../../utils/factory'
import {
  isBigNumber,
  isChain,
  isComplex,
  isFraction,
  isHelp,
  isIndex,
  isMatrix,
  isNode,
  isRange,
  isResultSet,
  isUnit
} from '../../utils/is'

const name = 'typeof'
const dependencies = ['typed']

export const createTypeof = factory(name, dependencies, (scope) => {
  /**
   * Determine the type of a variable.
   *
   * Function `typeof` recognizes the following types of objects:
   *
   * Object                 | Returns       | Example
   * ---------------------- | ------------- | ------------------------------------------
   * null                   | `'null'`      | `math.typeof(null)`
   * number                 | `'number'`    | `math.typeof(3.5)`
   * boolean                | `'boolean'`   | `math.typeof(true)`
   * string                 | `'string'`    | `math.typeof('hello world')`
   * Array                  | `'Array'`     | `math.typeof([1, 2, 3])`
   * Date                   | `'Date'`      | `math.typeof(new Date())`
   * Function               | `'Function'`  | `math.typeof(function () {})`
   * Object                 | `'Object'`    | `math.typeof({a: 2, b: 3})`
   * RegExp                 | `'RegExp'`    | `math.typeof(/a regexp/)`
   * undefined              | `'undefined'` | `math.typeof(undefined)`
   * math.type.BigNumber    | `'BigNumber'` | `math.typeof(math.bignumber('2.3e500'))`
   * math.type.Chain        | `'Chain'`     | `math.typeof(math.chain(2))`
   * math.type.Complex      | `'Complex'`   | `math.typeof(math.complex(2, 3))`
   * math.type.Fraction     | `'Fraction'`  | `math.typeof(math.fraction(1, 3))`
   * math.type.Help         | `'Help'`      | `math.typeof(math.help('sqrt'))`
   * math.type.Help         | `'Help'`      | `math.typeof(math.help('sqrt'))`
   * math.type.Index        | `'Index'`     | `math.typeof(math.index(1, 3))`
   * math.type.Matrix       | `'Matrix'`    | `math.typeof(math.matrix([[1,2], [3, 4]]))`
   * math.type.Range        | `'Range'`     | `math.typeof(math.range(0, 10))`
   * math.type.ResultSet    | `'ResultSet'` | `math.typeof(math.eval('a=2\nb=3'))`
   * math.type.Unit         | `'Unit'`      | `math.typeof(math.unit('45 deg'))`
   * math.expression.node&#8203;.AccessorNode            | `'AccessorNode'`            | `math.typeof(math.parse('A[2]'))`
   * math.expression.node&#8203;.ArrayNode               | `'ArrayNode'`               | `math.typeof(math.parse('[1,2,3]'))`
   * math.expression.node&#8203;.AssignmentNode          | `'AssignmentNode'`          | `math.typeof(math.parse('x=2'))`
   * math.expression.node&#8203;.BlockNode               | `'BlockNode'`               | `math.typeof(math.parse('a=2; b=3'))`
   * math.expression.node&#8203;.ConditionalNode         | `'ConditionalNode'`         | `math.typeof(math.parse('x<0 ? -x : x'))`
   * math.expression.node&#8203;.ConstantNode            | `'ConstantNode'`            | `math.typeof(math.parse('2.3'))`
   * math.expression.node&#8203;.FunctionAssignmentNode  | `'FunctionAssignmentNode'`  | `math.typeof(math.parse('f(x)=x^2'))`
   * math.expression.node&#8203;.FunctionNode            | `'FunctionNode'`            | `math.typeof(math.parse('sqrt(4)'))`
   * math.expression.node&#8203;.IndexNode               | `'IndexNode'`               | `math.typeof(math.parse('A[2]').index)`
   * math.expression.node&#8203;.ObjectNode              | `'ObjectNode'`              | `math.typeof(math.parse('{a:2}'))`
   * math.expression.node&#8203;.ParenthesisNode         | `'ParenthesisNode'`         | `math.typeof(math.parse('(2+3)'))`
   * math.expression.node&#8203;.RangeNode               | `'RangeNode'`               | `math.typeof(math.parse('1:10'))`
   * math.expression.node&#8203;.SymbolNode              | `'SymbolNode'`              | `math.typeof(math.parse('x'))`
   *
   * Syntax:
   *
   *    math.typeof(x)
   *
   * Examples:
   *
   *    math.typeof(3.5)                     // returns 'number'
   *    math.typeof(math.complex('2-4i'))    // returns 'Complex'
   *    math.typeof(math.unit('45 deg'))     // returns 'Unit'
   *    math.typeof('hello world')           // returns 'string'
   *
   * @param {*} x     The variable for which to test the type.
   * @return {string} Returns the name of the type. Primitive types are lower case,
   *                  non-primitive types are upper-camel-case.
   *                  For example 'number', 'string', 'Array', 'Date'.
   */
  const _typeof = scope.typed(name, {
    'any': function (x) {
      const t = typeof x

      if (t === 'object') {
        // JavaScript types
        if (x === null) return 'null'
        if (Array.isArray(x)) return 'Array'
        if (x instanceof Date) return 'Date'
        if (x instanceof RegExp) return 'RegExp'

        // math.js types
        if (isBigNumber(x)) return 'BigNumber'
        if (isComplex(x)) return 'Complex'
        if (isFraction(x)) return 'Fraction'
        if (isMatrix(x)) return 'Matrix'
        if (isUnit(x)) return 'Unit'
        if (isIndex(x)) return 'Index'
        if (isRange(x)) return 'Range'
        if (isResultSet(x)) return 'ResultSet'
        if (isNode(x)) return x.type
        if (isChain(x)) return 'Chain'
        if (isHelp(x)) return 'Help'

        return 'Object'
      }

      if (t === 'function') return 'Function'

      return t // can be 'string', 'number', 'boolean', ...
    }
  })

  _typeof.toTex = undefined // use default template

  return _typeof
})
