import BigNumber from 'bignumber.js';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var unexpected = [undefined, null, NaN, Infinity, 'NaN', 'Infinity', ''];

var removeIdle = function removeIdle(str) {
  return Number(str) === 0 ? '0' : str.replace(/^([+-]?)([\d,]+\.\d*?)0+$/, '$1$2').replace(/\.$/, '');
};

var unify = {
  res: function res(_res) {
    return unexpected.includes(_res) ? '' : _res;
  },
  req: function req() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = args[0].replace(/,/g, '');
    if (unexpected.includes(args[0])) args[0] = 0;
    return args;
  }
};

var BN =
/*#__PURE__*/
function (_BigNumber) {
  _inherits(BN, _BigNumber);

  function BN() {
    var _getPrototypeOf2;

    _classCallCheck(this, BN);

    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BN)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments)))));
  } // Algorithm


  _createClass(BN, [{
    key: "plus",
    value: function plus() {
      var _get2;

      var unified = unify.req.apply(unify, arguments);
      return !unexpected.includes(unified[0]) ? new BN((_get2 = _get(_getPrototypeOf(BN.prototype), "plus", this)).call.apply(_get2, [this].concat(_toConsumableArray(unified)))) : new BN(_get(_getPrototypeOf(BN.prototype), "times", this).call(this, 1));
    }
  }, {
    key: "minus",
    value: function minus() {
      var unified = unify.req.apply(unify, arguments);
      return !unexpected.includes(unified[0]) ? new BN(_get(_getPrototypeOf(BN.prototype), "minus", this).call(this, unified)) : new BN(_get(_getPrototypeOf(BN.prototype), "times", this).call(this, 1));
    }
  }, {
    key: "times",
    value: function times() {
      var _get3;

      return new BN((_get3 = _get(_getPrototypeOf(BN.prototype), "times", this)).call.apply(_get3, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments)))));
    }
  }, {
    key: "div",
    value: function div() {
      var _get4;

      return new BN((_get4 = _get(_getPrototypeOf(BN.prototype), "div", this)).call.apply(_get4, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments)))));
    }
  }, {
    key: "abs",
    value: function abs() {
      var _get5;

      return new BN((_get5 = _get(_getPrototypeOf(BN.prototype), "abs", this)).call.apply(_get5, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments)))));
    }
  }, {
    key: "pow",
    value: function pow() {
      var _get6;

      return new BN((_get6 = _get(_getPrototypeOf(BN.prototype), "pow", this)).call.apply(_get6, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments)))));
    }
  }, {
    key: "round",
    value: function round() {
      var _get7;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new BN((_get7 = _get(_getPrototypeOf(BN.prototype), "decimalPlaces", this)).call.apply(_get7, [this].concat(args)));
    }
  }, {
    key: "dp",
    value: function dp() {
      var _get8;

      return new BN((_get8 = _get(_getPrototypeOf(BN.prototype), "dp", this)).call.apply(_get8, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments)))));
    }
  }, {
    key: "cmp",
    value: function cmp() {
      var _get9;

      return (_get9 = _get(_getPrototypeOf(BN.prototype), "comparedTo", this)).call.apply(_get9, [this].concat(_toConsumableArray(unify.req.apply(unify, arguments))));
    } // Formatting

  }, {
    key: "toString",
    value: function toString(precision, roundType) {
      return isNaN(precision) ? _get(_getPrototypeOf(BN.prototype), "toString", this).call(this, 10) : _get(_getPrototypeOf(BN.prototype), "decimalPlaces", this).call(this, precision, BN[roundType]).toString(10);
    }
  }, {
    key: "toNumber",
    value: function toNumber(precision, roundType) {
      return unify.res(isNaN(precision) ? _get(_getPrototypeOf(BN.prototype), "toNumber", this).call(this) : +this.toString(precision, roundType));
    }
    /*
      new ('123456.780').toFormat() >> 123,456.78
      new ('123456.780').toFormat('fixed') >> 123,456.780
      new ('123456.78').toFormat(1, 'fixed') >> 123,456.7
      new ('123456.710').toFormat(1, BN.ROUND_UP, 'fixed') >> 123456.8
    */

  }, {
    key: "toFormat",
    value: function toFormat() {
      var _get10;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var isFixed = args.includes('fixed');
      if (isFixed) args.pop();
      var argLen = args.length;
      var lastArg = args[argLen - 1];
      if (argLen > 1 && typeof lastArg === 'string') args[argLen - 1] = BN[lastArg];

      var res = (_get10 = _get(_getPrototypeOf(BN.prototype), "toFormat", this)).call.apply(_get10, [this].concat(args));

      if (!isFixed) res = removeIdle(res);
      return unify.res(res);
    }
  }]);

  return BN;
}(BigNumber);

BN.config({
  EXPONENTIAL_AT: [-1e+9, 1e+9],
  // ROUNDING_MODE: BN.ROUND_DOWN, // 1.4|1.5|1.6 >> 1
  ERRORS: false // ignore invalid inputs

});
if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') window.BN = BN;

export default BN;
