import { Injectable } from '@angular/core';

export class Shield {
  constructor(public id: string, public imageUrl: string) {}
}
export class Bucket {
  constructor(public year : number, public shields : Shield[]){}
}

@Injectable()
export class ShieldService {

  private buckets : Bucket[];

  constructor() {
    this.buckets = [
      new Bucket(1978, [
        new Shield("3846",        "https://img.bricklink.com/ItemImage/PT/86/3846.t1.png"),
        new Shield("3846pb011",   "https://img.bricklink.com/ItemImage/PT/9/3846pb011.t1.png"),
        new Shield("3846pb011eu", "https://img.bricklink.com/ItemImage/PT/9/3846pb011eu.t1.png"),
        new Shield("3846pb012",   "https://img.bricklink.com/ItemImage/PT/9/3846pb012.t1.png"),
        new Shield("3846pb013",   "https://img.bricklink.com/ItemImage/PT/9/3846pb013.t1.png"),
        new Shield("3846pb014",   "https://img.bricklink.com/ItemImage/PT/9/3846pb014.t1.png")]
      ),
      new Bucket(1979, [
        new Shield("3846p47",     "https://img.bricklink.com/ItemImage/PT/9/3846p47.t1.png"),
        new Shield("3846px2",     "https://img.bricklink.com/ItemImage/PT/9/3846px2.t1.png"),
        new Shield("3846px21",    "https://img.bricklink.com/ItemImage/PT/9/3846px21.t1.png"),
        new Shield("3846px3",     "https://img.bricklink.com/ItemImage/PT/9/3846px3.t1.png"),
        new Shield("3876",        "https://img.bricklink.com/ItemImage/EXTT/18322.t1.png"),
      
        new Shield("3876",        "https://img.bricklink.com/ItemImage/PT/12/3876.t1.png")]
      ),
      new Bucket(1980, [
        new Shield("3846pb001",   "https://img.bricklink.com/ItemImage/PT/9/3846pb001.t1.png")]
      ),
      new Bucket(1984, [
        new Shield("3846p46",     "https://img.bricklink.com/ItemImage/PT/9/3846p46.t1.png"),
        new Shield("3846p4g",     "https://img.bricklink.com/ItemImage/PT/9/3846p4g.t1.png"),
        new Shield("3846p4h",     "https://img.bricklink.com/ItemImage/PT/9/3846p4h.t1.png"),
        new Shield("3846px9",     "https://img.bricklink.com/ItemImage/PT/9/3846px9.t1.png"),
      
        new Shield("3876.t1",     "https://img.bricklink.com/ItemImage/PT/17/3876.t1.png")]
      ),
      new Bucket(1988, [
        new Shield("3846p48",     "https://img.bricklink.com/ItemImage/PT/8/3846p48.t1.png"),
        new Shield("3846px10",    "https://img.bricklink.com/ItemImage/PT/9/3846px10.t1.png")]
      ),
      new Bucket(1992, [
        new Shield("2586p4c",     "https://img.bricklink.com/ItemImage/PT/9/2586p4c.t1.png"),
        new Shield("3846p44",     "https://img.bricklink.com/ItemImage/PT/9/3846p44.t1.png")]
      ),
      new Bucket(1993, [
        new Shield("2586p4b",     "https://img.bricklink.com/ItemImage/PT/9/2586p4b.t1.png")]
      ),
      new Bucket(1994, [
        new Shield("2586px10",    "https://img.bricklink.com/ItemImage/PT/1/2586px10.t1.png"),
        new Shield("3846p44b",    "https://img.bricklink.com/ItemImage/PT/9/3846p44b.t1.png")]
      ),
      new Bucket(1995, [
        new Shield("2586p4d",     "https://img.bricklink.com/ItemImage/PT/1/2586p4d.t1.png"),
        new Shield("3846p4d",     "https://img.bricklink.com/ItemImage/PT/1/3846p4d.t1.png")]
      ),
      new Bucket(1997, [
        new Shield("2586p4f",     "https://img.bricklink.com/ItemImage/PT/9/2586p4f.t1.png"),
        new Shield("2586pw1",     "https://img.bricklink.com/ItemImage/PT/2/2586pw1.t1.png"),
        new Shield("2586px3",     "https://img.bricklink.com/ItemImage/EXTT/5635.t1.png"),
        new Shield("3846px7",     "https://img.bricklink.com/ItemImage/PT/9/3846px7.t1.png")]
      ),
      new Bucket(2000, [
        new Shield("2586p4g",     "https://img.bricklink.com/ItemImage/PT/9/2586p4g.t1.png"),
        new Shield("2586ps1",     "https://img.bricklink.com/ItemImage/EXTT/5638.t1.png"),
        new Shield("2586px5",     "https://img.bricklink.com/ItemImage/PT/9/2586px5.t1.png"),
        new Shield("3846px5",     "https://img.bricklink.com/ItemImage/PT/9/3846px5.t1.png")]
      ),
      new Bucket(2001, [
        new Shield("2586ph1",     "https://img.bricklink.com/ItemImage/PT/9/2586ph1.t1.png")]
      ),
      new Bucket(2002, [
        new Shield("2586ph2",     "https://img.bricklink.com/ItemImage/PT/11/2586ph2.t1.png"),
        new Shield("2586px13",    "https://img.bricklink.com/ItemImage/PT/9/2586px13.t1.png")]
      ),
      new Bucket(2003, [
        new Shield("2586",        "https://img.bricklink.com/ItemImage/PT/86/2586.t1.png"),
        new Shield("2586px12 ",   "https://img.bricklink.com/ItemImage/PT/11/2586px12.t1.png"),
      
        new Shield("43898px1",    "https://img.bricklink.com/ItemImage/PT/1/43898px1.t1.png"),
        new Shield("2586",        "https://img.bricklink.com/ItemImage/PT/10/2586.t1.png")]
      ),
      new Bucket(2004, [
        new Shield("48494",       "https://img.bricklink.com/ItemImage/PT/99/48494.t1.png"),
        new Shield("48494pb01",   "https://img.bricklink.com/ItemImage/PT/99/48494pb01.t1.png"),
        new Shield("48494pb02",   "https://img.bricklink.com/ItemImage/PT/99/48494pb02.t1.png"),
        new Shield("48494pb03",   "https://img.bricklink.com/ItemImage/PT/99/48494pb03.t1.png"),
        new Shield("48494pb04",   "https://img.bricklink.com/ItemImage/PT/99/48494pb04.t1.png"),
        new Shield("48494pb05",   "https://img.bricklink.com/ItemImage/PT/99/48494pb05.t1.png")]
      ),
      new Bucket(2005, [
        new Shield("2586px15",    "https://img.bricklink.com/ItemImage/PT/86/2586px15.t1.png"),
        new Shield("2586px16",    "https://img.bricklink.com/ItemImage/PT/59/2586px16.t1.png"),
        new Shield("2586px6",     "https://img.bricklink.com/ItemImage/PT/86/2586px6.t1.png"),
        new Shield("3846pb015",   "https://img.bricklink.com/ItemImage/PT/99/3846pb015.t1.png"),
        new Shield("3846pb016",   "https://img.bricklink.com/ItemImage/PT/99/3846pb016.t1.png"),
        new Shield("3846pb017",   "https://img.bricklink.com/ItemImage/PT/99/3846pb017.t1.png"),
        new Shield("3846pb018",   "https://img.bricklink.com/ItemImage/PT/99/3846pb018.t1.png"),
        new Shield("3846pb019",   "https://img.bricklink.com/ItemImage/PT/86/3846pb019.t1.png"),
        new Shield("3846pb025",   "https://img.bricklink.com/ItemImage/PT/3/3846pb025.t1.png"),
        new Shield("48494pb06",   "https://img.bricklink.com/ItemImage/PT/99/48494pb06.t1.png"),

        new Shield("2958pb011",   "https://img.bricklink.com/ItemImage/PT/11/2958pb011.t1.png"),
        new Shield("2958pb008",   "https://img.bricklink.com/ItemImage/PT/11/2958pb008.t1.png"),
        new Shield("2958pb007",   "https://img.bricklink.com/ItemImage/PT/11/2958pb007.t1.png"),
        new Shield("2958pb003",   "https://img.bricklink.com/ItemImage/PT/11/2958pb003.t1.png"),
        new Shield("2958pb009",   "https://img.bricklink.com/ItemImage/PT/11/2958pb009.t1.png"),
        new Shield("2958pb010",   "https://img.bricklink.com/ItemImage/PT/11/2958pb010.t1.png"),
        new Shield("2958pb004",   "https://img.bricklink.com/ItemImage/PT/11/2958pb004.t1.png"),
      
        new Shield("3960pb012",   "https://img.bricklink.com/ItemImage/PT/2/3960pb012.t1.png"),
        new Shield("3960pb014",   "https://img.bricklink.com/ItemImage/PT/2/3960pb014.t1.png"),
        new Shield("3960pb016",   "https://img.bricklink.com/ItemImage/PT/2/3960pb016.t1.png"),
        new Shield("3960pb015",   "https://img.bricklink.com/ItemImage/PT/2/3960pb015.t1.png"),]
      ),
      new Bucket(2006, [
        new Shield("2586pb001",   "https://img.bricklink.com/ItemImage/PT/86/2586pb001.t1.png"),
        new Shield("2586px18",    "https://img.bricklink.com/ItemImage/PT/86/2586px18.t1.png"),
        new Shield("2586px7",     "https://img.bricklink.com/ItemImage/PT/86/2586px7.t1.png"),
        new Shield("3846pb020",   "https://img.bricklink.com/ItemImage/PT/86/3846pb020.t1.png"),
        new Shield("3846pb021",   "https://img.bricklink.com/ItemImage/PT/115/3846pb021.t1.png"),
        new Shield("3846pb022",   "https://img.bricklink.com/ItemImage/PT/115/3846pb022.t1.png"),
        new Shield("3846pb023",   "https://img.bricklink.com/ItemImage/PT/86/3846pb023.t1.png"),
        new Shield("3846pb026",   "https://img.bricklink.com/ItemImage/PT/86/3846pb026.t1.png"),
        new Shield("48494pb07",   "https://img.bricklink.com/ItemImage/PT/99/48494pb07.t1.png"),
      
        new Shield("2958pb028",   "https://img.bricklink.com/ItemImage/PT/11/2958pb028.t1.png"),
        new Shield("2958pb029",   "https://img.bricklink.com/ItemImage/PT/11/2958pb029.t1.png"),
        new Shield("2586",        "https://img.bricklink.com/ItemImage/PT/86/2586.t1.png")]
      ),
      new Bucket(2007, [
        new Shield("2586pb002",   "https://img.bricklink.com/ItemImage/PT/86/2586pb002.t1.png"),
        new Shield("2586px14",    "https://img.bricklink.com/ItemImage/PT/86/2586px14.t1.png"),
        new Shield("2586px17",    "https://img.bricklink.com/ItemImage/PT/86/2586px17.t1.png"),
        new Shield("3846pb024",   "https://img.bricklink.com/ItemImage/PT/86/3846pb024.t1.png"),
        new Shield("59231pb01",   "https://img.bricklink.com/ItemImage/PT/85/59231pb01.t1.png"),
        new Shield("59231pb02",   "https://img.bricklink.com/ItemImage/PT/85/59231pb02.t1.png"),
        new Shield("61856pb01",   "https://img.bricklink.com/ItemImage/PT/85/61856pb01.t1.png")]
      ),
      new Bucket(2010, [
        new Shield("2586px19",    "https://img.bricklink.com/ItemImage/PT/86/2586px19.t1.png"),
        new Shield("3846pb027",   "https://img.bricklink.com/ItemImage/PT/86/3846pb027.t1.png"),
        new Shield("3846pb028",   "https://img.bricklink.com/ItemImage/PT/86/3846pb028.t1.png"),
        new Shield("3846pb029",   "https://img.bricklink.com/ItemImage/PT/86/3846pb029.t1.png"),
        new Shield("3846pb032",   "https://img.bricklink.com/ItemImage/PT/86/3846pb032.t1.png"),
        new Shield("91884",       "https://img.bricklink.com/ItemImage/PT/150/91884.t1.png")]
      ),
      new Bucket(2011, [
        new Shield("2586p4k ",    "https://img.bricklink.com/ItemImage/PT/86/2586p4k.t1.png"),
        new Shield(" 2586pb003 ", "https://img.bricklink.com/ItemImage/PT/86/2586pb003.t1.png"),
        new Shield(" 3846pb030 ", "https://img.bricklink.com/ItemImage/PT/86/3846pb030.t1.png"),
        new Shield(" 59231pb03 ", "https://img.bricklink.com/ItemImage/PT/48/59231pb03.t1.png"),
        new Shield("59231pb04 ",  "https://img.bricklink.com/ItemImage/PT/77/59231pb04.t1.png"),
        new Shield("91884pb001 ", "https://img.bricklink.com/ItemImage/PT/120/91884pb001.t1.png"),
        new Shield(" 92747pb13 ", "https://img.bricklink.com/ItemImage/PT/51/92747pb13.t1.png"),
        new Shield(" 93251 ",     "https://img.bricklink.com/ItemImage/PT/77/93251.t1.png"),
      
        new Shield("93251",       "https://img.bricklink.com/ItemImage/PT/115/93251.t1.png"),
        new Shield("91884",       "https://img.bricklink.com/ItemImage/PT/77/91884.t1.png")]
      ),
      new Bucket(2012, [
        new Shield("2586pb004",   "https://img.bricklink.com/ItemImage/PT/11/2586pb004.t1.png"),
        new Shield("3846pb031",   "https://img.bricklink.com/ItemImage/PT/86/3846pb031.t1.png"),
        new Shield("3846pb033",   "https://img.bricklink.com/ItemImage/PT/86/3846pb033.t1.png"),
        new Shield("10049",       "https://img.bricklink.com/ItemImage/PT/77/10049.t1.png"),
        new Shield("10049pb01",   "https://img.bricklink.com/ItemImage/PT/77/10049pb01.t1.png"),
        new Shield("75902pb01",   "https://img.bricklink.com/ItemImage/PT/59/75902pb01.t1.png"),
        new Shield("75902pb02",   "https://img.bricklink.com/ItemImage/PT/59/75902pb02.t1.png"),
        new Shield("91884pb002",  "https://img.bricklink.com/ItemImage/PT/120/91884pb002.t1.png"),
        new Shield("91884pb003",  "https://img.bricklink.com/ItemImage/PT/115/91884pb003.t1.png"),
        new Shield("91884pb004",  "https://img.bricklink.com/ItemImage/PT/95/91884pb004.t1.png"),
        new Shield("98367pb01",   "https://img.bricklink.com/ItemImage/PT/59/98367pb01.t1.png"),
      
        new Shield("91884",       "https://img.bricklink.com/ItemImage/PT/120/91884.t1.png")]
      ),
      new Bucket(2013, [
        new Shield("2586pb005",   "https://img.bricklink.com/ItemImage/PT/88/2586pb005.t1.png"),
        new Shield("2586pb006",   "https://img.bricklink.com/ItemImage/PT/86/2586pb006.t1.png"),
        new Shield("2586pb007",   "https://img.bricklink.com/ItemImage/PT/86/2586pb007.t1.png"),
        new Shield("2586pb008",   "https://img.bricklink.com/ItemImage/PT/86/2586pb008.t1.png"),
        new Shield("3846pb034",   "https://img.bricklink.com/ItemImage/PT/95/3846pb034.t1.png"),
        new Shield("3846pb035",   "https://img.bricklink.com/ItemImage/PT/86/3846pb035.t1.png"),
        new Shield("3846pb036",   "https://img.bricklink.com/ItemImage/PT/86/3846pb036.t1.png"),
        new Shield("3846pb037",   "https://img.bricklink.com/ItemImage/PT/85/3846pb037.t1.png"),
        new Shield("75902pb03",   "https://img.bricklink.com/ItemImage/PT/120/75902pb03.t1.png"),
        new Shield("75902pb04",   "https://img.bricklink.com/ItemImage/PT/59/75902pb04.t1.png"),
        new Shield("92747pb10",   "https://img.bricklink.com/ItemImage/PT/15/92747pb10.t1.png")]
      ),
      new Bucket(2014, [
        new Shield("75902pb05",   "https://img.bricklink.com/ItemImage/PT/120/75902pb05.t1.png"),
        new Shield("91884pb005",  "https://img.bricklink.com/ItemImage/PT/77/91884pb005.t1.png"),
        new Shield("92747",       "https://img.bricklink.com/ItemImage/PT/51/92747.t1.png"),
        new Shield("92747pb02",   "https://img.bricklink.com/ItemImage/PT/15/92747pb02.t1.png"),
        new Shield("92747pb12",   "https://img.bricklink.com/ItemImage/PT/15/92747pb12.t1.png"),
      
        new Shield("91884",       "https://img.bricklink.com/ItemImage/PT/150/91884.t1.png")]
      ),
      new Bucket(2015, [
        new Shield("3846pb038",   "https://img.bricklink.com/ItemImage/PT/1/3846pb038.t1.png"),
        new Shield("18836pb01",   "https://img.bricklink.com/ItemImage/PT/115/18836pb01.t1.png"),
        new Shield("75902",       "https://img.bricklink.com/ItemImage/PT/5/75902.t1.png"),
        new Shield("75902pb06",   "https://img.bricklink.com/ItemImage/PT/11/75902pb06.t1.png"),
        new Shield("75902pb07",   "https://img.bricklink.com/ItemImage/PT/11/75902pb07.t1.png"),
        new Shield("92747pb03",   "https://img.bricklink.com/ItemImage/PT/15/92747pb03.t1.png"),
        new Shield("92747pb04",   "https://img.bricklink.com/ItemImage/PT/15/92747pb04.t1.png"),
        new Shield("92747pb05",   "https://img.bricklink.com/ItemImage/PT/51/92747pb05.t1.png"),
        new Shield("92747pb06",   "https://img.bricklink.com/ItemImage/PT/51/92747pb06.t1.png"),
        new Shield("92747pb07",   "https://img.bricklink.com/ItemImage/PT/51/92747pb07.t1.png"),
        new Shield("92747pb08",   "https://img.bricklink.com/ItemImage/PT/51/92747pb08.t1.png"),
        new Shield("92747pb09",   "https://img.bricklink.com/ItemImage/PT/51/92747pb09.t1.png"),
        new Shield("92747pb14",   "https://img.bricklink.com/ItemImage/PT/51/92747pb14.t1.png"),
      
        new Shield("2958pb059",   "https://img.bricklink.com/ItemImage/PT/11/2958pb059.t1.png"),
        new Shield("75902",       "https://img.bricklink.com/ItemImage/PT/11/75902.t1.png")]
      ),
      new Bucket(2016, [
        new Shield("3846pb039",   "https://img.bricklink.com/ItemImage/PT/1/3846pb039.t1.png"),
        new Shield("3846pb040",   "https://img.bricklink.com/ItemImage/PT/86/3846pb040.t1.png"),
        new Shield("3846pb041",   "https://img.bricklink.com/ItemImage/PT/86/3846pb041.t1.png"),
        new Shield("3846pb051",   "https://img.bricklink.com/ItemImage/PT/86/3846pb051.t1.png"),
        new Shield("3846pb052",   "https://img.bricklink.com/ItemImage/PT/86/3846pb052.t1.png"),
        new Shield("3846pb053",   "https://img.bricklink.com/ItemImage/PT/86/3846pb053.t1.png"),
        new Shield("18836pb02",   "https://img.bricklink.com/ItemImage/PT/77/18836pb02.t1.png"),
        new Shield("22408",       "https://img.bricklink.com/ItemImage/PT/95/22408.t1.png"),
        new Shield("22409",       "https://img.bricklink.com/ItemImage/PT/11/22409.t1.png"),
        new Shield("75902pb08",   "https://img.bricklink.com/ItemImage/PT/85/75902pb08.t1.png"),
        new Shield("75902pb25",   "https://img.bricklink.com/ItemImage/PT/85/75902pb25.t1.png"),
        new Shield("92747pb11",   "https://img.bricklink.com/ItemImage/PT/15/92747pb11.t1.png"),
      
        new Shield("2958pb065",   "https://img.bricklink.com/ItemImage/PT/11/2958pb065.t1.png")]
      ),
      new Bucket(2017, [
        new Shield("3846pb042",   "https://img.bricklink.com/ItemImage/PT/11/3846pb042.t1.png"),
        new Shield("3846pb043",   "https://img.bricklink.com/ItemImage/PT/86/3846pb043.t1.png"),
        new Shield("3846pb045",   "https://img.bricklink.com/ItemImage/PT/11/3846pb045.t1.png"),
        new Shield("3846pb048",   "https://img.bricklink.com/ItemImage/PT/11/3846pb048.t1.png"),
        new Shield("75902pb09",   "https://img.bricklink.com/ItemImage/PT/85/75902pb09.t1.png"),
        new Shield("75902pb10",   "https://img.bricklink.com/ItemImage/PT/5/75902pb10.t1.png"),
        new Shield("75902pb11",   "https://img.bricklink.com/ItemImage/PT/11/75902pb11.t1.png"),
        new Shield("98367pb02",   "https://img.bricklink.com/ItemImage/PT/11/98367pb02.t1.png"),
      
        new Shield("75902",       "https://img.bricklink.com/ItemImage/PT/85/75902.t1.png"),
        new Shield("30166pb01",   "https://img.bricklink.com/ItemImage/PT/1/30166pb01.t1.png"),
        new Shield(" 30166pb02",  "https://img.bricklink.com/ItemImage/PT/1/30166.t1.png")]
      ),
      new Bucket(2018, [
        new Shield("3846pb044",   "https://img.bricklink.com/ItemImage/PT/1/3846pb044.t1.png"),
        new Shield("3846pb046",   "https://img.bricklink.com/ItemImage/PT/11/3846pb046.t1.png"),
        new Shield("3846pb056",   "https://img.bricklink.com/ItemImage/PT/86/3846pb056.t1.png"),
        new Shield("35035",       "https://img.bricklink.com/ItemImage/PT/77/35035.t1.png"),
        new Shield("75902pb12",   "https://img.bricklink.com/ItemImage/PT/115/75902pb12.t1.png"),
      
        new Shield("75902",       "https://img.bricklink.com/ItemImage/PT/5/75902.t1.png")]
      ),
      new Bucket(2019, [
        new Shield("3846pb049",   "https://img.bricklink.com/ItemImage/PT/86/3846pb049.t1.png"),
        new Shield("3846pb050",   "https://img.bricklink.com/ItemImage/PT/86/3846pb050.t1.png"),
        new Shield("3846pb054",   "https://img.bricklink.com/ItemImage/PT/86/3846pb054.t1.png"),
        new Shield("18836pb03",   "https://img.bricklink.com/ItemImage/PT/86/18836pb03.t1.png"),
        new Shield("18836pb04",   "https://img.bricklink.com/ItemImage/PT/77/18836pb04.t1.png"),
        new Shield("75902pb13",   "https://img.bricklink.com/ItemImage/EXTT/25067.t1.png?0"),
        new Shield("75902pb14",   "https://img.bricklink.com/ItemImage/PT/115/75902pb14.t1.png"),
        new Shield("bb0883pb01",  "https://img.bricklink.com/ItemImage/PT/1/bb0883pb01.t1.png"),
      
        new Shield("91884",       "https://img.bricklink.com/ItemImage/PT/88/91884.t1.png"),
        new Shield("91884",       "https://img.bricklink.com/ItemImage/PT/249/91884.t1.png"),
        new Shield("30166pb02",   "https://img.bricklink.com/ItemImage/PT/59/30166.t1.png")]
      ),
      new Bucket(2020, [
        new Shield("3846pb047",   "https://img.bricklink.com/ItemImage/PT/86/3846pb047.t1.png"),
        new Shield("75902pb15",   "https://img.bricklink.com/ItemImage/PT/85/75902pb15.t1.png"),
        new Shield("75902pb16",   "https://img.bricklink.com/ItemImage/PT/95/75902pb16.t1.png"),
        new Shield("75902pb17",   "https://img.bricklink.com/ItemImage/PT/115/75902pb17.t1.png"),
      
        new Shield(" 30166pb02",   "https://img.bricklink.com/ItemImage/PT/86/30166.t1.png")]
      ),
      new Bucket(2021, [
        new Shield("2586pb009",   "https://img.bricklink.com/ItemImage/PT/69/2586pb009.t1.png"),
        new Shield("3846pb055",   "https://img.bricklink.com/ItemImage/PT/86/3846pb055.t1.png"),
        new Shield("3846pb057",   "https://img.bricklink.com/ItemImage/PT/88/3846pb057.t1.png"),
        new Shield("3846pb067",   "https://img.bricklink.com/ItemImage/PT/86/3846pb067.t1.png"),
        new Shield("75902pb18",   "https://img.bricklink.com/ItemImage/PT/115/75902pb18.t1.png"),
        new Shield("75902pb19",   "https://img.bricklink.com/ItemImage/PT/11/75902pb19.t1.png"),
        new Shield("75902pb20",   "https://img.bricklink.com/ItemImage/PT/85/75902pb20.t1.png"),
        new Shield("75902pb21",   "https://img.bricklink.com/ItemImage/PT/85/75902pb21.t1.png"),
        new Shield("75902pb22",   "https://img.bricklink.com/ItemImage/PT/63/75902pb22.t1.png"),
        new Shield("75902pb23",   "https://img.bricklink.com/ItemImage/PT/85/75902pb23.t1.png"),
      
        new Shield("2586",        "https://img.bricklink.com/ItemImage/PT/69/2586.t1.png"),
        new Shield("30166pb02",   "https://img.bricklink.com/ItemImage/PT/1/30166pb02.t1.png"),
        new Shield(" 30166pb02",  "https://img.bricklink.com/ItemImage/PT/88/30166.t1.png"),
        new Shield(" 30166pb02",  "https://img.bricklink.com/ItemImage/PT/85/30166.t1.png")]
      ),
      new Bucket(2022, [
        new Shield("3846pb058",   "https://img.bricklink.com/ItemImage/PT/88/3846pb058.t1.png"),
        new Shield("3846pb059",   "https://img.bricklink.com/ItemImage/PT/86/3846pb059.t1.png"),
        new Shield("3846pb060",   "https://img.bricklink.com/ItemImage/PT/86/3846pb060.t1.png"),
        new Shield("3846pb061",   "https://img.bricklink.com/ItemImage/PT/86/3846pb061.t1.png"),
        new Shield("3846pb062",   "https://img.bricklink.com/ItemImage/PT/86/3846pb062.t1.png"),
        new Shield("3846pb063",   "https://img.bricklink.com/ItemImage/PT/86/3846pb063.t1.png"),
        new Shield("3846pb064",   "https://img.bricklink.com/ItemImage/PT/86/3846pb064.t1.png"),
        new Shield("3846pb065",   "https://img.bricklink.com/ItemImage/PT/86/3846pb065.t1.png"),
        new Shield("3846pb066",   "https://img.bricklink.com/ItemImage/PT/86/3846pb066.t1.png"),
        new Shield("75902pb24",   "https://img.bricklink.com/ItemImage/PT/86/75902pb24.t1.png"),
        new Shield("75902pb26",   "https://img.bricklink.com/ItemImage/PT/11/75902pb26.t1.png"),
        new Shield("92747pb15",   "https://img.bricklink.com/ItemImage/PT/51/92747pb15.t1.png"),
      
        new Shield("2586",        "https://img.bricklink.com/ItemImage/PT/1/2586.t1.png")]
      ),
      new Bucket(2023, [
        new Shield("2586pb010",   "https://img.bricklink.com/ItemImage/PT/86/2586pb010.t1.png"),
        new Shield("75902pb27",   "https://img.bricklink.com/ItemImage/PT/95/75902pb27.t1.png"),
        new Shield("92747pb16",   "https://img.bricklink.com/ItemImage/PT/115/92747pb16.t1.png"),
        new Shield("98367",       "https://img.bricklink.com/ItemImage/PT/11/98367.t1.png"),
      
        new Shield("2586",        "https://img.bricklink.com/ItemImage/PT/3/2586.t1.png")]
      ),
    ];
  }

  public getShields() : Bucket[] {
    return this.buckets;
  }
}