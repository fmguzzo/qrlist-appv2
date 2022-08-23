export class StorePersist {
  static PERSIST_KEYS = {
    USER_INFO: 'USER_INFO',
  };

  static set(key, state) {
    window.localStorage.setItem(key, JSON.stringify(state));
  }

  static get(key) {
    const result = window.localStorage.getItem(key);
    return JSON.parse(result);
  }

  static remove(key) {
    window.localStorage.removeItem(key);
  }

  static getAll() {
    return window.localStorage;
  }

  static clear() {
    window.localStorage.clear();
  }
}
