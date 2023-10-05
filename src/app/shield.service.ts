import { Injectable } from '@angular/core';

export class Shield {
  public year : number = 0;
  constructor(public owned : boolean, public id: string, public color : string, public imageUrl: string) {}
}
export class Bucket {
  constructor(public year : number, public shields : Shield[]){}
}

export class Grid {
  constructor(public year : number, public shield? : Shield){}
}

@Injectable({
  providedIn: 'root'
})
export class ShieldService {

  private buckets : Bucket[];

  constructor() {
    this.buckets = [
      new Bucket(1978, [
        new Shield(true, "3846pb014",    "9", "https://img.bricklink.com/ItemImage/PT/9/3846pb014.t1.png"),
        new Shield(true, "3846pb011",    "9", "https://img.bricklink.com/ItemImage/PT/9/3846pb011.t1.png"),
        new Shield(false, "3846pb011eu",  "9", "https://img.bricklink.com/ItemImage/PT/9/3846pb011eu.t1.png"),
        new Shield(true, "3846pb012",    "9", "https://img.bricklink.com/ItemImage/PT/9/3846pb012.t1.png"),
        new Shield(true, "3846pb013",    "9", "https://img.bricklink.com/ItemImage/PT/9/3846pb013.t1.png"),
       ]
      ),
      new Bucket(1979, [
        new Shield(true, "3846p47",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846p47.t1.png"),
        new Shield(false, "3846px2",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846px2.t1.png"),
        new Shield(true, "3846px21",     "9", "https://img.bricklink.com/ItemImage/PT/9/3846px21.t1.png"),
        new Shield(true, "3846px3",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846px3.t1.png"),
        new Shield(false, "3876",        "12", "https://img.bricklink.com/ItemImage/PT/12/3876.t1.png")]
      ),
      new Bucket(1980, [
        new Shield(false, "3846pb001",    "9", "https://img.bricklink.com/ItemImage/PT/9/3846pb001.t1.png")]
      ),
      new Bucket(1983, [
        new Shield(true, "3846",         "9", "https://img.bricklink.com/ItemImage/PT/9/3846.t1.png")]
      ),
      new Bucket(1984, [
        new Shield(true, "3846p46",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846p46.t1.png"),
        new Shield(true, "3846p4g",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846p4g.t1.png"),
        new Shield(true, "3846p4h",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846p4h.t1.png"),
        new Shield(true, "3846px9",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846px9.t1.png"),
        new Shield(true, "3876.t1",      "17", "https://img.bricklink.com/ItemImage/PT/17/3876.t1.png"),
        new Shield(true, "3876",        "10", "https://img.bricklink.com/ItemImage/EXTT/18322.t1.png")]
      ),
      new Bucket(1988, [
        new Shield(true, "3846p48",      "8", "https://img.bricklink.com/ItemImage/PT/8/3846p48.t1.png"),
        new Shield(true, "3846px10",     "9", "https://img.bricklink.com/ItemImage/PT/9/3846px10.t1.png")]
      ),
      new Bucket(1992, [
        new Shield(true, "2586p4c",      "9", "https://img.bricklink.com/ItemImage/PT/9/2586p4c.t1.png"),
        new Shield(true, "3846p44",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846p44.t1.png")]
      ),
      new Bucket(1993, [
        new Shield(true, "2586p4b",      "9", "https://img.bricklink.com/ItemImage/PT/9/2586p4b.t1.png")]
      ),
      new Bucket(1994, [
        new Shield(true, "2586px10",     "1", "https://img.bricklink.com/ItemImage/PT/1/2586px10.t1.png")]
      ),
      new Bucket(1995, [
        new Shield(true, "2586p4d",      "1", "https://img.bricklink.com/ItemImage/PT/1/2586p4d.t1.png"),
        new Shield(true, "3846p4d",      "1", "https://img.bricklink.com/ItemImage/PT/1/3846p4d.t1.png")]
      ),
      new Bucket(1997, [
        new Shield(true, "2586p4f",      "9", "https://img.bricklink.com/ItemImage/PT/9/2586p4f.t1.png"),
        new Shield(true, "3846px7",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846px7.t1.png"),
        new Shield(true, "2586pw1",      "2", "https://img.bricklink.com/ItemImage/PT/2/2586pw1.t1.png"),
        new Shield(true, "2586px3",      "2", "https://img.bricklink.com/ItemImage/EXTT/5635.t1.png")]
      ),
      new Bucket(2000, [
        new Shield(true, "2586p4g",      "9", "https://img.bricklink.com/ItemImage/PT/9/2586p4g.t1.png"),
        new Shield(false, "2586px5",      "9", "https://img.bricklink.com/ItemImage/PT/9/2586px5.t1.png"),
        new Shield(true, "2586ps1",      "24", "https://img.bricklink.com/ItemImage/PT/24/2586ps1.t1.png"),
        
        new Shield(true, "3846px5",      "9", "https://img.bricklink.com/ItemImage/PT/9/3846px5.t1.png")]
      ),
      new Bucket(2001, [
        new Shield(true, "2586ph1",      "9", "https://img.bricklink.com/ItemImage/PT/9/2586ph1.t1.png")]
      ),
      new Bucket(2002, [
        new Shield(true, "2586ph2",     "11", "https://img.bricklink.com/ItemImage/PT/11/2586ph2.t1.png"),
        new Shield(true, "2586px13",     "9", "https://img.bricklink.com/ItemImage/PT/9/2586px13.t1.png"),
        new Shield(true, "3846",        "55", "https://img.bricklink.com/ItemImage/PT/55/3846.t1.png")]
      ),
      new Bucket(2003, [
        //new Shield(true, "2586",        "86", "https://img.bricklink.com/ItemImage/PT/86/2586.t1.png"),
        new Shield(true, "2586px12 ",    "11", "https://img.bricklink.com/ItemImage/PT/11/2586px12.t1.png"),
        new Shield(true, "43898px1",     "1", "https://img.bricklink.com/ItemImage/PT/1/43898px1.t1.png"),
        new Shield(true, "2586",        "10", "https://img.bricklink.com/ItemImage/PT/10/2586.t1.png")]
      ),
      new Bucket(2004, [
        new Shield(true, "48494",       "99", "https://img.bricklink.com/ItemImage/PT/99/48494.t1.png"),
        new Shield(true, "48494pb01",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb01.t1.png"),
        new Shield(true, "48494pb02",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb02.t1.png"),
        new Shield(true, "48494pb03",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb03.t1.png"),
        new Shield(true, "48494pb04",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb04.t1.png"),
        new Shield(true, "48494pb05",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb05.t1.png")]
      ),
      new Bucket(2005, [
        new Shield(true, "48494pb06",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb06.t1.png"),
        new Shield(true, "2586px15",    "86", "https://img.bricklink.com/ItemImage/PT/86/2586px15.t1.png"),
        
        new Shield(true, "2586px6",     "86", "https://img.bricklink.com/ItemImage/PT/86/2586px6.t1.png"),
        new Shield(true, "2586px16",    "59", "https://img.bricklink.com/ItemImage/PT/59/2586px16.t1.png"),
        new Shield(true, "3846pb015",   "99", "https://img.bricklink.com/ItemImage/PT/99/3846pb015.t1.png"),
        
        new Shield(true, "3960pb012",    "2", "https://img.bricklink.com/ItemImage/PT/2/3960pb012.t1.png"),
        new Shield(true, "3960pb014",    "2", "https://img.bricklink.com/ItemImage/PT/2/3960pb014.t1.png"),
        new Shield(true, "n/a", "",""),
        new Shield(true, "3960pb016",    "2", "https://img.bricklink.com/ItemImage/PT/2/3960pb016.t1.png"),
        new Shield(true, "3960pb015",    "2", "https://img.bricklink.com/ItemImage/PT/2/3960pb015.t1.png"),
        new Shield(true, "n/a", "",""),
        
        new Shield(true, "3846",         "3", "https://img.bricklink.com/ItemImage/PT/3/3846.t1.png"),
        new Shield(false, "2958pb011",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb011.t1.png"),
        new Shield(true, "2958pb008",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb008.t1.png"),
        new Shield(true, "2958pb007",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb007.t1.png"),
        new Shield(false, "2958pb003",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb003.t1.png"),
        new Shield(true, "2958pb009",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb009.t1.png"),
        new Shield(false, "2958pb010",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb010.t1.png"),
        new Shield(true, "2958pb004",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb004.t1.png"),
      
        new Shield(true, "3846pb016",   "99", "https://img.bricklink.com/ItemImage/PT/99/3846pb016.t1.png"),
        new Shield(true, "3846pb017",   "99", "https://img.bricklink.com/ItemImage/PT/99/3846pb017.t1.png"),
        new Shield(true, "3846pb018",   "99", "https://img.bricklink.com/ItemImage/PT/99/3846pb018.t1.png"),
        new Shield(true, "3846pb019",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb019.t1.png"),
        new Shield(true, "3846pb025",    "3", "https://img.bricklink.com/ItemImage/PT/3/3846pb025.t1.png"),]
      ),
      new Bucket(2006, [
        
        new Shield(true, "2586pb001",   "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb001.t1.png"),
        new Shield(true, "2586px18",    "86", "https://img.bricklink.com/ItemImage/PT/86/2586px18.t1.png"),
        new Shield(true, "2586px7",     "86", "https://img.bricklink.com/ItemImage/PT/86/2586px7.t1.png"),
        new Shield(true, "3846pb020",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb020.t1.png"),
        new Shield(true, "3846pb021",  "115", "https://img.bricklink.com/ItemImage/PT/115/3846pb021.t1.png"),
        new Shield(true, "3846pb022",  "115", "https://img.bricklink.com/ItemImage/PT/115/3846pb022.t1.png"),
        new Shield(true, "3846pb023",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb023.t1.png"),
        new Shield(true, "3846pb026",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb026.t1.png"),
        new Shield(true, "48494pb07",   "99", "https://img.bricklink.com/ItemImage/PT/99/48494pb07.t1.png"),
        new Shield(true, "2958pb028",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb028.t1.png"),
        new Shield(true, "2958pb029",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb029.t1.png"),
        new Shield(true, "2586",        "86", "https://img.bricklink.com/ItemImage/PT/86/2586.t1.png"),
        new Shield(true, "3846",        "86", "https://img.bricklink.com/ItemImage/PT/86/3846.t1.png")]
      ),
      new Bucket(2007, [
        new Shield(true, "2586pb002",   "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb002.t1.png"),
        new Shield(true, "2586px14",    "86", "https://img.bricklink.com/ItemImage/PT/86/2586px14.t1.png"),
        new Shield(true, "2586px17",    "86", "https://img.bricklink.com/ItemImage/PT/86/2586px17.t1.png"),
        new Shield(true, "3846pb024",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb024.t1.png"),
        new Shield(true, "59231pb01",   "86", "https://img.bricklink.com/ItemImage/PT/85/59231pb01.t1.png"),
        new Shield(true, "59231pb02",   "86", "https://img.bricklink.com/ItemImage/PT/85/59231pb02.t1.png"),
        new Shield(true, "61856pb01",   "86", "https://img.bricklink.com/ItemImage/PT/85/61856pb01.t1.png")]
      ),
      new Bucket(2010, [
        new Shield(true, "2586px19",    "86", "https://img.bricklink.com/ItemImage/PT/86/2586px19.t1.png"),
        new Shield(true, "3846pb027",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb027.t1.png"),
        new Shield(true, "3846pb028",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb028.t1.png"),
        new Shield(true, "3846pb029",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb029.t1.png"),
        new Shield(true, "3846pb032",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb032.t1.png"),
        new Shield(true, "91884",      "150", "https://img.bricklink.com/ItemImage/PT/150/91884.t1.png")]
      ),
      new Bucket(2011, [
        new Shield(true, "2586p4k ",    "86", "https://img.bricklink.com/ItemImage/PT/86/2586p4k.t1.png"),
        new Shield(true, " 2586pb003 ", "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb003.t1.png"),
        new Shield(false, " 3846pb030 ", "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb030.t1.png"),
        new Shield(true, " 59231pb03 ", "48", "https://img.bricklink.com/ItemImage/PT/48/59231pb03.t1.png"),
        new Shield(true, "59231pb04 ",  "77", "https://img.bricklink.com/ItemImage/PT/77/59231pb04.t1.png"),
        new Shield(true, "91884pb001 ","120", "https://img.bricklink.com/ItemImage/PT/120/91884pb001.t1.png"),
        new Shield(true, " 92747pb13 ", "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb13.t1.png"),
        new Shield(true, " 93251 ",     "77", "https://img.bricklink.com/ItemImage/PT/77/93251.t1.png"),
        new Shield(true, "93251",      "115", "https://img.bricklink.com/ItemImage/PT/115/93251.t1.png"),
        new Shield(true, "91884",       "77", "https://img.bricklink.com/ItemImage/PT/77/91884.t1.png")]
      ),
      new Bucket(2012, [
        new Shield(true, "2586pb004",   "11", "https://img.bricklink.com/ItemImage/PT/11/2586pb004.t1.png"),
        new Shield(true, "3846pb031",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb031.t1.png"),
        new Shield(true, "3846pb033",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb033.t1.png"),
        new Shield(true, "10049",       "77", "https://img.bricklink.com/ItemImage/PT/77/10049.t1.png"),
        new Shield(true, "10049pb01",   "77", "https://img.bricklink.com/ItemImage/PT/77/10049pb01.t1.png"),
        new Shield(true, "75902pb01",   "59", "https://img.bricklink.com/ItemImage/PT/59/75902pb01.t1.png"),
        new Shield(true, "75902pb02",   "59", "https://img.bricklink.com/ItemImage/PT/59/75902pb02.t1.png"),
        new Shield(true, "91884pb002", "120", "https://img.bricklink.com/ItemImage/PT/120/91884pb002.t1.png"),
        new Shield(true, "91884pb003", "115", "https://img.bricklink.com/ItemImage/PT/115/91884pb003.t1.png"),
        new Shield(true, "91884pb004",  "95", "https://img.bricklink.com/ItemImage/PT/95/91884pb004.t1.png"),
        new Shield(true, "98367pb01",   "59", "https://img.bricklink.com/ItemImage/PT/59/98367pb01.t1.png"),
        new Shield(true, "91884",      "120", "https://img.bricklink.com/ItemImage/PT/120/91884.t1.png")]
      ),
      new Bucket(2013, [
        new Shield(true, "2586pb005",   "88", "https://img.bricklink.com/ItemImage/PT/88/2586pb005.t1.png"),
        new Shield(true, "2586pb006",   "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb006.t1.png"),
        new Shield(true, "3846pb036",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb036.t1.png"),
        new Shield(true, "2586pb007",   "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb007.t1.png"),
        new Shield(true, "3846pb035",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb035.t1.png"),
        new Shield(true, "2586pb008",   "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb008.t1.png"),
        new Shield(true, "3846pb034",   "95", "https://img.bricklink.com/ItemImage/PT/95/3846pb034.t1.png"),
        new Shield(true, "3846pb037",   "85", "https://img.bricklink.com/ItemImage/PT/85/3846pb037.t1.png"),
        new Shield(true, "75902pb03",  "120", "https://img.bricklink.com/ItemImage/PT/120/75902pb03.t1.png"),
        new Shield(true, "75902pb04",   "59", "https://img.bricklink.com/ItemImage/PT/59/75902pb04.t1.png"),
        new Shield(true, "92747pb10",   "15", "https://img.bricklink.com/ItemImage/PT/15/92747pb10.t1.png")]
      ),
      new Bucket(2014, [
        new Shield(true, "75902pb05",  "120", "https://img.bricklink.com/ItemImage/PT/120/75902pb05.t1.png"),
        new Shield(true, "91884pb005",  "77", "https://img.bricklink.com/ItemImage/PT/77/91884pb005.t1.png"),
        new Shield(true, "92747",       "51", "https://img.bricklink.com/ItemImage/PT/51/92747.t1.png"),
        new Shield(true, "92747pb02",   "15", "https://img.bricklink.com/ItemImage/PT/15/92747pb02.t1.png"),
        new Shield(true, "92747pb12",   "15", "https://img.bricklink.com/ItemImage/PT/15/92747pb12.t1.png"),
        new Shield(true, "n/a", "",""),
        new Shield(true, "3846",         "95", "https://img.bricklink.com/ItemImage/PT/95/91884.t1.png"),
        new Shield(true, "3846",          "1", "https://img.bricklink.com/ItemImage/PT/1/3846.t1.png"),
        new Shield(true, "98834pb02",    "11", "https://img.bricklink.com/ItemImage/PT/11/98834pb02.t1.png")]
      ),
      new Bucket(2015, [
        new Shield(true, "18836pb01",   "115", "https://img.bricklink.com/ItemImage/PT/115/18836pb01.t1.png"),
        new Shield(true, "75902pb06",   "11", "https://img.bricklink.com/ItemImage/PT/11/75902pb06.t1.png"),
        new Shield(true, "75902pb07",   "11", "https://img.bricklink.com/ItemImage/PT/11/75902pb07.t1.png"),
        new Shield(false, "92747pb03",   "15", "https://img.bricklink.com/ItemImage/PT/15/92747pb03.t1.png"),
        new Shield(false, "92747pb04",   "15", "https://img.bricklink.com/ItemImage/PT/15/92747pb04.t1.png"),
        new Shield(true, "92747pb05",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb05.t1.png"),
        new Shield(true, "92747pb06",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb06.t1.png"),
        new Shield(true, "92747pb07",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb07.t1.png"),
        new Shield(true, "92747pb08",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb08.t1.png"),
        new Shield(true, "92747pb09",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb09.t1.png"),
        new Shield(true, "92747pb14",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb14.t1.png"),
        new Shield(true, "92747",       "15", "https://img.bricklink.com/ItemImage/PT/15/92747.t1.png"),
        new Shield(true, "2958pb059",   "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb059.t1.png"),
        new Shield(true, "75902",       "11", "https://img.bricklink.com/ItemImage/PT/11/75902.t1.png"),
        new Shield(true, "3846pb038",   "1", "https://img.bricklink.com/ItemImage/PT/1/3846pb038.t1.png")]
      ),
      new Bucket(2016, [
        new Shield(false, "3846pb041",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb041.t1.png"),
        new Shield(true, "3846pb051",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb051.t1.png"),
        new Shield(false, "3846pb052",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb052.t1.png"),
        new Shield(false, "3846pb053",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb053.t1.png"),
        new Shield(true, "18836pb02",   "77", "https://img.bricklink.com/ItemImage/PT/77/18836pb02.t1.png"),
        new Shield(true, "22408",     "115", "https://img.bricklink.com/ItemImage/PT/115/22408.t1.png"),
        new Shield(true, "22408",       "95", "https://img.bricklink.com/ItemImage/PT/95/22408.t1.png"),
        new Shield(true, "22409",       "11", "https://img.bricklink.com/ItemImage/PT/11/22409.t1.png"),
        new Shield(true, "75902pb08",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb08.t1.png"),
        new Shield(true, "75902pb25",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb25.t1.png"),
        new Shield(true, "92747pb11",   "15", "https://img.bricklink.com/ItemImage/PT/15/92747pb11.t1.png"),
        new Shield(true, "2958pb065",  "11", "https://img.bricklink.com/ItemImage/PT/11/2958pb065.t1.png"),
        new Shield(true, "3846pb039",    "1", "https://img.bricklink.com/ItemImage/PT/1/3846pb039.t1.png"),
        new Shield(true, "3846pb040",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb040.t1.png")]
      ),
      new Bucket(2017, [
        new Shield(true, "3846pb043",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb043.t1.png"),
        new Shield(true, "3846pb045",   "11", "https://img.bricklink.com/ItemImage/PT/11/3846pb045.t1.png"),
        new Shield(true, "3846pb048",   "11", "https://img.bricklink.com/ItemImage/PT/11/3846pb048.t1.png"),
        new Shield(true, "75902pb09",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb09.t1.png"),
        new Shield(true, "75902pb10",    "5", "https://img.bricklink.com/ItemImage/PT/5/75902pb10.t1.png"),
        new Shield(true, "75902pb11",   "11", "https://img.bricklink.com/ItemImage/PT/11/75902pb11.t1.png"),
        new Shield(false, "98367pb02",   "11", "https://img.bricklink.com/ItemImage/PT/11/98367pb02.t1.png"),
        new Shield(true, "75902",       "85", "https://img.bricklink.com/ItemImage/PT/85/75902.t1.png"),
        new Shield(true, "30166pb01",    "1", "https://img.bricklink.com/ItemImage/PT/1/30166pb01.t1.png"),
        new Shield(true, " 30166pb02",   "1", "https://img.bricklink.com/ItemImage/PT/1/30166.t1.png"),
        new Shield(true, "3846",        "11", "https://img.bricklink.com/ItemImage/PT/11/3846.t1.png"),
        new Shield(false, "22409",      "115", "https://img.bricklink.com/ItemImage/PT/115/22409.t1.png"),
        new Shield(true, "3846pb042",   "11", "https://img.bricklink.com/ItemImage/PT/11/3846pb042.t1.png")]
      ),
      new Bucket(2018, [
        new Shield(false, "3846pb046",   "11", "https://img.bricklink.com/ItemImage/PT/11/3846pb046.t1.png"),
        new Shield(false, "3846pb056",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb056.t1.png"),
        new Shield(true, "35035",       "77", "https://img.bricklink.com/ItemImage/PT/77/35035.t1.png"),
        new Shield(true, "75902pb12",  "115", "https://img.bricklink.com/ItemImage/PT/115/75902pb12.t1.png"),
        new Shield(true, "75902",        "5", "https://img.bricklink.com/ItemImage/PT/5/75902.t1.png"),
        new Shield(true, "3846",        "34", "https://img.bricklink.com/ItemImage/PT/34/3846.t1.png"),
        new Shield(true, "3846pb044",    "1", "https://img.bricklink.com/ItemImage/PT/1/3846pb044.t1.png")]
      ),
      new Bucket(2019, [
        new Shield(true, "3846pb050",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb050.t1.png"),
        new Shield(true, "3846pb049",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb049.t1.png"),
        new Shield(true, "18836pb03",   "86", "https://img.bricklink.com/ItemImage/PT/86/18836pb03.t1.png"),
        new Shield(true, "18836pb04",   "77", "https://img.bricklink.com/ItemImage/PT/77/18836pb04.t1.png"),
        new Shield(true, "30166pb02",   "59", "https://img.bricklink.com/ItemImage/PT/59/30166.t1.png"),
        new Shield(true, "75902pb13",     "", "https://img.bricklink.com/ItemImage/EXTT/25067.t1.png?0"),
        new Shield(true, "75902pb14",  "115", "https://img.bricklink.com/ItemImage/PT/115/75902pb14.t1.png"),
        new Shield(true, "bb0883pb01",   "1", "https://img.bricklink.com/ItemImage/PT/1/bb0883pb01.t1.png"),
        new Shield(true, "91884",       "88", "https://img.bricklink.com/ItemImage/PT/88/91884.t1.png"),
        new Shield(true, "91884",      "249", "https://img.bricklink.com/ItemImage/PT/249/91884.t1.png"),
        new Shield(false, "3846pb054",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb054.t1.png"),]
      ),
      new Bucket(2020, [
        new Shield(true, "3846pb047",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb047.t1.png"),
        new Shield(false, "75902pb15",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb15.t1.png"),
        new Shield(true, "75902pb16",   "95", "https://img.bricklink.com/ItemImage/PT/95/75902pb16.t1.png"),
        new Shield(true, "75902pb17",  "115", "https://img.bricklink.com/ItemImage/PT/115/75902pb17.t1.png"),
        new Shield(true, " 30166pb02",  "86", "https://img.bricklink.com/ItemImage/PT/86/30166.t1.png"),
       
        new Shield(false, "14769pb408",   "85", "https://img.bricklink.com/ItemImage/PT/85/14769pb408.t1.png"),
        new Shield(false, "14769pb409",   "85", "https://img.bricklink.com/ItemImage/PT/85/14769pb409.t1.png")
      ]
      ),
      new Bucket(2021, [
        new Shield(true, "2586pb009",   "69", "https://img.bricklink.com/ItemImage/PT/69/2586pb009.t1.png"),
        new Shield(true, "3846pb055",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb055.t1.png"),
        new Shield(false, "3846pb057",   "88", "https://img.bricklink.com/ItemImage/PT/88/3846pb057.t1.png"),
        new Shield(true, "3846pb067",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb067.t1.png"),
        new Shield(true, "75902pb18",  "115", "https://img.bricklink.com/ItemImage/PT/115/75902pb18.t1.png"),
        new Shield(true, "75902pb19",   "11", "https://img.bricklink.com/ItemImage/PT/11/75902pb19.t1.png"),
        new Shield(true, "75902pb20",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb20.t1.png"),
        new Shield(true, "75902pb21",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb21.t1.png"),
        new Shield(true, "75902pb22",   "63", "https://img.bricklink.com/ItemImage/PT/63/75902pb22.t1.png"),
        new Shield(true, "75902pb23",   "85", "https://img.bricklink.com/ItemImage/PT/85/75902pb23.t1.png"),
        new Shield(true, "2586",        "69", "https://img.bricklink.com/ItemImage/PT/69/2586.t1.png"),
        new Shield(true, "3846",        "88", "https://img.bricklink.com/ItemImage/PT/88/3846.t1.png"),
        new Shield(true, "3846",       "159", "https://img.bricklink.com/ItemImage/PT/159/3846.t1.png"),
        new Shield(true, " 30166pb02",  "85", "https://img.bricklink.com/ItemImage/PT/85/30166.t1.png"),
        new Shield(true, "30166pb02",    "1", "https://img.bricklink.com/ItemImage/PT/1/30166pb02.t1.png"),
        new Shield(true, " 30166pb02",  "88", "https://img.bricklink.com/ItemImage/PT/88/30166.t1.png")]
      ),
      new Bucket(2022, [
        new Shield(true, "3846pb058",   "88", "https://img.bricklink.com/ItemImage/PT/88/3846pb058.t1.png"),
        new Shield(true, "3846pb059",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb059.t1.png"),
        new Shield(true, "3846pb060",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb060.t1.png"),
        new Shield(true, "3846pb061",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb061.t1.png"),
        new Shield(true, "3846pb062",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb062.t1.png"),
        new Shield(true, "3846pb063",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb063.t1.png"),
        new Shield(true, "3846pb064",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb064.t1.png"),
        new Shield(true, "3846pb065",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb065.t1.png"),
        new Shield(true, "3846pb066",   "86", "https://img.bricklink.com/ItemImage/PT/86/3846pb066.t1.png"),
        new Shield(true, "75902pb24",   "86", "https://img.bricklink.com/ItemImage/PT/86/75902pb24.t1.png"),
        new Shield(true, "75902pb26",   "11", "https://img.bricklink.com/ItemImage/PT/11/75902pb26.t1.png"),
        new Shield(true, "2586",         "1", "https://img.bricklink.com/ItemImage/PT/1/2586.t1.png"),
        new Shield(true, "92747pb15",   "51", "https://img.bricklink.com/ItemImage/PT/51/92747pb15.t1.png"),
        new Shield(true, "14769pb521",   "88", "https://img.bricklink.com/ItemImage/PT/88/14769pb521.t1.png"),
        new Shield(true, "14769pb522",   "88", "https://img.bricklink.com/ItemImage/PT/88/14769pb522.t1.png"),
        new Shield(true, "14769pb523",   "88", "https://img.bricklink.com/ItemImage/PT/88/14769pb523.t1.png"),
        new Shield(true, "14769pb524",   "88", "https://img.bricklink.com/ItemImage/PT/88/14769pb524.t1.png")]
      ),
      new Bucket(2023, [
        new Shield(true, "2586pb010",   "86", "https://img.bricklink.com/ItemImage/PT/86/2586pb010.t1.png"),
        new Shield(true, "75902pb27",   "95", "https://img.bricklink.com/ItemImage/PT/95/75902pb27.t1.png"),
        new Shield(true, "92747pb16",  "115", "https://img.bricklink.com/ItemImage/PT/115/92747pb16.t1.png"),
        new Shield(false, "98367",       "11", "https://img.bricklink.com/ItemImage/PT/11/98367.t1.png"),
        new Shield(true, "2586",         "3", "https://img.bricklink.com/ItemImage/PT/3/2586.t1.png"),
        new Shield(false, "75902",        "5", "https://img.bricklink.com/ItemImage/PT/5/75902.t1.png"),
        new Shield(false, "75902",        "5", "https://img.bricklink.com/ItemImage/PT/5/75902.t1.png"),
      ]
      ),
    ];
    
  }

  public getShieldsByYear() : Bucket[] {
    return this.buckets;
  }

  public getShieldsOnBaseplate(columns : number) : Grid[][] {

    var row : number = 0;
    var counter = 0;
    var shieldsOnBaseplate: Grid[][] = [];
    shieldsOnBaseplate[row] = [];

    for (var bucket of this.buckets) {

      if(counter >= (columns-1)){
        counter = 0;
        shieldsOnBaseplate[++row] = [];
      }

      counter++;
      shieldsOnBaseplate[row].push(new Grid(bucket.year));

      for (var shield of bucket.shields) {

        if(counter >= columns){
          counter = 0;
          shieldsOnBaseplate[++row] = [];
        }
        
        counter++;
        shieldsOnBaseplate[row].push(new Grid(bucket.year, shield));
      }
    }

   
    return shieldsOnBaseplate;
  }
}
