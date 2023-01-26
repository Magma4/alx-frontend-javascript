export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(CodeValue) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = CodeValue;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(NameValue) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = NameValue;
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
