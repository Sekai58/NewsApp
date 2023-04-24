import React from "react";
import NewsItem from "./NewsItem";
import useFetch from "./useFetch";

const News = () => {
  const { data, loading, error } = useFetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c9b390f390647669d0aec5b09de3079"
  );
  if (!loading && !error) {
    console.log(data);
  }

  /*const articles = [
    {
      source: {
        id: "fortune",
        name: "Fortune",
      },
      author: "Sean O'Kane, Craig Trudell, Bloomberg",
      title:
        "Elon Musk is willing to bet Tesla’s profits on eventual ‘tremendous economics’ of driverless software. Investors are spooked",
      description:
        "How far Tesla is willing to go to slash prices—and margins—remains a wild card.",
      url: "https://fortune.com/2023/04/23/elon-musk-tesla-profits-bet-on-driverless-software-investors-spooked-price-war/",
      urlToImage:
        "https://content.fortune.com/wp-content/uploads/2023/04/GettyImages-1228322681-e1682266283603.jpg?resize=1200,600",
      publishedAt: "2023-04-23T16:17:06Z",
      content:
        "Elon Musk is years behind on his ambition to render Tesla Inc.s cars fully autonomous. Hes now saying in no uncertain terms that hes willing to bet the companys profit margins on making it happen.Mus… [+3592 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Bloomberg",
      title: "Tesla abandons Mercedes battle to take on the likes of Ford",
      description:
        "Filed under:\n Earnings/Financials,Green,Marketing/Advertising,Tesla,Car Buying,Electric\n Continue reading Tesla abandons Mercedes battle to take on the likes of Ford\nTesla abandons Mercedes battle to take on the likes of Ford originally appeared on Autoblog o…",
      url: "https://www.autoblog.com/2023/04/23/tesla-abandons-mercedes-battle-to-take-on-the-likes-of-ford/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2023-04/594c1000-e061-11ed-bfff-aaa59c73795e",
      publishedAt: "2023-04-23T16:00:00Z",
      content:
        "Tesla Inc. has entered a new era: one in which Elon Musk keeps a different set of car executives up at night, while others rest a little easier.\r\nIn the decade since the Model S launched, Tesla has b… [+3172 chars]",
    },
    {
      source: {
        id: null,
        name: "CleanTechnica",
      },
      author: "Jennifer Sensiba",
      title: "Electrify America News (Well, Sort Of)",
      description:
        "Two recent announcements from Electrify America had one very interesting thing in common: they weren’t about Electrify America. But, if you’re familiar with the company, you probably know that the company has other divisions that start with “Electrify.” In th…",
      url: "https://cleantechnica.com/2023/04/23/electrify-america-news-well-sort-of/",
      urlToImage:
        "http://cleantechnica.com/files/2023/04/Small-250-ElectrifyCanadaandBMWGroupCanadaAnnounceThreeYearsofComplimentaryChargingforAll-ElectricBMWi7.jpg",
      publishedAt: "2023-04-23T15:56:23Z",
      content:
        "Two recent announcements from Electrify America had one very interesting thing in common: they weren’t about Electrify America. But, if you’re familiar with the company, you probably know that the co… [+7018 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "cleantechnica.com",
      title: "California Jury Exonerates Tesla In Autopilot Crash",
      description:
        "In July 6, 2019, Justine Hsu of Los Angeles was driving a 2016 Model S on city streets using Autopilot. She alleged in a lawsuit brought against Tesla in 2020 that the car suddenly swerved to the right and hit a curb, which caused the driver’s airbag to deplo…",
      url: "https://biztoc.com/x/8ca3c52ee55e4a3a",
      urlToImage: "https://c.biztoc.com/p/8ca3c52ee55e4a3a/og.webp",
      publishedAt: "2023-04-23T15:56:05Z",
      content:
        "In July 6, 2019, Justine Hsu of Los Angeles was driving a 2016 Model S on city streets using Autopilot. She alleged in a lawsuit brought against Tesla in 2020 that the car suddenly swerved to the rig… [+325 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "benzinga.com",
      title:
        "Google Co-Founder Sergey Brin Sold $366M Tesla Shares To Set Up Nonprofit",
      description:
        "Alphabet Inc’s GOOGL Google Co-founder Sergey Brin sold Tesla Inc TSLA shares to set up a nonprofit organization called Catalyst4, Bloomberg reported on Saturday. According to the report, Brin sold Tesla shares worth $366 million in December 2021, when the st…",
      url: "https://biztoc.com/x/76a785704cef45c1",
      urlToImage: "https://c.biztoc.com/p/76a785704cef45c1/og.webp",
      publishedAt: "2023-04-23T15:52:04Z",
      content:
        "Alphabet Incs GOOGL Google Co-founder Sergey Brin sold Tesla Inc TSLA shares to set up a nonprofit organization called Catalyst4, Bloomberg reported on Saturday.According to the report, Brin sold Tes… [+306 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Beatrice Nolan,George Glover",
      title:
        "Cheaper Teslas are hurting profits, but Elon Musk plans to keep slashing prices. Here's why.",
      description:
        "Tesla's price cuts are about sacrificing short-term profits in the hope of attracting more buyers away from traditional carmakers such as Ford.",
      url: "https://www.businessinsider.com/tesla-electric-vehicle-price-war-elon-musk-cuts-profits-ford-2023-4",
      urlToImage:
        "https://i.insider.com/644256f377ecc80019e5b61d?width=1200&format=jpeg",
      publishedAt: "2023-04-23T15:25:13Z",
      content:
        "Tesla's price cuts hammered its profit margins last quarter.Aly Song/Reuters\r\n<ul>\n<li>Tesla's profit margins plunged last quarter after the EV maker made aggressive price cuts.</li>\n<li>On an earnin… [+4288 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "yahoo.com",
      title:
        "Elon Musk urges entrepreneurs 'please refine lithium' as EVs face choke point",
      description:
        'CEO Elon Musk this past week reminded investors of a growing challenge in the US when it comes to the electric vehicle industry — securing refined lithium for EV batteries. "The choke point is much more on refining capacity than it is on mining. Lithium is ac…',
      url: "https://biztoc.com/x/7445e8f763360176",
      urlToImage: "https://c.biztoc.com/p/7445e8f763360176/og.webp",
      publishedAt: "2023-04-23T15:24:05Z",
      content:
        'CEO Elon Musk this past week reminded investors of a growing challenge in the US when it comes to the electric vehicle industry securing refined lithium for EV batteries."The choke point is much more… [+319 chars]',
    },
    {
      source: {
        id: null,
        name: "VentureBeat",
      },
      author: "Gary Grossman, Edelman",
      title:
        "How hybrid AI could enhance GPT-4 and GPT-5 and address LLM concerns",
      description:
        "While combining different AI techniques presents unique challenges, their integration can create more powerful, accurate and explainable AI.",
      url: "https://venturebeat.com/ai/how-hybrid-ai-could-enhance-gpt-4-and-gpt-5-and-address-llm-concerns/",
      urlToImage:
        "https://venturebeat.com/wp-content/uploads/2023/04/annevb_creating_one_artificial_intelligence_out_of_two._two_AI__5e06f4d2-e068-4c47-b353-c1ec6bfb7581.png?w=1200&strip=all",
      publishedAt: "2023-04-23T15:20:00Z",
      content:
        "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nThe explosion of new generative AI products and capabili… [+1565 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Ines Ferré",
      title:
        "Elon Musk urges entrepreneurs 'please refine lithium' as EVs face choke point",
      description:
        "Elon Musk highlights a challenge facing the EV battery market — a need for more lithium refineries. Some experts, however, expect this market will look like ...",
      url: "https://finance.yahoo.com/news/elon-musk-urges-entrepreneurs-please-refine-lithium-as-evs-face-choke-point-150024552.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/0gt7k9dt3q3v.BNP8XlZ2w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NzM-/https://s.yimg.com/os/creatr-images/2019-06/46911600-8c95-11e9-81b3-fb26c03f3057",
      publishedAt: "2023-04-23T15:00:24Z",
      content:
        'Tesla (TSLA) CEO Elon Musk this past week reminded investors of a growing challenge in the US when it comes to the electric vehicle industry securing refined lithium for EV batteries.\r\n"The choke poi… [+4407 chars]',
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "newsweek.com",
      title: 'Steve Bannon blasts "stone cold liar" Elon Musk',
      description:
        'Steve Bannon accused Twitter CEO Elon Musk of lying on Saturday about his stance on free speech after the businessman said last week that he wants to "elevate citizen journalism." Musk emerged as a popular figure on the right after he purchased the social med…',
      url: "https://biztoc.com/x/bca6abbdfc480b5f",
      urlToImage: "https://c.biztoc.com/p/bca6abbdfc480b5f/og.webp",
      publishedAt: "2023-04-23T15:00:05Z",
      content:
        'Steve Bannon accused Twitter CEO Elon Musk of lying on Saturday about his stance on free speech after the businessman said last week that he wants to "elevate citizen journalism."Musk emerged as a po… [+298 chars]',
    },
  ];*/
  if (!loading && !error) {
    return (
      <div className="m-4 row">
        <h2>Top Headlines</h2>
        {data.articles.map((elem) => {
          return (
            <div className="col-md-4 my-3">
              <NewsItem elements={elem}></NewsItem>
            </div>
          );
        })}
      </div>
    );
  }
};

export default News;
