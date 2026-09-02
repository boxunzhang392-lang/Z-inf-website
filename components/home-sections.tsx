import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Fragment, type ReactNode } from "react";
import { ecosystem, footerContent, journeyStages, participation, projects } from "@/data/site-content";
import { ChapterPanel } from "@/components/chapter-stack";
import { Reveal } from "@/components/reveal";
import { StoryMarquee } from "@/components/story-marquee";

function SectionIndex({ children }: { children: ReactNode }) {
  return <span className="section-index" aria-hidden="true">{children}</span>;
}

type ScrubToken = {
  accent?: boolean;
  breakAfter?: boolean;
  text: string;
};

function ScrubPhrase({ className, lang, tokens }: { className: string; lang?: string; tokens: ScrubToken[] }) {
  return (
    <p className={className} data-scrub-block="" lang={lang}>
      {tokens.map((token, index) => (
        <Fragment key={`${token.text}-token-${index}`}>
          <span className="manifesto-token">
            {token.accent ? <strong>{token.text}</strong> : token.text}
          </span>
          {token.breakAfter
            ? <br />
            : index < tokens.length - 1
              ? <span className="manifesto-space" aria-hidden="true">{"\u00a0"}</span>
              : null}
        </Fragment>
      ))}
    </p>
  );
}

export function BrandManifesto() {
  return (
    <>
      <ChapterPanel order={1} tone="hero">
        <section id="about" className="manifesto manifesto-definition-page manifesto-lift-page section-shell" aria-label="Z 代表 Generation Z">
          <div className="manifesto-lift-content">
            <SectionIndex>01 / ABOUT</SectionIndex>
            <div className="manifesto-statement manifesto-scrub">
              <ScrubPhrase
                className="manifesto-display"
                tokens={[
                  { text: "Z", accent: true },
                  { text: "stands" },
                  { text: "for", breakAfter: true },
                  { text: "Generation" },
                  { text: "Z." },
                ]}
              />
              <ScrubPhrase
                className="manifesto-translation"
                lang="zh-CN"
                tokens={[
                  { text: "Z" },
                  { text: "代表" },
                  { text: "Generation Z，", breakAfter: true },
                  { text: "即" },
                  { text: "Z 世代。" },
                ]}
              />
            </div>
          </div>
        </section>
      </ChapterPanel>
      <ChapterPanel order={2} tone="hero">
        <section className="manifesto manifesto-definition-page section-shell" aria-label="inf 代表 Infinity">
          <div className="manifesto-statement manifesto-statement-reverse manifesto-scrub">
            <ScrubPhrase
              className="manifesto-display"
              tokens={[
                { text: "inf", accent: true },
                { text: "stands" },
                { text: "for", breakAfter: true },
                { text: "Infinity." },
              ]}
            />
            <ScrubPhrase
              className="manifesto-translation"
              lang="zh-CN"
              tokens={[
                { text: "inf" },
                { text: "源于" },
                { text: "Infinity，", breakAfter: true },
                { text: "代表" },
                { text: "无限可能。" },
              ]}
            />
          </div>
        </section>
      </ChapterPanel>
      <ChapterPanel order={3} tone="ink">
        <section className="manifesto manifesto-conclusion section-shell" aria-labelledby="manifesto-title">
          <Reveal className="manifesto-synthesis">
            <h2 id="manifesto-title">Zinf is the infinite potential<br />of a new generation.</h2>
            <p>Zinf 相信，Z 世代不只是 AI 的使用者，也将成为它的研究者、创造者与创业者。</p>
          </Reveal>
        </section>
      </ChapterPanel>
    </>
  );
}

export function GrowthJourney() {
  return (
    <>
      <ChapterPanel order={4} tone="surface">
        <section id="programs" className="journey journey-intro section-shell" aria-labelledby="journey-title">
          <div className="section-heading split-heading">
            <div><SectionIndex>02 / HOW ZINF WORKS</SectionIndex><h2 id="journey-title">From spark<br />to momentum.</h2></div>
            <p>一次活动不是终点。Zinf 把人才、训练、团队、项目与基础设施连接成持续成长的链路。</p>
          </div>
        </section>
      </ChapterPanel>

      {journeyStages.map((stage, index) => {
        const titleCharacters = Array.from(stage.title);
        const titleMidpoint = Math.ceil(titleCharacters.length / 2);
        const titleLeft = titleCharacters.slice(0, titleMidpoint).join("");
        const titleRight = titleCharacters.slice(titleMidpoint).join("");

        return (
          <ChapterPanel order={5 + index} scrollMode="converge" tone="surface" key={stage.number}>
            <section className="journey journey-stage-page journey-converge-page section-shell" aria-labelledby={`journey-stage-${stage.number}`}>
              <article className="journey-converge-stage">
                <span className="journey-converge-index" aria-hidden="true">{stage.number} / {stage.action}</span>
                <figure className="journey-media journey-converge-media">
                  <Image src={stage.media.src} alt={stage.media.alt} fill sizes="(max-width: 767px) 52vw, 24vw" />
                  <figcaption>影像占位，待替换</figcaption>
                </figure>
                <h3 className="journey-converge-title" id={`journey-stage-${stage.number}`}>
                  <span className="journey-converge-left">{titleLeft}</span>
                  <span className="journey-converge-right">{titleRight}</span>
                </h3>
                <div className="journey-converge-copy">
                  <p>{stage.description}</p>
                  <span aria-hidden="true">SCROLL TO CONNECT</span>
                </div>
              </article>
            </section>
          </ChapterPanel>
        );
      })}
    </>
  );
}

export function ProjectShowcase() {
  return (
    <>
      <ChapterPanel order={11} tone="ink">
        <section id="projects" className="projects projects-intro section-shell" aria-labelledby="projects-title">
          <div className="section-heading project-heading">
            <div><SectionIndex>03 / SELECTED PROJECTS</SectionIndex><h2 id="projects-title">Built by the<br />next generation.</h2></div>
            <p>不止学习 AI，我们真正创造 AI。</p>
          </div>
        </section>
      </ChapterPanel>

      {projects.map((project, index) => (
        <ChapterPanel order={12 + index} tone="ink" key={project.slug}>
          <section className="projects project-page section-shell" aria-labelledby={`project-${project.slug}`}>
            <div className="project-list project-list-single">
              <Reveal as="article" className={`project-feature project-${index + 1}`}>
                <div className="project-image-wrap">
                  <Image src={project.media.src} alt={project.media.alt} fill sizes={index === 2 ? "100vw" : "(max-width: 767px) 100vw, 60vw"} />
                  <span className="media-note">SYNTHETIC PLACEHOLDER</span>
                </div>
                <div className="project-info">
                  <div><span>{project.direction}</span><h3 id={`project-${project.slug}`}>{project.name}</h3></div>
                  <p>{project.description}</p>
                  <div className="project-meta"><span>{project.stage}</span><button type="button" disabled title="项目详情待补充">查看项目 <ArrowUpRight size={16} /></button></div>
                </div>
              </Reveal>
            </div>
          </section>
        </ChapterPanel>
      ))}
    </>
  );
}

export function StoryWall() {
  return (
    <>
      <ChapterPanel order={15} tone="surface">
        <section id="story" className="story-wall story-intro section-shell" aria-labelledby="story-title">
          <div className="section-heading split-heading">
            <div><SectionIndex>04 / STORY</SectionIndex><h2 id="story-title">Story<br />wall.</h2></div>
            <p>一面持续生长的故事墙，记录从校园论坛到 Demo Day，年轻创造者相遇、组队、试错，并把作品带入真实世界。</p>
          </div>
        </section>
      </ChapterPanel>
      <ChapterPanel order={16} tone="surface">
        <section className="story-wall story-gallery-page section-shell" aria-label="Zinf 故事墙">
          <StoryMarquee />
        </section>
      </ChapterPanel>
    </>
  );
}

export function EcosystemMap() {
  return (
    <>
      <ChapterPanel order={17} tone="ink">
        <section className="ecosystem ecosystem-intro section-shell" aria-labelledby="ecosystem-title">
          <div className="section-heading split-heading">
            <div><SectionIndex>05 / ZINF ECOSYSTEM</SectionIndex><h2 id="ecosystem-title">People meet.<br />Projects begin.</h2></div>
            <p>学校合作、科研训练、青年社群与黑客松带来相遇；Zinf 让年轻人组队，把想法推进为真实的项目、Demo、论文与产品。</p>
          </div>
        </section>
      </ChapterPanel>
      <ChapterPanel order={18} tone="ink">
        <section className="ecosystem ecosystem-map-page section-shell" aria-label="Zinf 生态闭环关系图">
          <Reveal className="ecosystem-flow">
            <div className="ecosystem-field ecosystem-entry">
              <div className="ecosystem-field-heading">
                <h3>发现入口</h3>
                <p>WHERE WE MEET</p>
              </div>
              <ol className="ecosystem-entry-list">
                {ecosystem.entry.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>
                ))}
              </ol>
            </div>

            <div className="ecosystem-core" aria-label="Zinf 连接发现入口与青年项目">
              <span>CONNECT</span>
              <strong>Zinf</strong>
              <ArrowRight size={24} aria-hidden="true" />
            </div>

            <div className="ecosystem-field ecosystem-assets">
              <div className="ecosystem-field-heading">
                <h3>青年与项目</h3>
                <p>WHO &amp; WHAT GROWS</p>
              </div>
              <ul className="ecosystem-asset-list">
                {ecosystem.assets.map((item, index) => (
                  <li key={item}><span>{String(ecosystem.entry.length + index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <p className="ecosystem-caption">DISCOVER / CONNECT / CREATE / GROW</p>
        </section>
      </ChapterPanel>
    </>
  );
}

export function ParticipationPaths() {
  return (
    <>
      <ChapterPanel order={19} tone="surface">
        <section id="join" className="participation participation-intro" aria-labelledby="participation-title">
          <div className="section-shell participation-heading">
            <SectionIndex>06 / TAKE PART</SectionIndex>
            <h2 id="participation-title">Find your way in.</h2>
          </div>
        </section>
      </ChapterPanel>

      {participation.map((path, index) => (
        <ChapterPanel order={20 + index} tone="surface" key={path.title}>
          <section className="participation path-page" aria-labelledby={`path-${index + 1}`}>
            <Reveal as="article" className="path-panel">
              <Image src={path.media.src} alt="" fill sizes="100vw" aria-hidden="true" />
              <div className="path-scrim" />
              <span className="path-number">0{index + 1}</span>
              <div className="path-copy"><h3 id={`path-${index + 1}`}>{path.title}</h3><p>{path.description}</p></div>
              <Link className="path-action" href={path.href} aria-label={`${path.action}：进入独立页面`}>
                <span>{path.action}<small>进入页面</small></span><ArrowUpRight size={20} />
              </Link>
            </Reveal>
          </section>
        </ChapterPanel>
      ))}
    </>
  );
}

export function ClosingCta() {
  return (
    <ChapterPanel order={23} tone="ink">
      <section className="closing section-shell" aria-labelledby="closing-title">
        <Reveal><h2 id="closing-title">BUILD<br />WHAT’S NEXT.</h2></Reveal>
        <div className="closing-row">
          <p>Join the generation shaping the future of AI.</p>
          <div>
            <button className="primary-link" type="button" disabled title="加入入口待正式开放">Join Zinf <small>待开放</small><ArrowUpRight size={18} /></button>
            <button className="text-link" type="button" disabled title="合作入口待正式开放">Work with Zinf <small>待开放</small><ArrowUpRight size={18} /></button>
          </div>
        </div>
      </section>
    </ChapterPanel>
  );
}

export function SiteFooter() {
  return (
    <ChapterPanel order={24} tone="footer">
      <footer id="contact" className="site-footer section-shell">
        <div className="footer-main"><a className="footer-brand" href="#top">Zinf</a><p>面向 AI 时代的青年项目源与早期孵化平台。</p></div>
        <div className="footer-grid">
          <div><h2>Contact</h2><p>{footerContent.email}</p></div>
          <div><h2>Social</h2>{footerContent.socials.map((item) => <p key={item}>{item}</p>)}</div>
          <div className="qr-placeholder" aria-label="微信公众号或社群二维码待替换"><span>QR</span><small>待替换</small></div>
        </div>
        <div className="footer-bottom"><p>© Zinf. 内容与备案信息待确认。</p><div>{footerContent.legal.map((item) => <span key={item}>{item}</span>)}</div></div>
      </footer>
    </ChapterPanel>
  );
}
