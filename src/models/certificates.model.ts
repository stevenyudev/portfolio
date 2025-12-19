import type { IImageAttr } from './imageAttr.model';
import SemrushBastianGrimmYellow from '@/assets/course-thumbnails/semrush/semrush-bastian-grimm-yellow.webp';
import SemrushBrianDeanGreen from '@/assets/course-thumbnails/semrush/semrush-brian-dean-green.webp';
import SemrushBrianDeanPink from '@/assets/course-thumbnails/semrush/semrush-brian-dean-pink.webp';
import SemrushCrystalCarterPink from '@/assets/course-thumbnails/semrush/semrush-crystal-carter-pink.webp';
import SemrushGregGiffordPink from '@/assets/course-thumbnails/semrush/semrush-greg-gifford-pink.webp';
import SemrushKevinIndigPink from '@/assets/course-thumbnails/semrush/semrush-kevin-indig-pink.webp';
import SemrushLogo from '@/assets/semrush-logo.webp';
import SemrushMichaelOlayePurple from '@/assets/course-thumbnails/semrush/semrush-michael-olaye-purple.webp';
import SemrushWesMcDowellGreen from '@/assets/course-thumbnails/semrush/semrush-wes-mcdowell-green.webp';
import UdemyAstroThumbnail from '@/assets/course-thumbnails/udemy/udemy-astro-thumbnail.webp';
import UdemyCSSDrawingThumbnail from '@/assets/course-thumbnails/udemy/udemy-css-drawing-course-thumbnail.webp';
import UdemyCleanCodeThumbnail from '@/assets/course-thumbnails/udemy/udemy-clean-code-course-thumbnail.webp';
import UdemyDesignRulesThumbnail from '@/assets/course-thumbnails/udemy/udemy-design-rules-thumbnail.webp';
import UdemyGSAPAnimationThumbnail from '@/assets/course-thumbnails/udemy/udemy-gsap-animation-masterclass.webp';
import UdemyGatsbyThumbnail from '@/assets/course-thumbnails/udemy/udemy-gatsby-course-thumbnail.webp';
import UdemyGitHubActionsThumbnail from '@/assets/course-thumbnails/udemy/udemy-github-actions-course-thumbnail.webp';
import UdemyLogo from '@/assets/udemy-logo.webp';
import UdemyReactThumbnail from '@/assets/course-thumbnails/udemy/udemy-react-course-thumbnail.webp';
import UdemyTanStackThumbnail from '@/assets/course-thumbnails/udemy/udemy-tanstack-thumbnail.webp';
import UdemyTypeScriptThumbnail from '@/assets/course-thumbnails/udemy/udemy-typescript-course-thumbnail.webp';
import UdemyUnitTestingThumbnail from '@/assets/course-thumbnails/udemy/udemy-javascript-unit-testing-thumbnail.webp';

// import SemrushDMCYellow from "@/assets/course-thumbnails/semrush/semrush-digital-marketing-certification-yellow.webp";

export interface ICertificateGroup {
  group: string;
  certificates: ICertificate[];
}

export interface ICertificate {
  key: string;
  title: string;
  subtitle: string;
  provider: string;
  thumbnail: IImageAttr;
  courseLink: string;
  certificateLink: string;
  platform: keyof ICertificatePlatforms;
}

export interface ICertificatePlatforms {
  udemy: IImageAttr;
  semrush: IImageAttr;
}

export const certificatePlatforms: ICertificatePlatforms = {
  udemy: {
    src: UdemyLogo,
    alt: 'Udemy logo',
  },
  semrush: {
    src: SemrushLogo,
    alt: 'Semrush logo',
  },
};

export const certificateGroups: ICertificateGroup[] = [
  {
    group: 'Technical Courses',
    certificates: [
      {
        key: 'react-the-complete-guide',
        title: 'React - The Complete Guide',
        subtitle: '(incl Hooks, React Router, Redux)',
        provider: 'Academind, Maximilian Schwarzmüller',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-c262f39a-769e-4bb5-87db-f53f8a5b09e6/',
        thumbnail: {
          src: UdemyReactThumbnail,
          alt: 'Magnifying glass hovering over the React logo',
        },
      },
      {
        key: 'understanding-typescript',
        title: 'Understanding TypeScript',
        subtitle: '',
        provider: 'Academind, Maximilian Schwarzmüller',
        platform: 'udemy',
        courseLink: 'https://www.udemy.com/course/understanding-typescript/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-d7b161ef-1235-4b20-a07f-d72b539deba2/',
        thumbnail: {
          src: UdemyTypeScriptThumbnail,
          alt: 'TypeScript logo and braces over blue cityscape',
        },
      },
      {
        key: 'gatsby-js',
        title: 'Gatsby.js 3 Tutorial and Projects Course',
        subtitle: '',
        provider: 'Jānis Smilga',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/gatsby-tutorial-and-projects-course/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-89468721-b9a7-4cfa-875f-77134ea9f5d6/',
        thumbnail: {
          src: UdemyGatsbyThumbnail,
          alt: 'Gatsby.js logo on a balck and purple background',
        },
      },
      {
        key: 'astro-js',
        title: 'AstroJS 101:',
        subtitle: 'Build Blazing Fast Frondends!',
        provider: 'Ohans Emmanuel',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/astrojs-101-build-blazing-fast-frontends/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-2a4eec2f-e80a-4cce-9e5f-8e07c437a726/',
        thumbnail: {
          src: UdemyAstroThumbnail,
          alt: 'Astro logo on light blue background',
        },
      },
      {
        key: 'tanstack-start',
        title: 'TanStack Start',
        subtitle: 'The NEW Full-Stack React JS Framework',
        provider: 'WebDevEducation, Tom Phillips',
        platform: 'udemy',
        courseLink: 'https://www.udemy.com/course/tanstack-start/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-7c2d6654-41af-4531-bbba-ed012ddae59d/',
        thumbnail: {
          src: UdemyTanStackThumbnail,
          alt: 'TanStack written in a blue-red gradient with a palm tree in a circle underneath',
        },
      },
      {
        key: 'creative-css-drawing',
        title: 'Creative CSS Drawing Course',
        subtitle: 'Make Art With CSS',
        provider: 'Ahmed Sadek',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/creative-css-drawing-course-make-art-with-css/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-71a67d5e-3224-4cd1-8ab1-73db3a828e39/',
        thumbnail: {
          src: UdemyCSSDrawingThumbnail,
          alt: 'CSS drawings of Homer Simpson, watermelon and coffee mug',
        },
      },
      {
        key: 'gsap-animation-masterclass',
        title: 'GSAP Animation Masterclass',
        subtitle: 'Master Web Animations With Ease',
        provider: 'Jayanta Sarkar',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/gsap-animation-masterclass/?couponCode=PMNVD2525',
        certificateLink:
          'https://www.udemy.com/certificate/UC-51b64cc4-c003-4d78-a3a5-35efdf1b2d47/',
        thumbnail: {
          src: UdemyGSAPAnimationThumbnail,
          alt: 'Super hero wearing one green sock representing GSAP',
        },
      },
      {
        key: 'github-actions',
        title: 'GitHub Actions',
        subtitle: 'The Complete Guide',
        provider: 'Academind, Maximilian Schwarzmüller',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/github-actions-the-complete-guide/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-c2d37ef0-b0ab-497d-b56c-da2da0333a4b/',
        thumbnail: {
          src: UdemyGitHubActionsThumbnail,
          alt: 'GitHub logo on monitor with various other icons displayed in a line across the thumbnail',
        },
      },
      {
        key: 'clean-code',
        title: 'Clean Code',
        subtitle: '',
        provider: 'Academind, Maximilian Schwarzmüller',
        platform: 'udemy',
        courseLink: 'https://www.udemy.com/course/writing-clean-code/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-b4ce8cf5-e03e-4ddd-9203-d81fdfaf4b05/',
        thumbnail: {
          src: UdemyCleanCodeThumbnail,
          alt: 'Yellow braces on a black background with diamonds in the corner',
        },
      },
      {
        key: 'unit-testing',
        title: 'JavaScript Unit Testing',
        subtitle: 'The Practical Guide',
        provider: 'Academind, Maximilian Schwarzmüller',
        platform: 'udemy',
        courseLink:
          'https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-cf6e0418-b540-4c37-9b86-7f70590fb85a/',
        thumbnail: {
          src: UdemyUnitTestingThumbnail,
          alt: 'JavaScript logo in yellow with yellow clipboard and beaker icons',
        },
      },
      {
        key: 'design-rules',
        title: 'Design Rules',
        subtitle: 'Principles + Practices for Great UI Design',
        provider: 'Joe Natoli',
        platform: 'udemy',
        courseLink: 'https://www.udemy.com/course/design-rules/',
        certificateLink:
          'https://www.udemy.com/certificate/UC-4bd2b535-0b38-4fa3-a607-ef8e9e678f72/',
        thumbnail: {
          src: UdemyDesignRulesThumbnail,
          alt: 'Laptop showing a man giving a lecture with a piece of paper and pen next to it',
        },
      },
    ],
  },
  {
    group: 'SEO Courses',
    certificates: [
      {
        key: 'seo-crashcourse',
        title: 'Semrush SEO Crash Course',
        subtitle: '',
        provider: 'Brian Dean',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/semrush/semrush-seo-crash-course-with-brian-dean/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/3bb3e7c3c3/conor-crutchley_2.pdf',
        thumbnail: {
          src: SemrushBrianDeanPink,
          alt: 'Brian Dean from Semrush on a pink background',
        },
      },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/on-page-seo-essentials-with-semrush/
      // {
      //   key: 'on-page-and-technical-seo',
      //   title: 'Navigating On-Page and Technical SEO',
      //   subtitle: 'A Semrush Deep Dive',
      //   provider: '',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/on-page-and-technical-seo-deep-dive/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/21de12546a/conor-crutchley_1.pdf',
      //   thumbnail: {
      //     src: SemrushDMCYellow,
      //     alt: 'Semrush digital marketing certification logo on a yellow background',
      //   },
      // },
      {
        key: 'technical-seo',
        title: 'Technical SEO course',
        subtitle: '',
        provider: 'Bastian Grimm',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/technical-seo-course-with-bastian-grimm/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/26832e9b0f/conor-crutchley_2.pdf',
        thumbnail: {
          src: SemrushBastianGrimmYellow,
          alt: 'Bastian Grimm from Semrush on a yellow background',
        },
      },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/seo-essentials-with-semrush/
      // {
      //   key: 'mobile-seo',
      //   title: 'Mobile SEO Course',
      //   subtitle: '',
      //   provider: 'Greg Gifford',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/mobile-seo-course-with-greg-gifford/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/4657374d39/conor-crutchley_2.pdf',
      //   thumbnail: {
      //     src: '',
      //     alt: '',
      //   },
      // },
      {
        key: 'craft-of-mobile-seo',
        title: 'How to Optimize for Mobile',
        subtitle: 'The CRAFT of Mobile SEO',
        provider: 'Crystal Carter',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/craft-of-mobile-seo/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/d82d264c5a/conor-crutchley_15.pdf',
        thumbnail: {
          src: SemrushCrystalCarterPink,
          alt: 'Crystal Carter from Semrush on a pink background',
        },
      },
      {
        key: 'local-seo',
        title: 'Local SEO Course',
        subtitle: '',
        provider: 'Greg Gifford',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/local-seo-course-with-greg-gifford/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/88e5a1363e/conor-crutchley_1.pdf',
        thumbnail: {
          src: SemrushGregGiffordPink,
          alt: 'Greg Gifford from Semrush on a pink background',
        },
      },
      {
        key: 'outrank-competition-in-local-search',
        title: 'How to Outrank Your Competition in Local Search',
        subtitle: '',
        provider: 'Wes McDowell',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/how-to-outrank-your-competition-in-local-search/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/38fc954d38/conor-crutchley_4.pdf',
        thumbnail: {
          src: SemrushWesMcDowellGreen,
          alt: 'Wes McDowelll from Semrush on a green background',
        },
      },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/seo-essentials-with-semrush/
      // {
      //   key: 'keyword-research',
      //   title: 'Keyword Research Course',
      //   subtitle: '',
      //   provider: 'Greg Gifford',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/keyword-research-course-with-greg-gifford/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/61735ae4c2/conor-crutchley_2.pdf',
      //   thumbnail: {
      //     src: '',
      //     alt: '',
      //   },
      // },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/keyword-research-essentials-with-semrush/
      // {
      //   key: 'keyword-research-with-semrush',
      //   title: 'Keyword Research with Semrush',
      //   subtitle: 'A Step-by-Step Guide',
      //   provider: '',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/keyword-research-with-semrush-step-by-step-guide/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/3898c9a1c7/conor-crutchley_1.pdf',
      //   thumbnail: {
      //     src: '',
      //     alt: '',
      //   },
      // },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/seo-essentials-with-semrush/
      // {
      //   key: 'backlink-management',
      //   title: 'Backlink Management Course',
      //   subtitle: '',
      //   provider: 'Greg Gifford',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/backlink-management-course-with-greg-gifford/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/eafe8b2a61/conor-crutchley_2.pdf',
      //   thumbnail: {
      //     src: '',
      //     alt: '',
      //   },
      // },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/seo-essentials-with-semrush/
      // {
      //   key: 'boost-website-authority-with-link-building',
      //   title:
      //     'How to Boost Your Website&apos;s Authority Using Semrush&apos;s Link Building Tools',
      //   subtitle: '',
      //   provider: '',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/boost-website-authority-with-semrush-link-building-tools/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/9d7eda687b/conor-crutchley_1.pdf',
      //   thumbnail: {
      //     src: '',
      //     alt: '',
      //   },
      // },
      {
        key: 'content-led-seo',
        title: 'Content-Led SEO',
        subtitle: '',
        provider: 'Brian Dean',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/content-led-seo-course-with-brian-dean/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/783de16fcf/conor-crutchley_2.pdf',
        thumbnail: {
          src: SemrushBrianDeanGreen,
          alt: 'Brian Dean from Semrush on a green background',
        },
      },
      {
        key: 'ai-for-marketing',
        title: 'Become an AI-Powered Marketer',
        subtitle: '',
        provider: 'Michael Olaye',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/ai-for-marketing-course/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/0a96dfac05/conor-crutchley_26.pdf',
        thumbnail: {
          src: SemrushMichaelOlayePurple,
          alt: 'Michael Olaye from Semrush on a purple background',
        },
      },
      {
        key: 'seo-strategy-for-in-house-marketers',
        title: 'Crafting a Winning SEO Strategy',
        subtitle: 'A Guide for In-House Marketers',
        provider: 'Kevin Indig',
        platform: 'semrush',
        courseLink:
          'https://www.semrush.com/academy/courses/seo-strategy-for-in-house-marketers/',
        certificateLink:
          'https://static.semrush.com/academy/certificates/f32cc094f9/conor-crutchley_17.pdf',
        thumbnail: {
          src: SemrushKevinIndigPink,
          alt: 'Kevin Indig from Semrush on a pink background',
        },
      },
      // Link to course redirects to:
      // https://www.semrush.com/academy/courses/seo-essentials-with-semrush/
      // {
      //   key: 'competitive-analysis-and-keyword-research',
      //   title:
      //     'How to Develop a Competitive Research Workflow using Semrush&apos;s SEO Toolkit',
      //   subtitle: '',
      //   provider: '',
      //   platform: 'semrush',
      //   courseLink:
      //     'https://www.semrush.com/academy/courses/competitive-analysis-and-keyword-research-course/',
      //   certificateLink:
      //     'https://static.semrush.com/academy/certificates/0e6f2d7c31/conor-crutchley_1.pdf',
      //   thumbnail: {
      //     src: '',
      //     alt: '',
      //   },
      // },
    ],
  },
];
