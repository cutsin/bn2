import BigNumber from 'bignumber.js'

const unexpected = [undefined, null, NaN, Infinity, 'NaN', 'Infinity', '']

const removeIdle = str => {
  return Number(str) === 0 ? '0' : str.replace(/^([+-]?)([\d,]+\.\d*?)0+$/, '$1$2').replace(/\.$/, '')
}

const unify = {
  res (res) {return unexpected.includes(res) ? '' : res},
  req (...args) {
    if (typeof args[0] === 'string') args[0] = args[0].replace(/,/g, '')
    if (unexpected.includes(args[0])) args[0] = 0
    return args
  }
}

class BN extends BigNumber {
  constructor (...args) {
    super(unify.req(...args))
  }

  // Algorithm
  plus (...args) {
    const unified = unify.req(...args)
    return !unexpected.includes(unified[0]) ? new BN(super.plus(unified)) : new BN(super.times(1))
  }
  minus (...args) {
    const unified = unify.req(...args)
    return !unexpected.includes(unified[0]) ? new BN(super.minus(unified)) : new BN(super.times(1))
  }
  times (...args) { return new BN(super.times(unify.req(...args))) }
  div (...args) { return new BN(super.div(unify.req(...args))) }
  abs (...args) { return new BN(super.abs(unify.req(...args))) }
  pow (...args) { return new BN(super.pow(unify.req(...args))) }
  round (...args) { return new BN(super.decimalPlaces(...args)) }
  dp (...args) { return new BN(super.dp(unify.req(...args))) }
  cmp (...args) { return super.comparedTo(unify.req(...args)) }

  // Formatting
  toString (precision, roundType) {
    return isNaN(precision) ? super.toString(10) : super.decimalPlaces(precision, BN[roundType]).toString(10)
  }
  toNumber (precision, roundType) {
    return unify.res(isNaN(precision) ? super.toNumber() : +this.toString(precision, roundType))
  }
  /*
    new ('123456.780').toFormat() >> 123,456.78
    new ('123456.780').toFormat('fixed') >> 123,456.780
    new ('123456.78').toFormat(1, 'fixed') >> 123,456.7
    new ('123456.710').toFormat(1, BN.ROUND_UP, 'fixed') >> 123456.8
  */
  toFormat (...args) {
    let isFixed = args.includes('fixed')
    if (isFixed) args.pop()
    const argLen = args.length
    const lastArg = args[argLen - 1]
    if (argLen > 1 && typeof lastArg === 'string') args[argLen - 1] = BN[lastArg]
    let res = super.toFormat(...args)
    if (!isFixed) res = removeIdle(res)
    return unify.res(res)
  }
}

BN.config({
  EXPONENTIAL_AT: [-1e+9, 1e+9],
  // ROUNDING_MODE: BN.ROUND_DOWN, // 1.4|1.5|1.6 >> 1
  ERRORS: false // ignore invalid inputs
})

if (typeof window === 'object') window.BN = BN

export default BN
