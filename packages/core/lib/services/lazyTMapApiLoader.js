export default class TMapAPILoader {
  constructor(config) {
    this.config = { version: "4.0", ...config };
    this._document = document;
  }

  load() {
    return new Promise((resolve, reject) => {
      const UIScript = document.createElement("script");
      const { key, version } = this.config;
      UIScript.src = `https://api.tianditu.gov.cn/api?v=${version}&tk=${key}`;
      UIScript.type = "text/javascript";
      UIScript.async = true;
      this._document.head.appendChild(UIScript);
      UIScript.onload = () => {
        setTimeout(resolve, 0);
      };
      UIScript.onerror = () => reject();
    });
  }
}
