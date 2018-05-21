/* money.js 0.2, MIT license, http://openexchangerates.github.io/money.js */
(function (g, j) {
	var b = function (a) {
		return new i(a);
	};
	b.version = "0.1.3";
	var c = g.fxSetup || {
		rates: {}, base: ""
	};
	b.rates = c.rates;
	b.base = c.base;
	b.settings = {from: c.from || b.base, to: c.to || b.base};
	var h = b.convert = function (a, e) {
		if ("object" === typeof a && a.length) {
			for (var d = 0; d < a.length; d++)
				a[d] = h(a[d], e);
			return a;
		}
		e = e || {};
		if (!e.from)
			e.from = b.settings.from;
		if (!e.to)
			e.to = b.settings.to;
		var d = e.to, c = e.from, f = b.rates;
		f[b.base] = 1;
		if (!f[d] || !f[c])
			throw"fx error";
		d = c === b.base ? f[d] : d === b.base ? 1 / f[c] : f[d] * (1 / f[c]);
		return a * d;
	}, i = function (a) {
		"string" === typeof a ? (this._v = parseFloat(a.replace(/[^0-9-.]/g, "")), this._fx = a.replace(/([^A-Za-z])/g, "")) : this._v = a;
	}, c = b.prototype = i.prototype;
	c.convert = function () {
		var a = Array.prototype.slice.call(arguments);
		a.unshift(this._v);
		return h.apply(b, a);
	};
	c.from = function (a) {
		a = b(h(this._v, {from: a, to: b.base}));
		a._fx = b.base;
		return a;
	};
	c.to = function (a) {
		return h(this._v, {from: this._fx ? this._fx : b.settings.from, to: a})
	};
	if ("undefined" !== typeof exports) {
		if ("undefined" !== typeof module && module.exports)
			exports = module.exports = b;
		exports.fx = fx;
	} else
		"function" === typeof define && define.amd ? define([], function () {
			return b;
		}) : (b.noConflict = function (a) {
			return function () {
				g.fx = a;
				b.noConflict = j;
				return b;
			};
		}(g.fx), g.fx = b);
})(this);
function convert(fromValue,toValue){
	temporaryValue=toEuro(fromValue).toNew(toValue);
	
}
function toEuro(fromValue){
	switch(fromValue) {
    case AUD:
        return fromValue*0.64102;
        break;
    case BRL:
        return fromValue*0.22792;
        break;
	case GBP:
        return fromValue*1.14225;
        break;
	case CAD:
        return fromValue*0.66256;
        break;
	case CLP:
        return fromValue*0.00134;
        break;
	case CNY:
        return fromValue*0.13337;
        break;
    case CZK:
        return fromValue*0.03899;
        break;
	case DKK:
        return fromValue*0.13428;
        break;
	case EUR:
        return fromValue;
        break;
	case HKD:
        return fromValue*0.10855;
        break;
	case HUF:
        return fromValue*0.00314;
        break;
    case INR:
        return fromValue*0.01252;
        break;
	case IDR:
        return fromValue*0.00006;
        break;
	case ILS:
        return fromValue*0.23738;
        break;
	case JPY:
        return fromValue*0.00766;
        break;
	case KRW:
        return fromValue*0.00079;
        break;
    case MYR:
        return fromValue*0.21408;
        break;
	case MXN:
        return fromValue*0.04268;
        break;
	case NZD:
        return fromValue*0.58764;
        break;
	case NOK:
        return fromValue*0.10514;
        break;
	case PKR:
        return fromValue*0.00736;
        break;
    case PHP:
        return fromValue*0.01625;
        break;
	case PLN:
        return fromValue*0.23254;
        break;
	case RUB:
        return fromValue*0.01365;
        break;
	case SGD:
        return fromValue*0.63338;
        break;
	case ZAR:
        return fromValue*0.06648;
        break;
    case SEK:
        return fromValue*0.09728;
        break;
	case CHF:
        return fromValue*0.85227;
        break;
	case TWD:
        return fromValue*0.02841;
        break;
	case THB:
        return fromValue*0.02643;
        break;
	case TRY:
        return fromValue*0.18726;
        break;
	case USD:
        return fromValue*0.85220;
        break;
    default:
        alert("Inserire valuta!");
	}
}
function toNew(toValue){
	switch(fromValue) {
    case AUD:
        return fromValue*0.64102;
        break;
    case BRL:
        return fromValue*0.22792;
        break;
	case GBP:
        return fromValue*1.14225;
        break;
	case CAD:
        return fromValue*0.66256;
        break;
	case CLP:
        return fromValue*0.00134;
        break;
	case CNY:
        return fromValue*0.13337;
        break;
    case CZK:
        return fromValue*0.03899;
        break;
	case DKK:
        return fromValue*0.13428;
        break;
	case EUR:
        return fromValue;
        break;
	case HKD:
        return fromValue*0.10855;
        break;
	case HUF:
        return fromValue*0.00314;
        break;
    case INR:
        return fromValue*0.01252;
        break;
	case IDR:
        return fromValue*0.00006;
        break;
	case ILS:
        return fromValue*0.23738;
        break;
	case JPY:
        return fromValue*0.00766;
        break;
	case KRW:
        return fromValue*0.00079;
        break;
    case MYR:
        return fromValue*0.21408;
        break;
	case MXN:
        return fromValue*0.04268;
        break;
	case NZD:
        return fromValue*0.58764;
        break;
	case NOK:
        return fromValue*0.10514;
        break;
	case PKR:
        return fromValue*0.00736;
        break;
    case PHP:
        return fromValue*0.01625;
        break;
	case PLN:
        return fromValue*0.23254;
        break;
	case RUB:
        return fromValue*0.01365;
        break;
	case SGD:
        return fromValue*0.63338;
        break;
	case ZAR:
        return fromValue*0.06648;
        break;
    case SEK:
        return fromValue*0.09728;
        break;
	case CHF:
        return fromValue*0.85227;
        break;
	case TWD:
        return fromValue*0.02841;
        break;
	case THB:
        return fromValue*0.02643;
        break;
	case TRY:
        return fromValue*0.18726;
        break;
	case USD:
        return fromValue*0.85220;
        break;
    default:
        alert("Inserire valuta!");
	}
}