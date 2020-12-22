interface StringCollection<T> {
  en?: T;
}

export default class StringLocalization<T> {
  strings?: StringCollection<T>;

  constructor(strings: StringCollection<T>) {
    this.strings = strings;
  }

  public get() {
    return this.strings?.en;
  }
}
