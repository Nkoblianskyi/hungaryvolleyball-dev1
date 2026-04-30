export interface Article {
  slug: string
  title: string
  category: string
  excerpt: string
  coverImage: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'roplabda-alapjai-kezdoknek',
    title: 'A röplabda alapjai: útmutató kezdőknek',
    category: 'Alapismeretek',
    excerpt:
      'A röplabda olyan csapatsport, amely fizikai erőt, gyorsaságot és csapatmunkát igényel egyszerre. Ebben az útmutatóban bemutatjuk a legfontosabb alapokat, amelyekkel bárki elkezdheti a játékot.',
    coverImage: '/images/blog-1.jpg',
    content: [
      'A röplabda olyan csapatsport, amely egyaránt igényli a fizikai erőt, a gyorsaságot, a koordinációt és a csapatmunkát. Az alapok elsajátítása nélkülözhetetlen ahhoz, hogy valaki értelmesen részt vegyen a játékban, legyen szó szabadidős tevékenységről vagy versenyszerű sportolásról.',
      'A játék lényege egyszerű: a két csapat hat-hat játékossal áll fel a hálóval elválasztott pályán, és a céljuk az, hogy a labdát a talajra juttassák az ellenfél térfelén, miközben saját térfelükön megakadályozzák ugyanezt. Minden csapatnak legfeljebb háromszor szabad érintenie a labdát, mielőtt átjátszaná a hálón.',
      'Az alapvető érintések három típusa a fogadás, az emelés és az ütés. A fogadás során a labdát alulütéssel veszik fel a játékosok, általában az ellenfél szervájára reagálva. Az emelés a felső kar és kéz segítségével irányítja a labdát a csatár felé. Az ütés pedig az a pillanat, amikor a csatár erőteljes mozdulata a labdát az ellenfél térfelére küldi.',
      'A pályán elfoglalt pozíciók rendszere is fontos alapismeret. A hat játékos körkörösen váltja pozícióját minden pontszerzés után, amelyet saját szervával nyertek. Vannak hátulsó és első soros játékosok, akiknek eltérő feladataik vannak a játékban. A libero egy speciális védekezői szerepkör, amelynek viselője végtelen cserelehetőséggel rendelkezik a hátsó sorban.',
      'A szervával indul minden labdamenet. A jó szerva nyomás alá helyezi az ellenfelet, és lehetővé teszi a saját csapat számára, hogy irányítsa a mérkőzés tempóját. Kezdőként érdemes az egyszerűbb alulütéses szervával kezdeni, majd fokozatosan áttérni a felső kéziszervákon át a lebegő és ugrószervákig.',
      'A röplabda fizikai igénybevételét tekintve kiváló kondicionáló edzés. Fejleszti a robbanékonyságot, az állóképességet, a koordinációt és a reakcióidőt. Ugyanakkor a csapatszellem és a kommunikáció is elengedhetetlen: a jó csapat tagjai folyamatosan kommunikálnak egymással, jelzik szándékaikat és bátorítják egymást a nehéz pillanatokban.',
      'Aki most kezd el röplabdázni, annak érdemes egy helyi csoporthoz csatlakoznia, ahol tapasztalt játékosok segíthetnek az alapok elsajátításában. A rendszeres edzés és a türelem meghozza gyümölcsét, és hamarosan a pálya öröme válik a legfőbb motivációvá.',
    ],
  },
  {
    slug: 'szerva-technikai-finomságok',
    title: 'A szerva technikai finomságai és stratégiája',
    category: 'Technika',
    excerpt:
      'A szerva a röplabda egyik legfontosabb és legegyénibb eleme. Egy hatékony szerva azonnali pontszerzést hozhat, vagy olyan helyzetet teremthet, amelyből az ellenfél nem tud erős támadást felépíteni.',
    coverImage: '/images/blog-2.jpg',
    content: [
      'A röplabdában a szervával indul minden labdamenet, és ez az egyetlen mozdulat, amelyet a játékos teljesen egyedül, mindenféle külső beavatkozás nélkül hajthat végre. Ebből következik, hogy a szerva technikájának tökéletes elsajátítása óriási versenyelőnyt biztosíthat.',
      'A szervák több kategóriába sorolhatók. Az alulütéses szerva kezdőknek ajánlott, mert viszonylag könnyen vezérelhető és megbízható. Az ütő kéz a derekig emelt labdát alulról üti meg, miközben a másik kéz tartja a labdát. Ez a szerva nem a sebességére, hanem a pontosságára épít.',
      'A felső kéziszerva az elterjedtebb technika versenyszerű szinten. A játékos a labdát a feje fölé dobja, és a kitárt könyökű, nyitott tenyerű kézzel üti meg erőteljesen. A kéz mozgása a labda mögül előre, majd lefelé hajtja a labdát az ellenfél térfelére.',
      'A lebegő szerva az egyik legtechnikásabb változat. A labdát minimálisan érintik meg, forgás nélkül küldik át a hálón. Ez a forgásmentes repülés kiszámíthatatlan mozgást eredményez, ami megnehezíti a fogadást. A lebegő szerva a fogadó játékos egyik legnagyobb réme, mivel utolsó pillanatban váratlanul irányt változtat.',
      'Az ugrószervával a leggyorsabb és legerősebb szervát lehet elérni. A játékos a hátvonaltól nekifutásból ugrik, és a legmagasabb ponton találja meg a labdát teljes erővel. Ez a technika rendkívüli koordinációt és megfelelő testi adottságokat igényel, de eredményes végrehajtásakor szinte visszaüthetetlenné válik.',
      'A szervastratégia sem elhanyagolható szempont. A tapasztalt játékosok nem véletlenszerűen szerválnak, hanem meghatározott játékosokra vagy pályaterületekre céloznak. A gyengébb fogadót célba venni, a rotációban kedvezőtlenebb pozícióban lévő játékosra szerválni, vagy a védelem réseibe irányítani a labdát mind tudatos döntés eredménye.',
      'A szervahiba visszaüt, ezért a kockázat és a haszon egyensúlyát mindig figyelembe kell venni. Fontos meccshelyzetekben az első cél a biztonságos, de nehezen fogható szerva, nem feltétlenül az azonnali pontszerzést célzó kockázatos megoldás.',
    ],
  },
  {
    slug: 'csapatmunka-es-kommunikacio',
    title: 'Csapatmunka és kommunikáció a pályán',
    category: 'Stratégia',
    excerpt:
      'A röplabda valódi csapatsport, ahol az egyéni képességek csak akkor hoznak eredményt, ha a csapat tagjai összehangoltan, folyamatos kommunikációval játszanak. A pályán való kommunikáció megtanulása az egyik legfontosabb fejlesztési terület.',
    coverImage: '/images/blog-3.jpg',
    content: [
      'A röplabda csapatjáték, amelyben a siker alapja a játékosok közötti folyamatos és hatékony kommunikáció. Ellentétben számos más sporttal, ahol az egyén teljesítménye döntő, a röplabdában minden egyes labdamenet legalább három játékos összehangolt munkáját igényli.',
      'A pályán folyó kommunikáció többféle csatornán zajlik. A verbális kommunikáció a legnyilvánvalóbb: a játékosok hangosan jelzik szándékaikat, figyelmeztetik egymást a labda irányára, és bátorítják egymást. Az "enyém", "tiéd", "ki" és "be" szavak életbevágóak a labdamenet során, és használatuk megakadályozza a téves helyzetek kialakulását.',
      'A nem verbális kommunikáció ugyanolyan fontos. A testhelyzet, a szem kontaktus és a jelzések mind segítik a csapattagokat a tervek összehangolásában. Az emelt kézfej jele a feladónak jelzi az ütési szándékot, a mutatott ujjak száma a tervezett csatározási irányt közölheti.',
      'A csapatdinamika szempontjából a bizalom kulcskérdés. Amikor egy játékos tudja, hogy a szomszédja lefedi a rést, bátrabban tud a saját zónájára koncentrálni. Ez a bizalom hosszú edzésidőn és közös tapasztalatokon keresztül épül fel, és nem pótolható csupán technikai tudással.',
      'A pihenőidők és időkérések is a csapatkommunikáció részét képezik. Ezek a rövid szünetek lehetőséget adnak a taktika megbeszélésére, a fáradtság elleni küzdelemre és a csapat figyelmének visszaterelésére a lényegre. Egy jó vezető játékos ilyenkor az egész csapatot ráhangolhatja a következő labdamenetre.',
      'Az edzéseken tudatosan fejleszteni kell a kommunikációs szokásokat. Az olyan gyakorlatok, amelyekben minden fogást és szándékot hangosan be kell jelenteni, kezdetben furcsának tűnhetnek, de hamarosan természetessé válnak, és a mérkőzéseken érezhető lesz a különbség.',
      'A legjobb csapatok nem csupán technikailag erősek, hanem kommunikációjuk szinte zökkenőmentes, szinte ösztönös szintű. Elérni ezt az állapotot hosszú munka eredménye, de az út minden lépése fejleszti a csapatot és az egyéni játékosokat is.',
    ],
  },
  {
    slug: 'blokk-technika-halo-mellett',
    title: 'A blokkolás művészete a hálónál',
    category: 'Technika',
    excerpt:
      'A blokkolás a röplabda egyik leghatásosabb védekezési eszköze, és egyben az egyik legnézhetőbb eleme a sportnak. A jó blokk megakadályozza az ellenfél erős csatározását, vagy legalábbis lelassítja azt.',
    coverImage: '/images/blog-4.jpg',
    content: [
      'A blokkolás a röplabda leginkább vizuálisan látványos eleme: a játékos a háló fölé nyúl, hogy megakadályozza az ellenfél csatározásának átjutását. Egy jól végrehajtott blokk azonnal pontot szerez, vagy legalábbis kényelmetlen helyzetbe hozza az ellenfelet.',
      'A blokkolás technikailag több összetevőből áll. A helyes testhelyzet elengedhetetlen: a játékosnak a hálóhoz közel kell állnia, kissé hajlított térddel, készen az ugrásra. A karok a törzs előtt vannak, a kezek felfelé mutatnak, a tenyerek az ellenfél felé fordulnak.',
      'Az ugrás időzítése kritikus. Ha a blokkoló túl korán ugrik, az ellenfél csatár várakozhat és kikerülheti a blokkot. Ha túl késő, elveszíti a fölényt. A jó időzítés azt jelenti, hogy a blokkoló keze a hálótér fölé ér abban a pillanatban, amikor a csatár labdaérintést végez.',
      'A blokk iránya szintén gondolkodást igényel. A "lezáró" blokk egy irányba tölti el a labdát, és ezáltal a háttérvédelem is pontosan tudja, hova kell felkészülnie. A blokkot és a védelmet össze kell hangolni, ez a feladó és a csapatkapitány munkája.',
      'Az egyéni blokkon túl a kétfős és háromfős blokk is bevett taktika a magasabb szintű játékban. A kettős blokknál két játékos egyszerre ugrik a csatár ellen, amellyel a hálótér nagy részét lefedik. A háromfős blokk ritkább, de extrém erős csatározás ellen rendkívül hatásos.',
      'A blokkolás fizikai követelményei is magasak. A magasság nyilvánvaló előny, de a robbanékony ugróerő és a gyors oldalirányú mozgás fontosabbak lehetnek. Egy alacsonyabb, de gyorsabb és ügyesebb játékos sokszor eredményesebb blokkot teljesít, mint egy magasabb, de lassabb.',
      'A blokkolás elsajátítása nem egyedül a fizikai adottságokon múlik. A csatár mozgásának, szokásainak tanulmányozása, a taktikai helyzetek felismerése és az előrejelzési képesség fejlesztése mind hozzájárul ahhoz, hogy valaki kiváló blokkjátékossá váljék.',
    ],
  },
  {
    slug: 'strandroplabda-nyari-sport',
    title: 'Strandröplabda: a nyár sportja szabad ég alatt',
    category: 'Strandröplabda',
    excerpt:
      'A strandröplabda az elmúlt évtizedekben az egyik legnépszerűbb nyári szabadtéri sporttá nőtte ki magát. A homokos pályán, kétfős csapatokban zajló játék számos eltérést mutat a fedett pályás röplabdától.',
    coverImage: '/images/blog-2.jpg',
    content: [
      'A strandröplabda a természet szeretőinek és a sportolni vágyóknak egyaránt vonzó lehetőséget kínál: a szabadban, a homokos terepen való mozgás különleges fizikai kihívással és sportélménnyel párosul. Bár a szabályai hasonlóak a fedett pályás változathoz, számos lényeges különbség teszi egyedi sporttá.',
      'A legszembetűnőbb különbség a csapatlétszám: a strandröplabdában két játékos alkot egy csapatot, nem hat. Ez azt jelenti, hogy minden egyes játékosnak a pálya teljes területét le kell fednie, sokkal nagyobb fizikai terheléssel és taktikai tudatossággal.',
      'A homokos talaj teljes mértékben átalakítja a mozgásmintákat. A homokban futni, ugrani és gurulni jóval energiaigényesebb, mint kemény padlón. A homok ugyanakkor puhán fogja a leeséseket, ezért a szélsőséges védekezési mozdulatok biztonságosabbak és ezáltal gyakoribbak is.',
      'A labda is eltér: a strandröplabda általában valamivel nagyobb és kisebb belső nyomású, hogy a szabad ég alatt is jobban látható és irányítható legyen. A szél szerepe sem elhanyagolható: a tapasztalt strandröplabdázók tanulnak a széllel és ellene is játszani, ami igazi természetes taktikai változót jelent.',
      'A szervastratégia strandröplabdában különösen fontos, mivel a kétfős csapatban az egyetlen fogadó fizetőképessége meghatározó. Sok csapat a gyengébb fogadóra szerválva próbál könnyű pontokat szerezni, ezért mindkét játékosnak kiemelkedő fogadótechnikát kell fejlesztenie.',
      'A strandröplabda egyedi szociális légköre is vonzóvá teszi a sport iránt érdeklődők számára. A nyitott, barátságos hangulat, a természetes fény és a casual öltözék olyan környezetet teremt, ahol a kezdők és haladók egyaránt jól érezhetik magukat. Nyári tornák és baráti meccsek egyaránt megszervezhetők egyszerűen és gyorsan.',
      'Edzési szempontból a strandröplabda kiváló kiegészítője a fedett pályás edzésnek. Fejleszti az alap erőt, a talajközelből való védekezést és a kétemberes kommunikációt. Sokan a nyári strandröplabda-szezon után tesznek szert jobb kondicionális szintre és jobb egyéni technikai arányokra.',
    ],
  },
  {
    slug: 'roplabda-es-egeszseg',
    title: 'Röplabda és egészség: fizikai és mentális előnyök',
    category: 'Egészség',
    excerpt:
      'A röplabda nemcsak szórakoztató, de az egészségre is kiváló hatással van. A rendszeres röplabdázás kardiovaszkuláris előnyöket, izomfejlesztést és mentális jólétet egyaránt biztosít.',
    coverImage: '/images/blog-3.jpg',
    content: [
      'A röplabda rendszeres művelése számos egészségügyi előnnyel jár, amelyek mind a fizikai, mind a mentális jólétre pozitívan hatnak. Nem véletlen, hogy a sport egyre több korosztályban talál hívekre, és az egészségtudatos életmód részeként is egyre több embernek ajánlják.',
      'Kardiovaszkuláris szempontból a röplabda kiváló intervall edzés. A mérkőzés során rövid, intenzív labdamenetek váltakoznak rövidebb szünetekkel, ami az ún. HIIT edzés természetes formáját jelenti. Ez a szívritmusra, a tüdőkapacitásra és az anyagcsere fokozására egyaránt jótékony hatású.',
      'Az izomzat fejlesztése is sokrétű. A csatározás során a vállak, karok és felsőtest izmait kell aktiválni. Az ugrások és a gyors irányváltások az alsótest erejét és robbanékonyságát növelik. A folyamatos talajközelből való mozgás és felugró mozgások a törzsizmokat is intenzíven igénybe veszik.',
      'A koordináció és az egyensúlyérzék is javul. A röplabda komplex mozgásformákat igényel, amelyek fejlesztik az idegrendszer és az izmok közötti kapcsolatot. Ezek az ideg-izom kapcsolatok nemcsak a sportban, de a hétköznapi mozgásban is hasznosak.',
      'A mentális előnyöket sem szabad alábecsülni. A csapatsportok általánosan ismert pozitív hatása a stressz csökkentése, a szociális kapcsolatok erősítése és az önbizalom növelése. A röplabda esetében a gyors döntéshozás, a koncentrációfejlesztés és a csapatszellem különösen kiemelendő mentális haszon.',
      'A csontok és ízületek szempontjából a röplabda mérsékelt terhelést jelent, különösen a homokos pályán való változat esetén. A nem ütközéses jelleg miatt kisebb a sérülésveszély, mint számos más csapatsportnál, bár a bokasérülések és vállproblémák természetesen előfordulhatnak.',
      'Összességében a röplabda egy életkortól és fittségi szinttől viszonylag független sport, amelyet szinte bárki elkezdhet. A rekreációs szinttől az élsportig minden szinten megtalálható a megfelelő kihívás, és a rendszeres részvétel hosszú távon komoly egészségügyi tőkét jelent.',
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  const decoded = decodeURIComponent(slug)
  return articles.find((a) => a.slug === decoded || a.slug === slug)
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const decoded = decodeURIComponent(slug)
  return articles.filter((a) => a.slug !== decoded && a.slug !== slug).slice(0, count)
}
