import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
articles =  [
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Alex Heath",
    "title": "Interview: Sam Altman on being fired and rehired by OpenAI",
    "description": "In an interview, Altman says he was “hurt” and “angry” when OpenAI’s board moved to oust him as CEO, and that “clearly our governance structure had a problem.”",
    "url": "https://www.theverge.com/2023/11/29/23982046/sam-altman-interview-openai-ceo-rehired",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/G63b3sCcu9h66nwG4EUr483dKPw=/0x0:3872x2674/1200x628/filters:focal(1587x965:1588x966)/cdn.vox-cdn.com/uploads/chorus_asset/file/25121586/1778705443.jpg",
    "publishedAt": "2023-11-30T02:42:54Z",
    "content": "Sam Altman.\r\n\n \n\n\n “Clearly our governance structure had a problem,” according to Altman. When OpenAI’s board asked Sam Altman to return a day after they fired him, he initially felt defiant, hurt an… [+8359 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "michael.hicks@futurenet.com (Michael L Hicks)",
    "title": "Samsung Glasses: Rumors and leaks about Samsung's XR headset",
    "description": "We don't know for certain if Samsung's trademark applies to its mixed-reality headset or something else. But name aside, we already know a ton about it, including Samsung's hardware choice, Google's software plans, and its alleged release month and pricing.",
    "url": "https://www.androidcentral.com/gaming/virtual-reality/samsung-glasses",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/gAb4fXVQqV3jwZ4xTDtn2N-1200-80.jpg",
    "publishedAt": "2023-11-30T03:46:52Z",
    "content": "We've known for some time that Samsung is developing an XR headset. It wants a mixed-reality device to challenge the Apple Vision Pro, even delaying its old XR prototype after seeing Apple's announce… [+13207 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Apple Announces 2023 App Store Award Winners",
    "description": "Apple today chose its 2023 App Store Award winners, highlighting the best apps and games on the iPhone, iPad, Mac, and more. Apple is recognizing 14 apps and games in total, with the winners picked by the global App Store Editorial team.\n\n\n\n\n\nAccording to App…",
    "url": "https://www.macrumors.com/2023/11/29/2023-app-store-award-winners/",
    "urlToImage": "https://images.macrumors.com/t/IZ-PejMXVtt0U4wEtaBhtsS-Dx4=/1600x/article-new/2022/12/app-store-awards-2022.jpg",
    "publishedAt": "2023-11-30T04:00:00Z",
    "content": "Apple today chose its 2023 App Store Award winners, highlighting the best apps and games on the iPhone, iPad, Mac, and more. Apple is recognizing 14 apps and games in total, with the winners picked b… [+1504 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "BeauHD",
    "title": "Apple Pulls Plug On Goldman Credit-Card Partnership",
    "description": "schwit1 shares a report from the Wall Street Journal: Apple is pulling the plug on its credit-card partnership with Goldman Sachs (source paywalled; alternative source), the final nail in the coffin of the Wall Street bank's bid to expand into consumer lendin…",
    "url": "https://news.slashdot.org/story/23/11/30/0316210/apple-pulls-plug-on-goldman-credit-card-partnership",
    "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
    "publishedAt": "2023-11-30T07:00:00Z",
    "content": "Apple is pulling the plug on its credit-card partnership with Goldman Sachs(source paywalled; alternative source), the final nail in the coffin of the Wall Street bank's bid to expand into consumer l… [+918 chars]"
    },
    {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Madeline Berg,Grace Kay",
        "title": "On the eve of Tesla's next major release, Elon Musk gave a bizarre, long-winded interview about everything but the Cybertruck",
        "description": "The Tesla CEO's 90-minute interview featured an at-times confrontational Elon Musk, who raged against advertisers who left X.",
        "url": "https://www.businessinsider.com/elon-musk-bizarre-interview-advertisers-x-tesla-cybertruck-contentious-dealbook-2023-11",
        "urlToImage": "https://i.insider.com/6567f9ef58e7c0c29a2824a0?width=1200&format=jpeg",
        "publishedAt": "2023-11-30T03:19:54Z",
        "content": "Elon Musk sat down for a long-winded rollercoaster of an interview on Wednesday, during which he barely mentioned Tesla's Cybertruck.Michael M. Santiago/Getty Images\r\n<ul><li>Elon Musk didn't have mu… [+4766 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "VentureBeat"
        },
        "author": "Dean Takahashi",
        "title": "Apple highlights best games and apps for App Store Awards for 2023",
        "description": "Are you looking to showcase your brand in front of the brightest minds of the gaming industry? Consider getting a custom GamesBeat sponsorship. Learn more. Apple announced the winners of its App Store Awards for 2023, honoring the best games and apps of the y…",
        "url": "https://venturebeat.com/games/apple-highlights-best-games-and-apps-for-app-store-awards-for-2023/",
        "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/11/lies-of-p-Apple-Store-Awards-2023-Mac-Game-of-the-Year-Lies-of-P-01.jpg?w=1200&strip=all",
        "publishedAt": "2023-11-30T04:00:00Z",
        "content": "Are you looking to showcase your brand in front of the brightest minds of the gaming industry? Consider getting a custom GamesBeat sponsorship. Learn more.\r\nApple announced the winners of its App Sto… [+1227 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Aisha Counts and Dana Hull / Bloomberg",
        "title": "Elon Musk Tells Advertisers Boycotting X to ‘Go F-ck Yourself’",
        "description": "Musk urged people to judge him by his actions rather than his words.",
        "url": "https://time.com/6340905/elon-musk-advertiser-boycott-x/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2023/11/elon-musk-2.jpg?quality=85",
        "publishedAt": "2023-11-30T01:51:19Z",
        "content": "Elon Musk, the billionaire owner of X, says the advertisers that have stopped spending on the platform due to his endorsement of an antisemitic post can f themselves.\r\nWhat its going to do is its goi… [+4379 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Tessa Berenson",
        "title": "These Are the Biggest Moments From TIME’s Latino Leaders Dinner",
        "description": "TIME's Latino leaders dinner featured toasts from Elizabeth Acevedo, Eva Longoria, Miguel Cardona, and more, and a performance by Frank Ray.",
        "url": "https://time.com/6338500/latino-leaders-dinner-biggest-moments/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2023/11/1821544051.jpg?quality=85",
        "publishedAt": "2023-11-30T05:30:09Z",
        "content": "On Nov. 29 in Los Angeles, TIME hosted a dinner honoring its inaugural list of Latinos making an impact on the country.\r\nHeld at Soulmate in West Hollywood, the event convened honorees including acto… [+5913 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Manu García (Visnuh)",
        "title": "Smartphones top a precios irresistibles: las mejores ofertas en AliExpress aún disponibles tras el Black Friday",
        "description": "¿Sigues sin encontrar smartphone tras el Black Friday? Si no has llegado a tiempo a las ofertas o las que has visto no te han encajado, puede que los superventas de AliExpress sean lo que necesitas. Allí sigues teniendo modelos top con precios estupendos y he…",
        "url": "https://www.xataka.com/seleccion/smartphones-top-a-precios-irresistibles-mejores-ofertas-aliexpress-disponibles-black-friday",
        "urlToImage": "https://i.blogs.es/4d7f82/smartphones_alexpress/840_560.jpeg",
        "publishedAt": "2023-11-30T11:31:18Z",
        "content": "¿Sigues sin encontrar smartphone tras el Black Friday? Si no has llegado a tiempo a las ofertas o las que has visto no te han encajado, puede que los superventas de AliExpress sean lo que necesitas. … [+4766 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Ricardo Aguilar",
        "title": "Activision quería su propia tienda de juegos para Android. Se frenó a golpe de talonario, según Epic Games",
        "description": "La documentación del juicio entre Epic Games contra Google sigue arrojando valiosa información sobre los movimientos de algunos de los principales gigantes del mundo del videojuego. En concreto, como recoge Verge, los últimos documentos internos desvelan que …",
        "url": "https://www.xataka.com/legislacion-y-derechos/activision-queria-su-propia-tienda-juegos-para-android-se-freno-a-golpe-talonario-epic-games",
        "urlToImage": "https://i.blogs.es/27a8a8/1366_2000-1-/840_560.jpeg",
        "publishedAt": "2023-11-30T09:39:50Z",
        "content": "La documentación del juicio entre Epic Games contra Google sigue arrojando valiosa información sobre los movimientos de algunos de los principales gigantes del mundo del videojuego. En concreto, como… [+1800 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "Elon Musk tiene un mensaje para los anunciantes: \"Que os j***n\"",
        "description": "En las últimas semanas Elon Musk ha visto como varios anunciantes importantes —Apple, IBM, Oracle o Disney entre ellos— detenían sus campañas en X tras los comentarios antisemitas que publicó en esta red social. En una reciente participación del magnate en un…",
        "url": "https://www.xataka.com/empresas-y-economia/elon-musk-tiene-mensaje-para-anunciantes-que-os-j-n",
        "urlToImage": "https://i.blogs.es/cfe4aa/elon-3/840_560.jpeg",
        "publishedAt": "2023-11-30T07:45:47Z",
        "content": "En las últimas semanas Elon Musk ha visto como varios anunciantes importantes Apple, IBM, Oracle o Disney entre ellos detenían sus campañas en X tras los comentarios antisemitas que publicó en esta r… [+3109 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The New Yorker"
        },
        "author": "Adam Gopnik",
        "title": "The French Are Not Happy About “Napoleon”",
        "description": "Adam Gopnik writes about how Ridley Scott’s 2023 film, “Napoleon,” has provoked a surreal cultural dislocation and unintended comedy among French audiences.",
        "url": "https://www.newyorker.com/culture/cultural-comment/the-french-are-not-happy-about-napoleon",
        "urlToImage": "https://media.newyorker.com/photos/65676b64d25efd60fad1a8e3/16:9/w_1280,c_limit/Gopnik-Napoleon.jpg",
        "publishedAt": "2023-11-30T00:43:43Z",
        "content": "Joaquin Phoenix in Ridley Scotts Napoleon.Photograph courtesy Apple TV+\r\nAmericans are so used to seeing history played by Americans that the oddity of it hardly registers anymore. Charlton Heston wa… [+4176 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Atlantic"
        },
        "author": "Daniel Engber",
        "title": "The Cockroach Cure",
        "description": "Forty years ago, scientists did the impossible. Why doesn’t anyone remember?",
        "url": "https://www.theatlantic.com/podcasts/archive/2023/11/cockroach-bait-invention-combat/676167/?utm_source=feed",
        "urlToImage": null,
        "publishedAt": "2023-11-30T11:00:00Z",
        "content": "A week before Christmas in 1983, two chemists at Yale University made a breakthrough that they thought could change the world. “It was like opening up a door and seeing a light,” one of the scientist… [+28492 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Atlantic"
        },
        "author": "Jacob Stern",
        "title": "The Vanishing of Ammon Bundy",
        "description": "A legendary anti-government extremist seemed on the verge of another standoff with the law. Then he disappeared.",
        "url": "https://www.theatlantic.com/politics/archive/2023/11/ammon-bundy-disappearance-peoples-rights-network/675939/?utm_source=feed",
        "urlToImage": null,
        "publishedAt": "2023-11-30T11:30:00Z",
        "content": "Photographs by Cole BarashTwo weeks before chaos hit St. Luke’s hospital in Boise, Idaho—before Ammon Bundy showed up with an armed mob and the hospital doors had to be sealed and death threats crash… [+37185 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Leo Becker",
        "title": "heise+ | Vision Pro in der Spar-Edition: Meta Quest 3 im Mixed-Reality-Einsatz",
        "description": "Räumliches Computing geht schon jetzt, zu einem Bruchteil des Vision-Pro-Preises. Was die Quest 3 taugt und was sich damit über Apples Headset lernen lässt.",
        "url": "https://www.heise.de/tests/Vision-Pro-in-der-Spar-Edition-Meta-Quest-3-im-Mixed-Reality-Einsatz-9543775.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/0/6/2/9/9/mixedreality-66ec7eeb0cd9b679.png",
        "publishedAt": "2023-11-30T12:30:00Z",
        "content": "Inhaltsverzeichnis\r\nMeta-Chef Mark Zuckerberg gab sich nach der Enthüllung der Vision Pro erleichtert: Apple habe \"keinerlei magische Lösungen\" gezeigt und könne die Gesetze der Physik auch nicht aus… [+2298 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Donnerstag: GM kürzt Cruise-Budget, Amazon bietet Modell für KI-Bildgeneratoren",
        "description": "Kürzung für Robo-Taxis + KI-Bildgenerator von AWS + Linksteuer Kanadas reduziert + Datenschützer gegen KI-Selbstregulierung + App Store Awards '23 + #heiseshow",
        "url": "https://www.heise.de/news/Donnerstag-GM-kuerzt-Cruise-Budget-Amazon-bietet-Modell-fuer-KI-Bildgeneratoren-9544067.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/0/6/4/5/3/thursday-174817b18b9e6f44.webp",
        "publishedAt": "2023-11-30T05:30:00Z",
        "content": "General Motors steigt bei Cruise auf die Bremse. Die Investition in selbstfahrende Autos wird 2024 um hunderte Millionen Dollar gestutzt, nachdem der Anbieter autonomer Taxis zuletzt nach einigen Vor… [+4722 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Kristina Beer",
        "title": "Musk gegen abtrünnige Werbekunden: Sie bringen X um!",
        "description": "Elon Musk schießt weiter gegen Werbekunden, die seine Plattform X (Twitter) verlassen. Sie würden damit X umbringen – und die Öffentlichkeit das wissen.",
        "url": "https://www.heise.de/news/Musk-gegen-abtruennige-Werbekunden-Sie-bringen-X-um-9544077.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/0/6/4/5/8/shutterstock_2336632693-6437384fbe7d58ae.jpg",
        "publishedAt": "2023-11-30T06:59:00Z",
        "content": "Elon Musk hat in einem öffentlichen Auftritt erklärt, dass die Flucht großer Werbekunden sein Netzwerk X (vormals Twitter) umbringen werde. Er warf ihnen auch vor, ihn mit ihrer Abkehr erpressen zu w… [+2306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Filipe Espósito",
        "title": "Job opening hints at Brazilian fintech replacing Goldman Sachs as Apple Card issuer",
        "description": "A recent report from The Wall Street Journal revealed that Apple and Goldman Sachs are ending the partnership they made in 2019 to introduce the Apple Card. Although the news didn’t come as a surprise, it’s still unclear what will happen to the Apple Card – b…",
        "url": "https://9to5mac.com/2023/11/29/job-opening-fintech-goldman-sachs-apple-card/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/Apple-Card-global-rollout.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-11-30T01:10:03Z",
        "content": "A recent report from The Wall Street Journal revealed that Apple and Goldman Sachs are ending the partnership they made in 2019 to introduce the Apple Card. Although the news didn’t come as a surpris… [+2037 chars]"
        },
        
]
    constructor(){
        super();
        console.log("Hello I am a constructor fromNews component");
        this.state = {
            articles: this.articles,
            loading:false
        }    
    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
       
        <div className="row">
        {this.state.articles.map((element)=>{
         return   <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
