import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Saravanan",
  lastName: "R",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Devoleper",
  avatar: "/images/avatar.jpg",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about devolepment and share thoughts on the intersection of
      creativity and engineering on Medium.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saravanan7777",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saravanan-r-1351ba257/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:saravanan2003cr7@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Devoleper</>,
  subline: (
    <>
      I'm Saravanan, a Computer Science graduate with a strong foundation in software development and problem-solving skills, placed at <InlineCode>Accenture</InlineCode>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I'm passionate about full-stack development, creating seamless applications from frontend to backend. I’m also deeply interested in AI, exploring how it can enhance user experiences and automate tasks. I love combining these two fields to build intelligent, scalable systems.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "University",
    institutions: [
      {
        name: "Amrita Vishwa Vidyapeetham",
        description: <>I completed my degree in Computer Science Engineering, graduating with a CGPA of 9.58. My academic journey equipped me with strong technical skills and a deep understanding of computer science principles.</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Django",
        description: <> Created robust backend systems and REST APIs using Django with built-in admin and authentication features.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Next.js",
        description: <>Developed full-stack web applications using Next.js, leveraging built-in routing, SSR, and API routes. </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Tailwind css",
        description: <>Styled responsive and modern user interfaces rapidly using utility-first Tailwind CSS framework.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Relational Database",
        description: <>Designed and managed normalized database schemas using PostgreSQL.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Python For ML",
        description: <>Built and trained machine learning models using Python libraries like scikit-learn, pandas, and NumPy.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Blog Articles",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
