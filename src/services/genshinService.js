class GenshinService {
  _apiUrlchars = "https://api.genshin.dev/characters/";
  _apiChar = "https://api.genshin.dev/characters/diluc";
  charImage = "icon-big";
  _apiArt = "https://api.genshin.dev/artifacts";
  artImage = "circlet-of-logos";
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getChars = async () => {
    const res = await this.getResource(`${this._apiUrlchars}`);
    return res;
  };
  getCharacter = async (url) => {
    const res = await this.getResource(url);
    res.thumbnail = `${url}/${this.charImage}`;
    return res;
  };
  getArts = async () => {
    const res = await this.getResource(`${this._apiArt}`);
    return res;
  };
  getArtifact = async (url) => {
    const res = await this.getResource(url);
    res.thumbnail = `${url}/${this.artImage}`;
    return res;
  };
  getAllArtifacts = async (url) => {
    let artArr = await this.getArts();

    const promises = artArr.map((name) => `${this._apiArt}/${name}`);
    const b = [];
    for (let i = 0; i < promises.length; i++) {
      b.push(this.getArtifact(promises[i]));
    }
    const result = await Promise.all(b);

    return result;
  };
  getAllCharacters = async () => {
    let charArr = await this.getChars();

    const promises = charArr.map((name) => `${this._apiUrlchars}${name}`);
    /* for (const item of promises) {
      let i = promises.indexOf(item);  рабочий вариант
      //if (item.name.startsWith("Traveler")) {continue;}
      await this.getCharacter(item).then((res) => (a[i] = res));
    } */
    /*  promises.forEach((item, i) =>
      this.getCharacter(item).then((res) => (a[i] = res))
    ); */ //// так нельзя
    const b = [];
    for (let i = 0; i < promises.length; i++) {
      b.push(this.getCharacter(promises[i]));
    }
    const result = await Promise.all(b);

    return result;
  };
  _transformCharacter = (char) => {
    return {
      name: char.name,
      affiliation: char.affiliation,
      description: char.description,
      thumbnail: char.thumbnail,
      rarity: char.rarity,
      vision: char.vision,
      weapon: char.weapon,
    };
  };
}
export default GenshinService;
