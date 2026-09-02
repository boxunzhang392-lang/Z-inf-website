import type { StaticImageData } from "next/image";
import projectResearch from "@/assets/media/project-research.png";
import projectEducation from "@/assets/media/project-education.png";
import projectAgent from "@/assets/media/project-agent.png";
import journeyValidate from "@/assets/media/journey-validate.png";
import journeyIterate from "@/assets/media/journey-iterate.png";
import journeyIncubate from "@/assets/media/journey-incubate.png";
import storyHackathonNanjing from "@/assets/media/story-hackathon-nanjing.png";
import storyHighSchoolForum from "@/assets/media/story-high-school-forum.png";
import storyDemoDay from "@/assets/media/story-demo-day.png";
import storyWaicAfterParty from "@/assets/media/story-waic-after-party.png";
import storyAdventureX from "@/assets/media/story-adventure-x.png";
import storyYouthMeetup from "@/assets/media/story-youth-meetup.png";
import participationStudents from "@/assets/media/participation-students.png";
import participationSchools from "@/assets/media/participation-schools.png";
import participationPartners from "@/assets/media/participation-partners.png";

export type MediaItem = {
  src: StaticImageData;
  alt: string;
  placeholder: true;
};

const researchMedia: MediaItem = {
  src: projectResearch,
  alt: "合成占位图：青年 AI Builder 讨论基础科研项目，发布前请替换为经授权的真实项目照片",
  placeholder: true,
};

const educationMedia: MediaItem = {
  src: projectEducation,
  alt: "合成占位图：高中生测试教育 AI 原型，发布前请替换为经授权的真实项目照片",
  placeholder: true,
};

const agentMedia: MediaItem = {
  src: projectAgent,
  alt: "合成占位图：青年团队测试运动视觉 Agent，发布前请替换为经授权的真实项目照片",
  placeholder: true,
};

const journeyValidateMedia: MediaItem = {
  src: journeyValidate,
  alt: "合成占位图：青年 AI Builder 在 Demo Day 现场验证项目原型，发布前请替换为经授权的真实活动照片",
  placeholder: true,
};

const journeyIterateMedia: MediaItem = {
  src: journeyIterate,
  alt: "合成占位图：青年团队在工作室反复测试并记录项目迭代，发布前请替换为经授权的真实项目照片",
  placeholder: true,
};

const journeyIncubateMedia: MediaItem = {
  src: journeyIncubate,
  alt: "合成占位图：青年项目团队与技术导师评审早期原型，发布前请替换为经授权的真实项目照片",
  placeholder: true,
};

const storyHackathonNanjingMedia: MediaItem = {
  src: storyHackathonNanjing,
  alt: "合成占位图：青年团队在夜间黑客松中协作开发，发布前请替换为经授权的南京活动照片",
  placeholder: true,
};

const storyHighSchoolForumMedia: MediaItem = {
  src: storyHighSchoolForum,
  alt: "合成占位图：高中生在校园论坛分享 AI 项目，发布前请替换为经授权的真实活动照片",
  placeholder: true,
};

const storyDemoDayMedia: MediaItem = {
  src: storyDemoDay,
  alt: "合成占位图：青年 Builder 在 Demo Day 展示并接受项目反馈，发布前请替换为经授权的真实活动照片",
  placeholder: true,
};

const storyWaicAfterPartyMedia: MediaItem = {
  src: storyWaicAfterParty,
  alt: "合成占位图：青年 AI Builder 在线下活动后交流，发布前请替换为经授权的 WAIC After Party 照片",
  placeholder: true,
};

const storyAdventureXMedia: MediaItem = {
  src: storyAdventureX,
  alt: "合成占位图：青年团队在黑客松后围绕原型交流，发布前请替换为经授权的 Adventure X 活动照片",
  placeholder: true,
};

const storyYouthMeetupMedia: MediaItem = {
  src: storyYouthMeetup,
  alt: "合成占位图：青年 AI Builder 在小型 Meetup 中围坐讨论，发布前请替换为经授权的真实活动照片",
  placeholder: true,
};

const participationStudentsMedia: MediaItem = {
  src: participationStudents,
  alt: "合成占位图：高中生加入协作工作坊并共同测试原型，发布前请替换为经授权的真实社群照片",
  placeholder: true,
};

const participationSchoolsMedia: MediaItem = {
  src: participationSchools,
  alt: "合成占位图：教师与学生共同搭建校园 AI 实践空间，发布前请替换为经授权的真实学校合作照片",
  placeholder: true,
};

const participationPartnersMedia: MediaItem = {
  src: participationPartners,
  alt: "合成占位图：技术导师与青年团队共同评审项目原型，发布前请替换为经授权的真实合作照片",
  placeholder: true,
};

export const journeyStages = [
  { number: "01", action: "DISCOVER", title: "发现人才", description: "从校园、社群与开放活动中，发现正在动手创造的青年 AI Builder。", media: researchMedia },
  { number: "02", action: "TRAIN", title: "系统训练", description: "以科研训练、技术实践与真实问题，建立可持续的创造能力。", media: educationMedia },
  { number: "03", action: "CREATE", title: "组队创造", description: "让不同学科、能力与兴趣的人组成团队，把想法变成可以协作的项目。", media: agentMedia },
  { number: "04", action: "VALIDATE", title: "项目验证", description: "在黑客松、校园场景和 Demo Day 中，让原型接受真实使用与反馈。", media: journeyValidateMedia },
  { number: "05", action: "ITERATE", title: "持续迭代", description: "通过部署、评测、数据与算力支持，让一次成果成为持续生长的项目。", media: journeyIterateMedia },
  { number: "06", action: "INCUBATE", title: "早期孵化", description: "连接导师、技术与行业资源，支持有潜力的团队走向更广阔的真实世界。", media: journeyIncubateMedia },
] as const;

export const projects = [
  {
    slug: "foundation-research",
    name: "基础科研项目",
    description: "围绕模型理解、评测或数据问题，由青年研究者推进的探索性工作。",
    direction: "AI 基础科研",
    stage: "项目信息待补充",
    media: researchMedia,
  },
  {
    slug: "education-ai",
    name: "教育 AI 项目",
    description: "从真实学习场景出发，将 AI 原型变成可被验证、被使用的工具。",
    direction: "AI + 教育",
    stage: "项目信息待补充",
    media: educationMedia,
  },
  {
    slug: "sport-agent",
    name: "运动 Agent 项目",
    description: "把感知、智能体与运动场景连接起来，探索具身数据与实时反馈。",
    direction: "AI + 体育 / Agent",
    stage: "项目信息待补充",
    media: agentMedia,
  },
] as const;

export const stories = [
  { name: "南京 05 后黑客松", date: "日期待确认", city: "南京", outcome: "项目成果待补充", media: storyHackathonNanjingMedia },
  { name: "高中生 AI 论坛", date: "日期待确认", city: "城市待确认", outcome: "活动成果待补充", media: storyHighSchoolForumMedia },
  { name: "AI Demo Day", date: "日期待确认", city: "城市待确认", outcome: "Demo 信息待补充", media: storyDemoDayMedia },
  { name: "WAIC After Party", date: "日期待确认", city: "上海", outcome: "活动成果待补充", media: storyWaicAfterPartyMedia },
  { name: "Adventure X After Party", date: "日期待确认", city: "城市待确认", outcome: "活动成果待补充", media: storyAdventureXMedia },
  { name: "青年 AI Meetup", date: "日期待确认", city: "城市待确认", outcome: "项目成果待补充", media: storyYouthMeetupMedia },
] as const;

export const ecosystem = {
  entry: ["学校合作", "科研训练", "青年社群", "黑客松"],
  assets: ["青年 AI Builder", "项目", "团队", "Demo", "论文", "产品"],
} as const;

export const participation = [
  {
    title: "For Students",
    description: "加入社群、参与科研、报名黑客松、提交 AI 项目。",
    action: "Join Zinf",
    href: "/join/students",
    media: participationStudentsMedia,
  },
  {
    title: "For Schools",
    description: "共建 AI Lab、举办校园论坛、定制学校 AI 创新方案。",
    action: "Work with Zinf",
    href: "/join/schools",
    media: participationSchoolsMedia,
  },
  {
    title: "For Partners",
    description: "成为导师，提供算力、技术、命题、行业资源或孵化机会。",
    action: "Partner with Zinf",
    href: "/join/partners",
    media: participationPartnersMedia,
  },
] as const;

export const footerContent = {
  email: "联系邮箱待补充",
  socials: ["微信公众号待补充", "小红书待补充", "LinkedIn 待补充"],
  legal: ["隐私政策待补充", "用户协议待补充", "未成年人保护说明待补充", "备案信息待补充"],
} as const;
