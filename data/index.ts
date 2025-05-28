export const teamMembers = [
  {
    id: 1,
    name: "Marley",
    role: "Branding Lead",
    image: "/Brandidentity.jpg",
    instagram: "https://www.instagram.com/marlee_me_/profilecard/?igsh=MWpheDlpajQ3OTl1OA==",
    linkedin: "https://www.linkedin.com/in/marley-ogwe-00162a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Dumto",
    role: "Software Team Lead",
    image: "/dumto.jpeg",
    instagram: "https://www.instagram.com/small_llieee",
    linkedin: "www.linkedin.com/in/david-ejere-5056161a1",
  },
  {
    id: 3,
    name: "Success",
    role: "Social Media Lead",
    image: "/Contentwriter.jpeg",
    instagram: "https://www.instagram.com/intentional_mimi/profilecard/?igsh=b3V3NzNuZHRjd2Zk",
    linkedin: "https://www.linkedin.com/in/success-nwajie-seocontentwriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Priscilla",
    role: "Event planner",
    image: "/Eventplanner.jpg",
    instagram: "https://www.instagram.com/grillzbynonny?igsh=MXdrNXNtOG05YXd2&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/priscilla-ononye-08320a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    id: 5,
    name: "John",
    role: " Product Design Lead",
    image: "/johnDesigner.jpg",
    instagram: "https://www.instagram.com/the.lex.jo/",
    linkedin: "https://www.linkedin.com/in/john-achimugu-4341b2214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

// data.ts
import { BlogCardData, CoreValue, TestimonialDetails } from "@/types";

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Accessible Education",
    backgroundColor: "bg-dark-green",
    sticker: "/Logo Sticker Curved Orange (1).svg",
    padding: "py-7",
  },
  {
    id: 2,
    title: "Innovation",
    backgroundColor: "bg-orange-500",
    sticker: "/Logo Sticker Curved Orange (2).svg",
    padding: "py-7",
  },
  {
    id: 3,
    title: "Nurturing Potential",
    backgroundColor: "bg-[#F2A300]",
    sticker: "/Logo Sticker Curved Orange (3).svg",
    padding: "py-7",
  },
  {
    id: 4,
    title: "Excellence",
    backgroundColor: "bg-black",
    sticker: "/Logo Sticker Curved Orange (4).svg",
    padding: "py-7",
  },
];
export const blogCards: BlogCardData[] = [
  // first blog post
  {
    category: ["Education", "Courses"],
    title: "How to Stay Motivated During Online Courses",
    date: "December 5, 2024",
    description:
      "Staying motivated in online courses can be tough, but with the right strategies, it’s possible to stay on track. In this post, we share 8 effective tips to help you stay focused, organized, and engaged in your studies. From setting goals to managing distractions, these actionable ideas will keep you motivated and on the path to success in your online learning.",
    image: "/news_and_blog_1.svg",
    author: {
      name: "Success Nwajie",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/share/18sSLjyqYV/",
        instagram: "https://www.instagram.com/intentional_mimi?igsh=b3V3NzNuZHRjd2Zk",
        linkedin: "https://www.linkedin.com/in/success-nwajie-seocontentwriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    moreDescription: [
      {
        title: "How to Stay Motivated During Online Courses: 4 Effective Tips That Work",
        content:
          "Balancing online courses with other responsibilities like schoolwork, house chores, and personal distractions can be overwhelming. It is easy to get sidetracked by movies, video games, or social media, and staying motivated can feel like an impossible task. If you are struggling to find the energy or focus to stay on track, you are not alone. In this article, we will share practical tips to help you stay motivated during your online courses. From setting achievable goals to celebrating small wins, these simple strategies will keep you focused and energized throughout your learning journey.",
      },
      {
        title: "1. Start Small",
        content:
          "If you have ever wondered what causes a lack of motivation in online learning, I will tell you for free—it is because too often, we start with too many expectations. Do not get me wrong; having high expectations is great, but starting something new with an overwhelming workload sends the wrong signals to your brain. This often makes you feel defeated even before you begin. Instead of overburdening yourself, start small. Break your tasks into smaller, manageable bits depending on the timeline given for the course. For example, if a course module is meant to be completed in two weeks, focus on finishing one section a day rather than attempting to finish half the module in one sitting. This approach reduces stress and makes the process of learning online more enjoyable.",
      },
      {
        title: "2. Create a Workable Schedule and Stick to it",
        content:
          "To stay motivated during your online course, you need to create a schedule that works for you—and more importantly, stick to it. Do not try to be overly ambitious with your routine. Your schedule should account for your energy levels, other responsibilities, and your concentration span. For instance, if you are more productive in the morning, schedule your study sessions during that time. Break your learning into manageable time blocks and take regular breaks. The Pomodoro Technique is a great way to structure your study sessions. Study for 25 minutes, then take a 5-minute break. After four cycles, take a longer break of 15 to 20 minutes. Consistency is the key. Once you establish a routine and stick to it, studying becomes a habit rather than a chore.",
      },
      {
        title: "3. Make Your Goals Realistic",
        content:
          "One major reason students lose motivation is setting unrealistic goals. Sure, you want to finish the course quickly, but is it realistic given your current schedule and workload? Set clear, achievable goals. For example, instead of saying, “I will finish this 10-hour course in one day,” aim for something more realistic, like, “I will complete two lessons each day.” Write down your goals and place them where you can see them daily. Breaking your bigger goals into smaller milestones will give you a sense of accomplishment and keep you motivated.",
      },
      {
        title: "4. Attach a Reward System to Your Milestones",
        content:
          "Everybody loves free gifts and rewards. You can use this to your advantage. Celebrating small wins can be a huge motivation booster in your online course journey. Whenever you finish a module in your course, you can attach a reward. For instance, after completing a module, treat yourself to something you enjoy—a favorite snack, an episode of your favorite show, or a short walk outside. This gives your brain enough time to rest while getting it excited for the next round of action. These little rewards act as positive reinforcement, keeping you excited and motivated to tackle the next section of your course.",
        imageContent: {
          image: "/onlinecourse.jpg",

          alt: "Student taking an online course",
        },

        moreContent:
          "Final Thoughts: Staying motivated during online courses isn’t always easy, but it’s entirely possible with the right approach. Start small, set realistic goals, stick to a schedule, and reward yourself along the way. Also, do not forget to surround yourself with supportive peers, create an inspiring workspace, and minimize all forms of distractions. Every little step you take daily in studying your online course brings you closer to completing it and gaining the skills you desire. The journey may be challenging, but the results will be worth it. So, keep your head up, stay consistent, and finish strong.",
      },
    ],
  },
  // second blog post
{
  category: ["Career", "Courses"],
  title: "The Importance of Networking in Building a Successful Career",
  date: "August 28, 2024",
  description:
    "Networking is one of the most powerful tools for building a successful career, yet many people underestimate its impact. In this blog post, we explore why networking matters, how to approach it authentically, and practical ways to grow and maintain professional relationships that can support your long-term career goals. Whether you’re a student, job seeker, or working professional, learning to network effectively can be the game-changer you didn’t know you needed.",
  image: "/news_and_blog_2.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/",
    },
  },
  moreDescription: [
    {
      title: "The Importance of Networking: How Relationships Shape Your Career",
      content:
        "Most career-defining opportunities don’t come from online applications—they come from people. A mentor who recommends you for a role. A friend who forwards your CV to the right inbox. A fellow professional who shares an event you would have otherwise missed. Networking is about building bridges to people, information, and opportunities that aren’t always publicly visible. In this article, we’ll guide you through how to build a network that works for you.",
    },
    {
      title: "1. Understand the True Value of Networking",
      content:
        "Networking isn't just a job-hunting strategy—it's a long-term career investment. A strong professional network gives you access to industry insights, insider opportunities, and collective wisdom. Imagine being able to call someone for advice before a job interview or being introduced to a company founder over coffee—these moments can define your professional path. It’s not about how many people you know; it’s about who knows you, respects you, and is willing to advocate for you.",
    },
    {
      title: "2. Start With Your Current Circle",
      content:
        "You don’t need to wait for a conference to start networking. Start where you are—classmates, former coworkers, volunteers, online communities, your local place of worship, even family. Reach out and reconnect. A simple message like, 'Hey, I saw you’re working in tech now! I’d love to hear how you got started,' can open a meaningful conversation. People appreciate being seen and heard—your curiosity can lead to lasting connections.",
    },
    {
      title: "3. Approach With Authenticity, Not Agenda",
      content:
        "No one likes feeling used. If your only reason for reaching out is to ask for a job, people will sense it. Instead, lead with curiosity and kindness. Ask about their journey, offer your own insights, share an article they might find interesting. One powerful tip is to become a connector—introduce two people in your network who can benefit from knowing each other. When you give without expectation, the returns come naturally and often exponentially.",
    },
    {
      title: "4. Nurture Your Network Over Time",
      content:
        "Think of networking like planting a tree. You don’t water it once and expect it to grow. Check in with your contacts occasionally, even when you don’t need anything. Congratulate them on achievements, endorse them on LinkedIn, comment on their projects. These small touchpoints build a relationship of mutual support. Over time, you'll be top of mind when opportunities arise. Always aim to be remembered positively, not just remembered.",
    },
    {
      title: "5. Put Yourself in the Right Rooms",
      content:
        "Attend workshops, webinars, and industry events—even if they’re virtual. Join LinkedIn groups, Twitter chats, and online communities that align with your goals. Don’t just show up—participate. Ask questions, share your thoughts, and follow up with people you connect with. Send a message like, 'I really enjoyed your point during the panel—would love to stay in touch.' These interactions build visibility and credibility in your field.",
    },
    {
      title: "6. Use Digital Tools Wisely",
      content:
        "LinkedIn is a powerful tool when used right. Keep your profile updated, share content that reflects your interests, and engage with others’ posts. Avoid sending generic connection requests—customize your message with a genuine reason for reaching out. For example, 'I read your article on digital finance—it was very insightful. I’d love to connect and learn more about your work.' That personal touch makes all the difference.",
    },
    {
      title: "7. Your Network Is Your Lifeline in Transitions",
      content:
        "Whether you’re changing industries, relocating, or facing job loss, your network becomes your lifeline. When things shift unexpectedly, it’s the people you’ve stayed connected with who will provide guidance, referrals, and emotional support. Building your network is like building insurance—you hope you don’t need it urgently, but when you do, it makes all the difference.",
      imageContent: {
        image: "/networking_event.jpg",
        alt: "People networking at a professional event",
      },
      moreContent:
        "Final Thoughts: Networking isn’t about being extroverted or 'working the room.' It’s about forming genuine, supportive relationships over time. Focus on giving more than you take, show consistent interest in others, and stay open to serendipitous connections. Whether you're just starting out or looking to level up in your field, your network will be a vital part of your journey. Invest in people, and they will invest in you.",
    },
  ],
},
  // third blog post
 {
  category: ["Product", "Education", "Ecosystem"],
  title: "Balancing School and Life: Tips for Effective Time Management",
  date: "May 23, 2025",
  description:
    "Juggling school responsibilities with personal life can be overwhelming, especially when you're trying to excel at both. In this blog post, we offer practical time management strategies to help students stay productive, reduce stress, and create a healthier school-life balance. Whether you're managing lectures, side projects, work, or family duties, these tips will help you stay on top of your goals without burning out.",
  image: "/news_and_blog_3.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "Finding Balance Between School and Life: Why It Matters",
      content:
        "When you're a student, it's easy to feel like you're always behind. Assignments pile up. Deadlines loom. Personal responsibilities don’t pause. Without proper balance, burnout is just around the corner. Mastering time management isn’t just about getting more done—it's about working smarter, staying sane, and making room for the things that matter most, including rest and relationships.",
    },
    {
      title: "1. Set Clear Priorities",
      content:
        "Not all tasks are created equal. Start each week by identifying your top priorities. What assignments or activities absolutely must be done? Which can wait? Use a prioritization system like the Eisenhower Matrix to divide tasks into 'urgent and important', 'important but not urgent', 'urgent but not important', and 'neither'. This keeps your focus on what actually moves the needle, not just what feels urgent.",
    },
    {
      title: "2. Create a Visual Schedule",
      content:
        "A weekly planner or calendar can transform your day. Block out fixed activities like classes, work shifts, or family commitments. Then schedule time for studying, relaxation, social life, and rest. Apps like Google Calendar, Notion, or even a simple bullet journal can help you visualize your week and stay committed to your routine. Be sure to include buffer time for transitions and unplanned delays.",
    },
    {
      title: "3. Break Tasks into Smaller Pieces",
      content:
        "Large projects are intimidating—but breaking them into smaller tasks makes them manageable. Instead of writing 'Finish project report' on your to-do list, break it into 'Research topic', 'Create outline', 'Write introduction', etc. Completing each small step builds momentum and gives you a sense of progress, which boosts motivation.",
    },
    {
      title: "4. Learn to Say No (Gracefully)",
      content:
        "Sometimes the biggest threat to your time is saying yes to too much. Whether it’s taking on extra responsibilities, helping friends with their tasks, or overcommitting to social events, saying 'yes' to everything often means saying 'no' to your own priorities. Practice polite ways to decline without guilt. Remember: every ‘yes’ should align with your goals and values.",
    },
    {
      title: "5. Limit Distractions with Focus Tools",
      content:
        "Smartphones, social media, and background noise are major distractions for students. Tools like Forest (which grows a virtual tree while you stay off your phone), Cold Turkey (to block websites), or the Pomodoro timer (25-minute focus blocks) can help you concentrate and boost productivity. Creating a distraction-free study environment also helps—clean workspace, notifications off, and maybe even lo-fi music.",
    },
    {
      title: "6. Build In Time for Rest and Fun",
      content:
        "Time management isn’t just about work—rest is just as important. Overworking leads to fatigue and mental burnout, which reduces the quality of your work. Schedule in time for the things you love—watching a show, taking a walk, calling a friend. These activities recharge your brain and improve your focus when it’s time to study.",
    },
    {
      title: "7. Review and Adjust Weekly",
      content:
        "Every week won’t be perfect—and that’s okay. Take 10–15 minutes at the end of each week to review what went well, what didn’t, and what you’d like to improve. Did you meet your goals? Were your time blocks realistic? What caused unexpected delays? Small weekly reflections like these help you fine-tune your system over time.",
      imageContent: {
        image: "/planning.jpg",
        alt: "Student planning their weekly schedule",
      },
      moreContent:
        "Final Thoughts: Finding the right balance between school and life takes time, intention, and a willingness to adapt. By learning how to prioritize tasks, manage your schedule, and build in time for rest, you'll reduce stress, improve performance, and enjoy a more fulfilling student life. Remember, time management isn’t about doing everything—it’s about doing the right things, at the right time, with the right mindset.",
    },
  ],
},
  // fourth blog post
 {
  category: ["Company", "Courses"],
  title: "Preparing for College: A Comprehensive Guide",
  date: "October 23, 2024",
  description:
    "Getting ready for college can be overwhelming, but with the right preparation, you can transition smoothly and confidently. From choosing the right courses and organizing your documents to learning essential life skills like budgeting and time management, this comprehensive guide provides everything you need to set yourself up for success before stepping on campus.",
  image: "/news_and_blog_4.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "Why College Preparation Matters",
      content:
        "College is a major life milestone. Whether you’re moving out for the first time or juggling studies with work, the transition requires more than academic readiness—it calls for emotional, financial, and practical preparation. Proper planning reduces stress, boosts confidence, and helps students hit the ground running when school starts.",
    },
    {
      title: "1. Choosing the Right Courses and Major",
      content:
        "Your course of study plays a big role in shaping your college experience and future career. Take time to research potential majors, understand course requirements, and assess how your interests align with job opportunities. Speak to school counselors, alumni, or professionals in the field to get clarity before you commit.",
    },
    {
      title: "2. Getting Organized with Documents",
      content:
        "Before college begins, ensure you have all the necessary documents organized—admission letters, scholarship awards, medical records, student ID, housing forms, and bank account details. Store digital copies in cloud storage (like Google Drive) and keep physical copies in a labeled folder you can easily access when needed.",
    },
    {
      title: "3. Building Financial Preparedness",
      content:
        "One of the biggest shifts in college is financial independence. Whether you’re managing an allowance, a scholarship, or a part-time income, you need to learn how to budget. Understand tuition fees, living expenses, and hidden costs like textbooks or transportation. Use apps like Mint or Monify to track your spending and set financial goals.",
    },
    {
      title: "4. Mastering Time Management Early",
      content:
        "Time becomes one of your most valuable assets in college. Between classes, assignments, and extracurriculars, learning how to manage your schedule is critical. Use a planner, calendar app, or weekly routine board to stay organized. Break big tasks into smaller steps and avoid last-minute cramming by using the Pomodoro technique or time blocking.",
    },
    {
      title: "5. Learning Life Skills Before You Go",
      content:
        "College isn’t just about academics—it’s your first real taste of adulthood. Learn to cook a few basic meals, do your laundry, manage your hygiene, and communicate with roommates. These small skills go a long way in helping you stay self-reliant and reduce homesickness.",
    },
    {
      title: "6. Mental Preparation is Just as Important",
      content:
        "College can be exciting, but also emotionally overwhelming. Prepare yourself mentally for independence, unfamiliar environments, and occasional setbacks. Learn coping strategies, identify your support system, and don’t hesitate to reach out for help when you need it. Many schools offer counseling and student wellness resources.",
    },
    {
      title: "7. What to Pack (and What to Leave Behind)",
      content:
        "It’s easy to overpack when moving to college. Focus on essentials—clothing for different seasons, study supplies, toiletries, basic kitchenware, and a few items from home for comfort. Avoid bringing everything you own. Your future self will thank you when it’s time to unpack.",
      imageContent: {
        image: "/college.jpg",
        alt: "Student packing and preparing for college",
      },
      moreContent:
        "Final Thoughts: Preparing for college goes beyond buying a backpack and showing up for orientation. It’s about planning your academics, organizing your finances, learning real-world skills, and mentally equipping yourself for a new chapter. With the right preparation, you’ll not only survive the college transition—you’ll thrive in it. Stay focused, stay open to learning, and trust yourself. You’ve got this!",
    },
  ],
},
  // fifth blog post
 {
  category: ["Company", "Courses"],
  title: "The Power of Mentorship: How to Find and Benefit from a Mentor",
  date: "August 23, 2024",
  description:
    "Mentorship is one of the most powerful tools for personal and professional growth, yet many students and young professionals don’t know how to find or leverage one. This blog explores the benefits of mentorship, how to identify the right mentor, and how to make the most of that relationship to accelerate your journey.",
  image: "/news_and_blog_5.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "Why Mentorship Matters",
      content:
        "Mentorship is more than just guidance—it's a dynamic relationship that offers support, knowledge, and encouragement. A mentor helps you navigate challenges, unlock opportunities, and avoid common mistakes by drawing from their own experiences. For students and early-career professionals, a mentor can serve as a compass, helping shape your goals and instilling confidence in your journey.",
    },
    {
      title: "Types of Mentors",
      content:
        "Mentors come in various forms. Some are academic mentors who guide your educational journey, while others are career mentors focused on your professional path. There are also peer mentors who offer support from a shared perspective. Understanding which type of mentor you need—based on your current goals—can help you focus your search.",
    },
    {
      title: "How to Find the Right Mentor",
      content:
        "Finding a mentor starts with knowing what you’re looking for. Identify areas where you want guidance—career planning, skill development, or networking—and look for people with experience in those areas. Attend events, join online communities, or leverage platforms like LinkedIn. Don’t be afraid to reach out; a simple, respectful message expressing your interest and goals can open the door.",
    },
    {
      title: "Building a Strong Mentor Relationship",
      content:
        "Once you find a mentor, approach the relationship with humility and initiative. Be respectful of their time, come prepared with questions or updates, and show appreciation for their input. Effective mentor relationships are reciprocal—while the mentor offers knowledge, the mentee brings enthusiasm, curiosity, and a willingness to learn.",
    },
    {
      title: "Maximizing the Benefits of Mentorship",
      content:
        "To get the most out of mentorship, set clear goals. Are you hoping to improve a skill, get feedback on a project, or learn about a specific industry? Share these objectives with your mentor. Take notes during meetings, apply their advice, and follow up with progress. Over time, your mentor may become a lifelong ally, recommending you for roles or introducing you to their network.",
    },
    {
      title: "What to Do When Mentorship Doesn’t Work Out",
      content:
        "Not every mentorship will be a perfect fit—and that’s okay. If the connection feels forced, or your goals don’t align, it’s better to respectfully move on than to stay in an unproductive dynamic. Be honest, express gratitude, and continue your search. Mentorship is about quality, not quantity.",
    },
    {
      title: "From Mentee to Mentor: Giving Back",
      content:
        "Eventually, you may find yourself in a position to give back. Mentoring others is one of the most rewarding ways to solidify your own knowledge and make an impact. Share your story, offer guidance, and encourage others just as someone once did for you.",
      imageContent: {
        image: "/mentorship.jpg",
        alt: "Young professional meeting with mentor",
      },
      moreContent:
        "Final Thoughts: The journey of personal and professional growth is rarely walked alone. A mentor can light the path, challenge your thinking, and help you reach your potential. Whether you're just starting out or looking to level up, investing in mentorship is one of the smartest decisions you can make for your future.",
    },
  ],
},
  // sixth blog post
{
  category: ["Company", "Courses"],
  title: "Financial Literacy for Students: Building a Strong Foundation",
  date: "March 30, 2025",
  description:
    "Financial literacy is a vital skill every student needs—but most are never taught. This blog breaks down essential money concepts in a relatable way to help young people take charge of their financial futures. Learn how to budget, save, invest, and make smart financial decisions that pay off in the long run.",
  image: "/news_and_blog_6.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "Why Financial Literacy Matters",
      content:
        "Money is part of everyday life—yet most students graduate with little to no knowledge about how to manage it. Financial literacy gives students control over their financial futures by teaching them how money works. It's not just about numbers; it’s about making informed decisions, setting realistic goals, and avoiding mistakes like unnecessary debt or poor spending habits.",
    },
    {
      title: "Starting Early Makes a Difference",
      content:
        "The best time to learn about money is before you're faced with big financial decisions. By starting early, students can develop strong money habits like budgeting, saving consistently, and distinguishing between needs and wants. These skills become second nature over time and help prevent impulsive choices driven by peer pressure or lack of knowledge.",
    },
    {
      title: "Creating a Budget That Works",
      content:
        "Budgeting is the cornerstone of financial success. A budget helps students track income (like allowances, side gigs, or scholarships) and prioritize spending. Apps like Mint or simple spreadsheet tools can make budgeting easy and even fun. Knowing where your money goes every month is empowering—and it’s often the first step toward reaching longer-term goals like buying a laptop, saving for travel, or starting a small business.",
    },
    {
      title: "The Importance of Saving—Even in Small Amounts",
      content:
        "Saving money isn’t about setting aside huge sums. It’s about building consistency. By saving a little each month—say 10% of any money you earn or receive—students can create a cushion for emergencies and future goals. It also builds financial discipline and reduces the temptation to spend everything at once.",
    },
    {
      title: "Understanding the Magic of Compound Interest",
      content:
        "Compound interest is where money starts working for you. The earlier students start saving or investing, the more time their money has to grow. Even small investments in simple savings accounts or beginner-friendly investment apps can grow significantly over the years. It's not about getting rich overnight—it's about letting time do the work.",
    },
    {
      title: "Navigating Credit and Debt Responsibly",
      content:
        "Sooner or later, students will encounter credit—whether through student loans, credit cards, or mobile lending apps. Understanding credit scores, interest rates, and repayment terms is key. Responsible credit use can help build a solid financial reputation, while misuse can lead to years of financial strain. Financial literacy equips students to use credit as a tool, not a trap.",
    },
    {
      title: "Practical Tips for Everyday Financial Decisions",
      content:
        "Financial literacy also includes smart shopping habits, avoiding scams, comparing prices, and understanding digital banking tools. Students should know how to open and manage a bank account, avoid overdraft fees, and recognize when a financial offer is too good to be true. Empowerment begins with awareness.",
      imageContent: {
        image: "/finance.jpg",
        alt: " Student making financial plans",
      },
      moreContent:
        "Financial freedom doesn’t start when you land your first job—it starts with your mindset and habits today. Whether you're still in school or entering college, developing financial literacy is one of the best long-term investments you can make. With the right knowledge and tools, students can confidently manage money, make informed decisions, and lay the groundwork for a financially secure future.",
    },
  ],
},
  // seventh blog post
{
  category: ["Company", "Courses"],
  title: "The Role of Soft Skills in Career Success",
  date: "May 26, 2025",
  description:
    "While technical skills can get your foot in the door, soft skills are what keep you growing. This blog explores why soft skills like communication, teamwork, and adaptability are essential to long-term career growth—and how students and young professionals can intentionally build them.",
  image: "/news_and_blog_7.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "What Are Soft Skills?",
      content:
        "Soft skills are the non-technical attributes that define how you interact with others, solve problems, and approach work. They include communication, emotional intelligence, adaptability, creativity, time management, and conflict resolution. Unlike hard skills, which are task-specific, soft skills are transferable across roles and industries.",
    },
    {
      title: "Why Employers Value Them",
      content:
        "In today's collaborative and fast-evolving workplaces, soft skills are often the deciding factor in hiring and promotions. Employers consistently rank communication, teamwork, and problem-solving as top priorities. Even the most technically skilled candidates can struggle if they can’t work well with others or manage time effectively.",
    },
    {
      title: "Soft Skills vs Hard Skills",
      content:
        "Hard skills may get you hired—but soft skills keep you hired. Think of it this way: a graphic designer needs to know how to use design tools (hard skill), but they also need to communicate with clients, accept feedback, and meet deadlines (soft skills). Employers want well-rounded candidates who bring both to the table.",
    },
    {
      title: "Top Soft Skills for Career Growth",
      content:
        "Some of the most sought-after soft skills in 2025 include:\n\n- **Communication**: Being able to articulate ideas clearly across platforms.\n- **Adaptability**: Staying flexible in the face of change.\n- **Teamwork**: Collaborating effectively with diverse individuals.\n- **Emotional Intelligence**: Managing your emotions and understanding others.\n- **Leadership**: Inspiring and guiding teams regardless of role.\n\nBuilding these skills is a long-term investment with daily opportunities for growth.",
    },
    {
      title: "How to Develop Soft Skills",
      content:
        "You don’t need a formal course to build soft skills. Volunteer for leadership roles in school projects. Practice active listening in conversations. Ask for feedback from mentors or colleagues. Journaling, reflection, and online simulations can also help you identify and strengthen your interpersonal skills.",
      imageContent: {
        image: "/soft-skills.jpg",
        alt: "Diverse group of young professionals collaborating",
      },
      moreContent:
        "Mastering soft skills turns good professionals into great ones. Whether you’re aiming for a promotion, planning to lead a team, or simply looking to stand out, investing in your interpersonal growth is key. The earlier you start building these skills, the more naturally they’ll become part of your everyday work life.",
    },
  ],
},
  // eighth blog post
{
  category: ["Company", "Courses"],
  title: "Top Skills Employers Look for in 2025",
  date: "February 10, 2025",
  description:
    "Today’s employers are prioritizing adaptability, creativity, and technical fluency over traditional qualifications. Discover the top skills companies are actively seeking in 2025 and how you can align your personal development with market demands.",
  image: "/news_and_blog_8.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
       facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "Why Skill-Based Hiring is on the Rise",
      content:
        "Employers are shifting focus from traditional degrees to demonstrable skills. In 2025, many companies evaluate talent based on their ability to perform, solve problems, and grow with the company. This approach opens doors for candidates who are self-taught, project-proven, or industry-certified.",
    },
    {
      title: "Top Technical Skills in Demand",
      content:
        "The digital economy continues to evolve, and these technical skills are leading the pack:\n- Artificial Intelligence & Machine Learning\n- Data Analysis & Visualization\n- Cloud Computing (AWS, Azure, GCP)\n- Cybersecurity Awareness\n- Software Development\n- Blockchain and Web3 Tools\nEven non-tech roles are expected to understand data, tools, and platforms relevant to their function.",
    },
    {
      title: "The Enduring Power of Soft Skills",
      content:
        "Soft skills remain irreplaceable. Employers highly value communication, collaboration, adaptability, emotional intelligence, and problem-solving. A technically skilled employee who lacks soft skills may struggle to succeed in team settings or client-facing roles.",
    },
    {
      title: "Hybrid Skills Are the New Gold Standard",
      content:
        "What sets top candidates apart in 2025 is the combination of technical and interpersonal strengths. A marketer who understands analytics, a developer who can lead a team, or a project manager who speaks both business and tech—all exemplify the hybrid skill sets employers crave.",
    },
    {
      title: "How to Build These Skills in 2025",
      content:
        "Here’s how to actively position yourself for success:\n- Take online courses (e.g., Coursera, edX, Udemy)\n- Build real-world projects or contribute to open-source\n- Seek internships or freelance gigs\n- Join workshops, bootcamps, or hackathons\n- Develop your communication and teamwork through group projects",
      imageContent: {
        image: "/top-skills.jpg",
        alt: "Professional team discussing skills in a modern workspace",
      },
      moreContent:
        "Whether you're entering the workforce or looking to transition into a new field, the key to standing out in 2025 is your skillset. Stay curious, keep learning, and most importantly, keep applying your skills in real-world contexts. The future of work belongs to the capable—not just the credentialed.",
    },
  ],
},
  // nineth blog post
{
  category: ["Company", "Courses"],
  title: "How to Balance Academics and Extracurricular Activities",
  date: "August 23, 2024",
  description:
    "Finding the right balance between academics and extracurricular activities is essential for students to thrive both academically and personally. This blog offers practical strategies to help students stay organized, reduce stress, and make the most of their school years.",
  image: "/news_and_blog_9.svg",
  author: {
    name: "Young & Skilled Admin",
    image: "/icons/photo-card.svg",
    socials: {
      "twitter(X)": "https://x.com/",
      facebook: "https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d",
      instagram: "https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/company/young-and-skilled-initiative/",
    },
  },
  moreDescription: [
    {
      title: "Why Balance Matters",
      content:
        "Academics are important, but extracurricular activities also play a crucial role in developing a well-rounded skill set. Balancing both helps students manage their time effectively, build leadership skills, and avoid burnout. It fosters a healthy lifestyle that supports long-term success.",
    },
    {
      title: "Time Management is Key",
      content:
        "One of the most important skills a student can learn is time management. Using planners, digital calendars, or time-blocking methods helps students allocate dedicated time for studying, assignments, and their chosen activities without one overwhelming the other.",
    },
    {
      title: "Set Priorities and Boundaries",
      content:
        "Every student has different goals and energy levels. It’s important to prioritize what matters most and be realistic about how much time can be committed. Saying 'no' to some opportunities allows room to focus and excel in others without becoming overwhelmed.",
    },
    {
      title: "Make Use of Downtime",
      content:
        "Whether it's a break between classes or travel time to an extracurricular event, using these moments productively—like reviewing notes or setting up to-do lists—can ease the overall workload and keep students on track.",
    },
    {
      title: "Stay Connected and Ask for Support",
      content:
        "Keeping communication open with teachers, coaches, and parents can help students navigate conflicts in their schedule or seek help when they feel overextended. A support system makes balancing responsibilities more manageable.",
      imageContent: {
        image: "/extra-curricular.jpg",
        alt: "Students Catching a Laugh after a long day of classes",
      },
      moreContent:
        "Balancing academics and extracurricular activities isn't about doing everything at once—it's about doing the right things well. With discipline, self-awareness, and support, students can enjoy a rewarding and fulfilling academic life without compromising their passions and personal development.",
    },
  ],
},
];
export const testimonials: TestimonialDetails[] = [
  {
    quote: "Platform's flexibility allowed me to learn at my own pace",
    company: "/testimonial_young_and_skilled.svg",
    quoteImage: "/testimonial_quote_green.svg",
    description:
      "Young and Skilled Initiative gave me the skills and confidence I needed to land my dream job. The platform's flexibility allowed me to learn at my own pace, and the mentorship was invaluable.",
    name: "Maria Obioma",
    position: "Digital Marketing Graduate, Young & Skilled",
    image: "/testimonial_maria_obioma.svg",
    bgColor: "#114F3C",
    extra: "/testimonial_star_2.svg",
    companyWidth: 80,
    companyHeight: 44,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "I've gained the confidence to lead my school's environmental club",
    company: "/testimonial_google.svg",
    quoteImage: "/testimonial_quote_mint.svg",
    description:
      "Thanks to the mentorship and support, I've gained the confidence to lead my school's environmental club and work on sustainable projects.",
    name: "David Oluah",
    position: "Product Designer, Google",
    image: "/testimonial_david_oluah.svg",
    bgColor: "#98BC6D",
    extra: "/testimonial_star.svg",
    companyWidth: 114,
    companyHeight: 37,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "Young and Skilled Initiative opened my eyes to new possibilities",
    company: "/testimonial_microsoft.svg",
    quoteImage: "/testimonial_quote_red.svg",
    description:
      "Young and Skilled Initiative opened my eyes to new possibilities. The skills I learned here have helped me launch my own app!",
    name: "Sarah Macklin",
    position: "Program Alumna, Microsoft",
    image: "/testimonial_sarah_macklin.svg",
    bgColor: "#EF4C0D",
    extra: "/testimonial_semicircle.svg",
    companyWidth: 135,
    companyHeight: 29,
    extraWidth: 65,
    extraHeight: 32,
  },
  // Add more testimonials here...
];

export const content = [
  {
    title: "We are Young &",
    highlight: "inspired.",
    highlightColor: "text-light-green",
  },
  {
    title: "We are Young &",
    highlight: "Loaded.",
    highlightColor: "text-light-green",
  },
  {
    title: "We are Young &",
    highlight: "skilled.",
    highlightColor: "text-dark-green",
  },
];
