[![Image description](https://res.cloudinary.com/practicaldev/image/fetch/s---ymLU67G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mzd0ii1miqc9cuu9hpaf.png)](https://res.cloudinary.com/practicaldev/image/fetch/s---ymLU67G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mzd0ii1miqc9cuu9hpaf.png)

**TOC:**

- Why system design for FE

- What do interviewers look for

- Important Topics

- UI/UX

- Frameworks, and technologies choices

- Example

- Strategy

**Why system design for Front-End?**

Front-End is getting complex day by day.The line between Backend and Front-End is fading out. As well as, it is expected that Front-End should contribute to the design decisions of the project. Front-End developers should flag in the design meetings if Backend/APIs folks are ignoring any important aspect in the design.

**What interviewers are looking for?**

As a Front-End developer do you understand

- How the application should be designed E2E?

- What are the important parts of any application?

- Do you understand which resource is the right fit and why

- Do you understand the pros-cons of the design decisions

- Do you understand what is required from the backend/APIs folks to make your Front-End

- Do you understand the cost (price) of designing an application and how to optimize it?

- Are you able to design a micro-service

- Are you able to design micro-frontends

- How to create and sc_ala_ble repos

**What are the important topics?**

- Database

- CDN

- APIs

- Storage - S3, EC2, EBS

- Deployment

- Route53

- Certificates

- Analytics

- Monitoring

- Logs

- Data Recovery

- Performance

- accessibility

- cross-browser

- SPoF (Single Point of Failure)

- Sc_ala_ble

- Security

- Micro-frontends

- SEO

- Reliability

- Maintainability

**Is UI/UX is part of the system design? If yes, then what to talk about**

Yes, as a Front-End developer you should talk about UI/UX. Talk about how the UX would be?

**It is important to talk about**

- _Performance_: How your design decision is going to improve performance
- _Accessibility_: This will come when you will talk about UI and UX.
- _Cross-browser_: If any tech decision is going to impact any browser (do call out)
- _SPoF_: Single point of failure: How to avoid it
- _Sc_ala_ble_: How sc_ala_ble your solution is
- _Security_: Most important aspect, how you are going to take care of security
- _Data State_: How to maintain the data consistency between mobile and desktop

**Shall we talk about the frameworks choices and technology choices?**

Yes, it is important to talk about it. But your all decision should not be based on the frameworks you are aware of. You should focus on the solution not based on what frameworks you know.

Also, this is an important aspect of the interview. So, you should be well versed with the pros-cons of all the technology decisions you are taking.

Eg: why a non-relational database over a relational database? Why EC2 and not Lambda function? ReactJS vs Angular? SSR vs CSR etc.

**How deep-dive one should go?**

- At first, focus on solving the problem (not on the BEST solution).
- Then focus on optimising the solution. Talk about - BEST solution and why (pros and cons, what area would be impacted? Eg: performance will increase, SPoF will be avoided, etc.
- Now, go deep dive into the modules related to the front-end. For example: do talk about APIs endpoints, cache or local storage or DB, which DB, deployment and storage of the web app.
- An _interviewer will stop you in between to ask questions. Give them time and space to them to ask the questions._

**Example**

You need to design a chat application.

- A user can do multiple chats with multiple users
- A user can be added to a group
- A user can be able to react with emojis on the chat(s)
- A user can be able to reply to the chat 1:1
- and a few more requirements

**Step 1:** Define the Scope:

- How many users are we expecting?
- How many chats in parallel can be done?
- How long is the History of chats to be maintained?
- Which emojis are to be used, and their functionality? eg: toggle, or how they will be viewed, do we need to maintain in the history of chat etc.
- Do we support multiple user chats?
- Come with numbers to know the sc_ala_bility, performance, resources required etc.

**OUTCOME**: You should be aware of the scope and scale of the problem

**Step 2:** Think about solutions, Features, and Resources

- Start from web or mobile (where you feel comfortable or as per the ask of the interviewer)
- What problem we are solving here? You can’t solve all the problems in one go. So, think about the top 2-3 and start focusing on that.
- Think about resources that will be used to make a useable system

**OUTCOME**: You should be clear with 2-3 top requirements and what resources you will be requiring

**Step 3:** Let's start with the High-level design (Front-End + Back-End)

- Web interaction
- Endpoints
- Database
- Authentication
- Storage

OUTCOME: You should have a useable working design solving the top 2-3 problems.

**Step 4:** Let’s, deep dive, and optimize

_Question: What will happen when the user is offline for a month. How you will design the experience for it? (talk about UX and UI)_

- accessibility
- Performance
- Sc_ala_bility
- How to scale the design
- How the older chats will be retrieved
- API design etc.

**OUTCOME**: An optimised design of the problem with clear pros and cons.

_Strategy:_

- The system design round is 60 mins approx.
  - 5 mins to share problem statement
  - 40 mins to solve questions
  - 5 mins for Q&A.

You must do practice to place everything in 40 mins. Before the interview does practice as much as you can. You should use either whiteboard, paper, or any application such as draw.io

- Make your 40 mins interactive. Keep talking and thinking aloud. It is important talk aloud about what you are thinking and why?
- There is no correct or incorrect answer. System design is all about knowing you and your design decision skills.
- As a Front End developer, the scope would be vast. So, better to talk about scope. Ask - where do you want me to focus? Eg: Shall I just skip the FE part in detail and get into the deep of the backend, or infra or deployment etc.
- Go in the details of connecting the modules and user-journey. Eg: Where the user’s data would be stored, which API endpoint will be used to get the data, how the sc_ala_bility of the storage of the user’s data if the user will increase from 10x to 100x

Happy Learning!!

You can follow me at Twitter.com/hellonehha
