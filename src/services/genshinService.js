

class GenshinService {
  _apiUrlchars = "https://api.genshin.dev/characters/";
  _apiChar = "https://api.genshin.dev/characters/diluc";
  charImage = "icon-big";
  _apiArt = "https://api.genshin.dev/artifacts/";
  artImage = "circlet-of-logos";
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getNames = async (url) => {
    const res = await this.getResource(`${url}`);
    return res;
  };

  getDetailedDataWithImage = async (url, thumbnail) => {
    const res = await this.getResource(url);
    res.thumbnail = `${url}/${thumbnail}`;
    return res;
  };

  getAllData = async (url, thumbnail) => {
    const dataArr = await this.getNames(url);
    const urlsArr = dataArr.map((name) => `${url}${name}`);
    const dataArrWithImage = [];
    for (let i = 0; i < urlsArr.length; i++) {
      dataArrWithImage.push(
        this.getDetailedDataWithImage(urlsArr[i], thumbnail)
      );
    }
    const result = await Promise.all(dataArrWithImage);
    return result;
  };
  getAllChars = () => this.getAllData(this._apiUrlchars, this.charImage);

  getAllArts = () => this.getAllData(this._apiArt, this.artImage);
}
export default GenshinService;
