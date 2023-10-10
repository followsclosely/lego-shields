import { Injectable } from '@angular/core';

export class Shield {
  public year : number = 0;
  constructor(public owned : boolean, public id: string, public color : string, public imageUrl: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ShieldService {

  private shields : Shield[];

  constructor() {
    this.shields = [
      new Shield(true, "n/a", "", ""),
      new Shield(true, "22385pb001", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb001.t1.png"),
      new Shield(true, "22385pb002", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb002.t1.png"),
      new Shield(true, "22385pb003", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb003.t1.png"),
      new Shield(true, "22385pb004", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb004.t1.png"),
      new Shield(true, "22385pb005", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb005.t1.png"),
      new Shield(true, "22385pb006", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb006.t1.png"),
      new Shield(true, "22385pb007", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb007.t1.png"),
      new Shield(true, "22385pb008", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb008.t1.png"),
      new Shield(true, "22385pb009", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb009.t1.png"),
      new Shield(true, "22385pb010", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb010.t1.png"),
      new Shield(true, "22385pb011", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb011.t1.png"),
      new Shield(true, "22385pb012", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb012.t1.png"),
      new Shield(true, "22385pb013", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb013.t1.png"),
      new Shield(true, "n/a", "", ""),

      new Shield(true, "22385pb014", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb014.t1.png"),
      new Shield(true, "22385pb015", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb015.t1.png"),
      new Shield(true, "22385pb016", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb016.t1.png"),
      new Shield(true, "22385pb017", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb017.t1.png"),
      new Shield(true, "22385pb018", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb018.t1.png"),
      new Shield(true, "22385pb019", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb019.t1.png"),
      new Shield(false, "22385pb020", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb020.t1.png"),
      new Shield(true, "22385pb021", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb021.t1.png"),
      new Shield(true, "22385pb022", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb022.t1.png"),
      new Shield(true, "22385pb023", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb023.t1.png"),
      new Shield(true, "22385pb024", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb024.t1.png"),
      new Shield(true, "22385pb025", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb025.t1.png"),
      new Shield(true, "22385pb026", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb026.t1.png"),
      new Shield(true, "22385pb027", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb027.t1.png"),
      new Shield(true, "22385pb028", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb028.t1.png"),
      
      new Shield(true, "22385pb029", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb029.t1.png"),
      new Shield(true, "22385pb030", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb030.t1.png"),
      new Shield(true, "22385pb031", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb031.t1.png"),
      new Shield(true, "22385pb032", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb032.t1.png"),
      new Shield(true, "22385pb033", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb033.t1.png"),
      new Shield(true, "22385pb034", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb034.t1.png"),
      new Shield(true, "22385pb035", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb035.t1.png"),
      new Shield(true, "22385pb036", "95", "https://img.bricklink.com/ItemImage/PT/95/22385pb036.t1.png"),
      new Shield(true, "22385pb037", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb037.t1.png"),
      new Shield(true, "22385pb038", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb038.t1.png"),
      new Shield(true, "22385pb039", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb039.t1.png"),
      new Shield(true, "22385pb040", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb040.t1.png"),
      new Shield(true, "22385pb041", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb041.t1.png"),
      new Shield(true, "22385pb042", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb042.t1.png"),
      new Shield(true, "22385pb043", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb043.t1.png"),

      new Shield(true, "22385pb044", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb044.t1.png"),
      new Shield(true, "22385pb045", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb045.t1.png"),
      new Shield(true, "22385pb046", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb046.t1.png"),
      new Shield(true, "22385pb047", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb047.t1.png"),
      new Shield(true, "22385pb048", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb048.t1.png"),
      new Shield(true, "22385pb049", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb049.t1.png"),
      new Shield(true, "22385pb050", "11", "https://img.bricklink.com/ItemImage/PT/11/22385pb050.t1.png"),
      new Shield(true, "22385pb051", "7", "https://img.bricklink.com/ItemImage/PT/7/22385pb051.t1.png"),
      new Shield(true, "22385pb052", "11", "https://img.bricklink.com/ItemImage/PT/11/22385pb052.t1.png"),
      new Shield(true, "22385pb053", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb053.t1.png"),
      new Shield(true, "22385pb054", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb054.t1.png"),
      new Shield(true, "22385pb055", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb055.t1.png"),
      new Shield(true, "22385pb056", "18", "https://img.bricklink.com/ItemImage/PT/18/22385pb056.t1.png"),
      new Shield(true, "22385pb057", "1", "https://img.bricklink.com/ItemImage/PT/1/22385pb057.t1.png"),
      new Shield(true, "22385pb058", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb058.t1.png"),

      new Shield(true, "22385pb059", "51", "https://img.bricklink.com/ItemImage/PT/51/22385pb059.t1.png"),
      new Shield(true, "22385pb060", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb060.t1.png"),
      new Shield(true, "22385pb061", "51", "https://img.bricklink.com/ItemImage/PT/51/22385pb061.t1.png"),
      new Shield(false, "22385pb062", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb062.t1.png"),
      new Shield(true, "22385pb063", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb063.t1.png"),
      new Shield(true, "22385pb064", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb064.t1.png"),
      new Shield(true, "22385pb065", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb065.t1.png"),
      new Shield(true, "22385pb066", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb066.t1.png"),
      new Shield(true, "22385pb067", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb067.t1.png"),
      new Shield(true, "22385pb068", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb068.t1.png"),
      new Shield(true, "22385pb069", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb069.t1.png"),
      new Shield(true, "22385pb070", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb070.t1.png"),
      new Shield(true, "22385pb071", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb071.t1.png"),
      new Shield(true, "22385pb072", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb072.t1.png"),
      new Shield(true, "22385pb073", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb073.t1.png"),

      new Shield(true, "22385pb074", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb074.t1.png"),
      new Shield(true, "22385pb075", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb075.t1.png"),
      new Shield(true, "22385pb076", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb076.t1.png"),
      new Shield(true, "22385pb077", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb077.t1.png"),
      new Shield(true, "22385pb078", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb078.t1.png"),
      new Shield(true, "22385pb079", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb079.t1.png"),
      new Shield(true, "22385pb080", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb080.t1.png"),
      new Shield(true, "22385pb081", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb081.t1.png"),
      new Shield(true, "22385pb082", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb082.t1.png"),
      new Shield(true, "22385pb083", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb083.t1.png"),
      new Shield(true, "22385pb084", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb084.t1.png"),
      new Shield(true, "22385pb085", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb085.t1.png"),
      new Shield(true, "22385pb086", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb086.t1.png"),
      new Shield(true, "22385pb087", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb087.t1.png"),
      new Shield(true, "22385pb088", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb088.t1.png"),

      new Shield(false, "22385pb089", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb089.t1.png"),
      new Shield(true, "22385pb090", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb090.t1.png"),
      new Shield(true, "22385pb091", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb091.t1.png"),
      new Shield(true, "22385pb092", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb092.t1.png"),
      new Shield(true, "22385pb093", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb093.t1.png"),
      new Shield(true, "22385pb094", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb094.t1.png"),
      new Shield(true, "22385pb095", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb095.t1.png"),
      new Shield(true, "22385pb096", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb096.t1.png"),
      new Shield(true, "22385pb097", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb097.t1.png"),
      new Shield(true, "22385pb098", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb098.t1.png"),
      new Shield(true, "22385pb099", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb099.t1.png"),
      new Shield(true, "22385pb100", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb100.t1.png"),
      new Shield(true, "22385pb101", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb101.t1.png"),
      new Shield(true, "22385pb102", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb102.t1.png"),
      new Shield(true, "22385pb103", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb103.t1.png"),

      new Shield(true, "22385pb104", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb104.t1.png"),
      new Shield(true, "22385pb105", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb105.t1.png"),
      new Shield(false, "22385pb106", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb106.t1.png"),
      new Shield(true, "22385pb107", "51", "https://img.bricklink.com/ItemImage/PT/51/22385pb107.t1.png"),
      new Shield(true, "22385pb108", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb108.t1.png"),
      new Shield(true, "22385pb109", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb109.t1.png"),
      new Shield(true, "22385pb110", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb110.t1.png"),
      new Shield(false, "22385pb111", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb111.t1.png"),
      new Shield(true, "22385pb112", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb112.t1.png"),
      new Shield(true, "22385pb113", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb113.t1.png"),
      new Shield(true, "22385pb114", "51", "https://img.bricklink.com/ItemImage/PT/51/22385pb114.t1.png"),
      new Shield(true, "22385pb115", "51", "https://img.bricklink.com/ItemImage/PT/51/22385pb115.t1.png"),
      new Shield(false, "22385pb116", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb116.t1.png"),
      new Shield(false, "22385pb117", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb117.t1.png"),
      new Shield(false, "22385pb118", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb118.t1.png"),

      new Shield(false, "22385pb119", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb119.t1.png"),
      new Shield(true, "22385pb120", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb120.t1.png"),
      new Shield(true, "22385pb121", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb121.t1.png"),
      new Shield(true, "22385pb122", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb122.t1.png"),
      new Shield(true, "22385pb123", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb123.t1.png"),
      new Shield(true, "22385pb124", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb124.t1.png"),
      new Shield(true, "22385pb125", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb125.t1.png"),
      new Shield(true, "22385pb126", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb126.t1.png"),
      new Shield(true, "22385pb127", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb127.t1.png"),
      new Shield(true, "22385pb128", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb128.t1.png"),
      new Shield(true, "22385pb129", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb129.t1.png"),
      new Shield(true, "22385pb130", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb130.t1.png"),
      new Shield(true, "22385pb131", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb131.t1.png"),
      new Shield(true, "22385pb132", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb132.t1.png"),
      new Shield(true, "22385pb133", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb133.t1.png"),
      
      new Shield(true, "22385pb134", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb134.t1.png"),
      new Shield(true, "22385pb135", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb135.t1.png"),
      new Shield(true, "22385pb136", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb136.t1.png"),
      new Shield(true, "22385pb137", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb137.t1.png"),
      new Shield(true, "22385pb138", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb138.t1.png"),
      new Shield(true, "22385pb139", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb139.t1.png"),
      new Shield(true, "22385pb140", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb140.t1.png"),
      new Shield(true, "22385pb141", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb141.t1.png"),
      new Shield(true, "22385pb142", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb142.t1.png"),
      new Shield(true, "22385pb143", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb143.t1.png"),
      new Shield(true, "22385pb144", "17", "https://img.bricklink.com/ItemImage/PT/17/22385pb144.t1.png"),
      new Shield(true, "22385pb145", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb145.t1.png"),
      new Shield(true, "22385pb146", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb146.t1.png"),
      new Shield(true, "22385pb147", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb147.t1.png"),
      new Shield(true, "22385pb148", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb148.t1.png"),
      
      new Shield(true, "n/a", "", ""),
      new Shield(true, "22385pb149", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb149.t1.png"),
      new Shield(true, "22385pb150", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb150.t1.png"),
      new Shield(false, "22385pb151", "19", "https://img.bricklink.com/ItemImage/PT/19/22385pb151.t1.png"),
      new Shield(true, "22385pb152", "108", "https://img.bricklink.com/ItemImage/PT/108/22385pb152.t1.png"),
      new Shield(true, "22385pb153", "12", "https://img.bricklink.com/ItemImage/PT/12/22385pb153.t1.png"),
      new Shield(false, "22385pb154", "14", "https://img.bricklink.com/ItemImage/PT/14/22385pb154.t1.png"),
      new Shield(false, "22385pb155", "65", "https://img.bricklink.com/ItemImage/PT/65/22385pb155.t1.png"),
      new Shield(true, "22385pb156", "7", "https://img.bricklink.com/ItemImage/PT/7/22385pb156.t1.png"),
      new Shield(false, "22385pb157", "65", "https://img.bricklink.com/ItemImage/PT/65/22385pb157.t1.png"),
      new Shield(true, "22385pb158", "65", "https://img.bricklink.com/ItemImage/PT/65/22385pb158.t1.png"),
      new Shield(false, "22385pb159", "65", "https://img.bricklink.com/ItemImage/PT/65/22385pb159.t1.png"),
      new Shield(true, "22385pb160", "65", "https://img.bricklink.com/ItemImage/PT/65/22385pb160.t1.png"),
      new Shield(false, "22385pb161", "65", "https://img.bricklink.com/ItemImage/PT/65/22385pb161.t1.png"),
      new Shield(true, "n/a", "", "")
    ];
    
  }

  public getShieldsOnBaseplate(columns : number) : Shield[][] {

    var row : number = 0;
    var counter = 0;
    var shieldsOnBaseplate: Shield[][] = [];
    shieldsOnBaseplate[row] = [];

    for (var shield of this.shields) {

      if(counter >= (columns-1)){
        counter = 0;
        shieldsOnBaseplate[++row] = [];
      }

      counter++;
      shieldsOnBaseplate[row].push(shield);
    }
   
    return shieldsOnBaseplate;
  }
}
