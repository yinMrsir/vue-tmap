export default class TMapAPILoader {
  constructor(config) {
    this.config = { version: "4.0", ...config };
    this._document = document;
  }

  async load() {
    const { plugins } = this.config;
    if (plugins?.includes("carTrack")) {
      await this.loadTMap();
      await this.loadD3();
      await this.loadCarTrack();
    } else {
      await this.loadTMap();
    }
  }

  loadTMap() {
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

  async loadD3() {
    const scriptPromises = [];

    const jsFiles = [
      `http://lbs.tianditu.gov.cn/js/lib/d3/d3.min.js`,
      `http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.js`,
    ];

    jsFiles.forEach((fileUrl) => {
      const UIScript = document.createElement("script");
      UIScript.src = fileUrl;
      UIScript.type = "text/javascript";
      UIScript.async = true;
      document.head.appendChild(UIScript);

      const scriptPromise = new Promise((resolve, reject) => {
        UIScript.onload = () => {
          setTimeout(resolve, 0);
        };
        UIScript.onerror = () => reject();
      });

      scriptPromises.push(scriptPromise);
    });

    await Promise.all(scriptPromises);
  }

  loadCarTrack() {
    return new Promise((resolve, reject) => {
      const UIScript = document.createElement("script");
      UIScript.src = `http://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.js`;
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
