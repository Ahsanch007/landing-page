import ReadyToUpgrade from "./ReadyToUpgrade";
import SemanticCards from "./SemanticCards";
import SementaticLayer from "./SementaticLayer";

export const DetailPageCaching = (
  props,
  {
    Sections = [
      {
        title: "Centralize your data models upstream, so that you only have to define them once.",
        description: `Whether you’re
           building an internal application, a dashboard, or an
           embedded analytics application, ensure they’ll all
           be powered by consistent data—and skip manually
           orchestrating metrics for each presentation layer.
           Combined with Cube’s <a href="https://cube.dev/docs/caching#overview">advanced
               caching</a> and <a href="https://cube.dev/docs/caching#pre-aggregations">pre-aggregation</a>
           capabilities, this ensures that every downstream app
           stays updated with the latest
           information—cost-effectively and with low latency.`,
        img: "https://cube.dev/images/product/caching-feature-1.svg",
        canvas: true,
      },
      {
        title: "Seamlessly integrate with every application.",
        description: `Cube’s <a href="https://cube.dev/integrations">integrations</a>
           and <a href="https://cube.dev/docs/rest-api">REST</a>,
           <a href="https://cube.dev/docs/backend/graphql">GraphQL</a>,
           and <a href="https://cube.dev/docs/backend/sql">Postgres-compliant
               SQL APIs</a> ensure compatibility with every
           modern data stack. Plus, reduce development context
           switching: manage data models in your favorite
           language—Python, JavaScript, or YAML—and see them
           visually with <a href="https://cube.dev/docs/cloud/workspace/cube-ide/#data-graph">Data
               Graph</a>.`,
        img: "https://cube.dev/images/product/caching-feature-1.svg",
      },
      {
        title: "Reduce time-to-value with development tools",
        description: `Cube Cloud enables team collaboration and rapid data
           model prototyping with a development toolkit that
           includes <a href="https://cube.dev/docs/dev-tools/dev-playground">Playground</a>,
           <a href="https://cube.dev/docs/cloud/workspace/cube-ide">Data
               Model IDE</a>, <a href="https://cube.dev/docs/cloud/workspace/cube-ide#development-mode">Development
                   Mode</a>, <a href="https://cube.dev/docs/cloud/workspace/cube-ide#data-graph">Data
                       Graph</a>, and more. Reduce time authoring and
           debugging the data model—and more time with your
           actionable insights.`,
        img: "https://cube.dev/images/product/caching-feature-2.svg",
      },
      {
        title: "Orchestrate your caching layer once—and only once.",
        description: `Since Cube is a middleware that sits between your data source and applications, it’s upstream of every data app your organization uses. Therefore, its position in the data pipeline means that you don’t need to manually orchestrate caching for every application, saving you effort and ensuring that your applications are uniformly performant and coordinated. And, Cube's{' '}
           <a href="https://cube.dev/docs/orchestration-api#orchestration-api">Orchestration API</a> makes connecting your orchestration tools a matter of minutes.`,
        img: "https://cube.dev/images/product/caching.svg",
        orchestrateApi: true,
      },
    ],
    mainTitle = "Define your metrics upstack to unify your team’s insights.",
    description = `Defining
mission-critical business metrics inconsistently leads to
miscommunication, misalignment, and error. Keep everyone
on the same page with data modeling upstream of every app.`,
  }
) => {
  return (
    <div className="relative z-50">
      <div>
        <div id="cube-ui-kit-root" className="sc-lllmON iRvEDh">
          <section>
            <div className="sc-bYMpWt fErNNo">
              <div className="Product_ProductPages__backgroundWrapper__945Zw">
                <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Product_ProductPages__Section__SHAYD ProductPages__Section--header">
                  <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
                    <section className="ProductHeader_ProductHeader___JiVt">
                      <div className="ProductHeader_ProductHeader__texts__e3MaF">
                        <div className="Breadcrumbs_Breadcrumbs__DagW7 Breadcrumbs_Breadcrumbs--appearance-dark__jfWk_ ProductHeader_ProductHeader__breadcrumbs__tw6jc" />
                        <h2 className="ProductHeader_ProductHeader__title__7eo8B">{mainTitle}</h2>
                        <p className="ProductHeader_ProductHeader__description__g31s6">{description}</p>
                        <div className="ProductHeader_ProductHeader__buttons__0zKBi">
                          <a
                            target="__blank"
                            href="https://cube.dev/contact"
                            className="Button_Button__VQ4Ej getStartedButton Button--appearance-light ProductHeader_ProductHeader__button__fvePN Button_Button--cherry__FCGeq Button_Button--size-m__DGRm_"
                            style={{
                              height: "40px",
                              padding: "0 16px",
                              fontSize: "16px",
                              borderRadius: "8px",
                              flexGrow: "unset",
                              flexBasis: "unset",
                              flexShrink: "unset",
                            }}
                          >
                            INSCREVER-SE
                          </a>
                        </div>
                      </div>
                      <div class="ProductHeader_ProductHeader__media__QZkzf">
                        <div class="HeroAnimation_HeroAnimation__llWWz">
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG HeroAnimation_HeroAnimation__card--current__IRhY9"
                            style={{
                              background: "linear-gradient(318deg, var(--card-caching-gradient-1), var(--card-caching-gradient-2) 75%)",
                              backgroundColor: "var(--card-caching-bg)",
                              border: "1px solid var(--card-caching-border)",
                            }}
                          >
                            <img src="/card-icons/fat.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Caching</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--card-modeling-gradient-1), var(--card-modeling-gradient-2))",
                              border: "1px solid var(--card-modeling-border)",
                              backgroundColor: "var(--card-modeling-bg)",
                            }}
                          >
                            <img src="/card-icons/microbes.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u sm:!w-[3.5vw] xl:!w-12" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Data Modeling</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--card-access-gradient-1), var(--card-access-gradient-2))",
                              backgroundColor: "var(--card-access-bg)",
                              border: "1px solid var(--card-access-border)",
                            }}
                          >
                            <img src="/card-icons/nutrition.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u sm:!w-[3.5vw] xl:!w-12" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Access Control</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--card-api-gradient-1), var(--card-api-gradient-2) 75%)",
                              backgroundColor: "var(--card-api-bg)",
                              border: "1px solid var(--card-api-border)",
                            }}
                          >
                            <img src="/card-icons/sugar.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">APIs</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div>
                  <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD">
                    <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
                      <section className="ProductFeatureList_ProductFeatureList__zCe8z">
                        {Sections.map((item) =>
                          !item.canvas && item.orchestrateApi === false ? (
                            <article key={item?.title} className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                              <div key={item?.title} className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                <div className="Animation_Animation__IWnaO ProductFeatureCard_ProductFeatureCard__animation__OIH1L">
                                  <div className="Animation_Animation__player__I38FQ">
                                    <img width={496} height={400} className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={item?.img} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{item?.title}</h2>
                                <div>
                                  <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                </div>
                              </div>
                            </article>
                          ) : item.orchestrateApi ? null : (
                            <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                              <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={item?.img} alt="" />
                              </div>
                              <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{item?.title}</h2>
                                <div>
                                  <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                </div>
                              </div>
                            </article>
                          )
                        )}
                      </section>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {Sections.map((item) =>
                      item.orchestrateApi === true ? (
                        <div
                          key={item?.title}
                          style={{
                            "--section_padding_top": "0px",
                            "--section_padding_bottom": "var(--space-4xl)",
                          }}
                          className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-2xl__hlbVN Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD Product_ProductPages__Section--lastFeatureSection___N3Ho Product_ProductPages__Section--animated__q_VW3 Product_ProductPages__Section--inView__V2KYi"
                          bis_skin_checked="1"
                        >
                          <div
                            className="Page_SectionHeader__eXcwE Product_ProductPages__featureHeader__4hJz7 Page_SectionHeader--appearance-dark__hGYCv Page_SectionHeader--level-h1__TlC8a"
                            bis_skin_checked="1"
                          >
                            <h2 className="Page_SectionHeader__title__tIV1t">{item?.title}</h2>
                          </div>
                          <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-xs__Jdh_4 Section--gap-none" bis_skin_checked="1">
                            <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                          </div>
                          <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none" bis_skin_checked="1">
                            <img className="Product_ProductPages__bigMedia_img_mobile__Q3C92" src={item?.img} alt="" />
                            <img className="Product_ProductPages__bigMedia_img__sMU7n" src={item?.img} alt="" />
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
          <img className="Product_ProductPages__subSectionBigMedia_img__eZIhg" src="./Data Modeling_files/views-diagram-transparent-back.png" alt="" />
        </div>
      </div>

      {props.children}
      <section id="shadow-host-companion">
        <template shadowrootmode="open" />
      </section>
    </div>
  );
};
