import { Prisma } from "@prisma/client";

export const posts: Prisma.PostCreateInput[] = [
  {
    title: "GL Bajaj Fraud",
    slug: "gl-bajaj-fraud",
    content:
      "GL Bajaj College is Fraud College, They collect from money in Mathura Branch and invest this money in his Noida Branch. And their people are fool they suppose to be a Software Engineer. But it's not true my friend they all are just cheap workers just like anyone working in sales department.",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "john@example.com",
        },
        create: {
          email: "john@example.com",
          hashedPassword: "chsdbmcnbdsmc531332csdc",
        },
      },
    },
  },
  {
    title: "Corruption in Government",
    slug: "corruption-in-government",
    content:
      "Corruption in government is not only in the government itself but also in the people. Government employees are cheap workers who don't give their fair share of money to the people. They just collect money from the people and use it for their own benefit.",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "john@example.com",
        },
        create: {
          email: "john@example.com",
          hashedPassword: "chsdbmcnbdsmc531332csdc",
        },
      },
    },
  },
  {
    title: "Fake Degree from GL Bajaj",
    slug: "fake-degree-from-gl-bajaj",
    content:
      "They only just gives fake degress to his/her students. And the people live in Noida GL Bajaj Branch. They all are creepy except few ones like mine Friend Pradhumn Kumar Mishra. And Everyone are useless.",
    author: {
      connectOrCreate: {
        where: {
          email: "john@example.com",
        },
        create: {
          email: "john@example.com",
          hashedPassword: "chsdbmcnbdsmc531332csdc",
        },
      },
    },
  },
];
