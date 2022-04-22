My intention in writing this chapter is not to copy and paste clichés from blogs (the following excerpt aside) or pretend I was part of the historic events (like the agile manifesto or Extreme Programming activities) that led to the creation of Test-Driven Development as a methodology – trust me, I’m not that old.

But I do think that giving you some context around what we’re going to discuss in this book is beneficial. I’m going to talk about the basic workflow of Test-Driven Development (TDD) and different schools of doing it practically. If you want to jump into the code directly, feel free to do so and navigate to the next chapter to get your hands dirty.

## Test-Driven Development

TDD is a software development methodology in which tests are written to drive the development of an application. It was developed/rediscovered by [Kent Beck](https://www.kentbeck.com/) in the late 1990s as part of [Extreme Programming](https://martinfowler.com/bliki/ExtremeProgramming.html) and was well discussed in his famous book [Test-Driven Development: By Example](https://www.amazon.com/dp/0321146530/ref%253Dcm_sw_r_cp_ep_dp_BJ0SAbBCVPGBV).

In his book, Kent Beck describes two essential rules:

- Write new code only if you first have a failing automated test

- Eliminate duplication

which leads to the steps of red-green-refactor, which we will discuss soon. The ultimate goal for these two rules is to write (as Ron Jeffries describes) clean code that works.

### Red-Green-Refactor Cycle

There is a well-known diagram that explains how to apply TDD practically – it’s known as the red-green-refactor cycle (Figure [1-1](https://learning.oreilly.com/library/view/test-driven-development-with/9781484269725/html/510354_1_En_1_Chapter.xhtml#Fig1)).

![../images/510354_1_En_1_Chapter/510354_1_En_1_Fig1_HTML.jpg](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781484269725/files/images/510354_1_En_1_Chapter/510354_1_En_1_Fig1_HTML.jpg)

Figure 1-1

Test-Driven Development

Usually, there is a short description provided with this diagram, articulated as the three principles of TDD:

- Write a test and see it fail.

- Write just enough code to make the test pass.

- Refactor if any code smells are detected.

At first glance, it’s pretty easy to follow. The problem here – as with many principles – is that they don’t work well for beginners. The principles are quite high level and hard to apply because they lack detail. For example, just knowing the principles will not help you to answer questions like

- How can I write my very first test?

- What does enough code actually mean?

- When and how should I refactor?

### A Closer Look at Red-Green-Refactor

Figure [1-2](https://learning.oreilly.com/library/view/test-driven-development-with/9781484269725/html/510354_1_En_1_Chapter.xhtml#Fig2) takes a closer look at the process.

![../images/510354_1_En_1_Chapter/510354_1_En_1_Fig2_HTML.jpg](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781484269725/files/images/510354_1_En_1_Chapter/510354_1_En_1_Fig2_HTML.jpg)

Traditionally, TDD contains two parts: quick implementation and refactoring. In practice, the tests for quick implementation are not limited to the unit tests. They can be the acceptance tests as well – these are higher-level tests that focus more on business value and the end-user journey, without worrying too much about the technical details. Implementing the acceptance tests first could be an even better idea.

Starting with acceptance tests ensures that the right things are prioritized, and it provides confidence to developers when they want to clean up and refactor the code in the later stage. Acceptance tests are intended to be written from the end user’s perspective; a passing acceptance test ensures the code meets the business requirement. Additionally, it can protect the developer from wasting time on false assumptions or invalid requirements.

There is a principle in Extreme Programming known as YAGNI, or you aren’t gonna need it. YAGNI can be very useful for protecting developers from wasting their valuable time. Developers are very good at making assumptions around potential requirement changes, and based on those assumptions, they may come up with some unnecessary abstractions or optimizations that can make the code more generic or reusable. The problem is that those assumptions rarely turn out to be true. YAGNI emphasizes that you should not do it until you have to.

However, in the refactor phase, you can implement those abstractions and optimizations. Since you already have test coverage, it’s much safer to do the cleanup then. Small refactors such as modifying a class name, extracting a method, or extracting some classes to a higher level – anything that helps to make the code more generic and SOLID – are now safer and easier to undertake.

### Types of TDD

TDD is a big yet mixed concept. It has many variations and different schools, such as UTDD, BDD, ATDD, and so on. Traditionally, TDD implied Unit Test-Driven Development or UTDD. However, the TDD we are discussing in this book is ATDD (Acceptance Test-Driven Development), an extended version of the traditional concept, with an emphasis on writing the acceptance test from the business perspective and using it to drive out production code.

Having various tests in different layers can ensure that we are always on the right track and have the correct functionality.

#### Acceptance Test-Driven Development

In short, ATDD describes the behavior of the software from the end user’s point of view, focusing on the business value of the application, rather than implementation details. Instead of verifying functions being called at certain times with correct parameters, it makes sure that when a user places an order, they receive their delivery on time.

We can merge the ATDD and UTDD into one diagram, as shown in Figure [1-3](https://learning.oreilly.com/library/view/test-driven-development-with/9781484269725/html/510354_1_En_1_Chapter.xhtml#Fig3).

![../images/510354_1_En_1_Chapter/510354_1_En_1_Fig3_HTML.jpg](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781484269725/files/images/510354_1_En_1_Chapter/510354_1_En_1_Fig3_HTML.jpg)

Figure 1-3

Acceptance Test-Driven Development

The diagram describes the following steps:

1. 1.

    Write an acceptance test and see it fail.

2. 2.

    Write a unit test and see it fail.

3. 3.

    Write code to make the unit test pass.

4. 4.

    Refactor the code.

5. 5.

    Re_pea_t 2–4, until acceptance test passes.

When you look at this process closely, you find that during the development stage, the acceptance test could be failing for quite some time. The feedback loop turns out to be very long, and there is a risk that an always-failed test means no test (protection) at all. Developers could be confused about whether there are defects in the implementation, or whether there is any implementation at all.

To resolve this problem, you have to write acceptance tests in relatively small chunks, testing a tiny slice of the requirement at a time. Alternatively, you could use the fake it until you make it approach, as we are going to use across this book.

The steps remain the same; only an extra fake step is added:

1. 1.

    Write a failed acceptance test.

2. 2.

    Make it pass in the most straightforward way (a fake implementation).

3. 3.

    Refactor based on any code smells (like hard-coded data, magic number, etc.).

4. 4.

    Add a new test based on new requirement (if we need a new acceptance test, go back to step 1; otherwise, the process is just like traditional TDD).

Note that in the second step, you can use hard-coding or a snippet of static HTML to make the test pass. At first glance, that may look redundant, but you will see the power of fake in the next few chapters.

The benefit of this variation is that when a developer is refactoring, there is always a passing acceptance test protecting you from breaking existing business logic. The drawback of this approach is that when a developer doesn’t have enough experience, it can be difficult for them to come up with clean code designs – they could keep the fake in some way (e.g., a magic number, lack of abstractions, etc.).

#### Behavior-Driven Development

Behavior-Driven Development is an agile practice that encourages collaboration among different roles, developers, quality engineers, business analysts, or even other interested parties in a software project.

Although BDD is to some extent a general idea about how software development should be managed by both business interests and technical insight, the practice of BDD involves some specialized tools. For example, domain-specific language (DSL) is used to write tests in natural language that can be easily understood by nontechnical people and can be interpreted by code and executed behind the scenes.

For example, Listing [1-1](https://learning.oreilly.com/library/view/test-driven-development-with/9781484269725/html/510354_1_En_1_Chapter.xhtml#PC1) shows how a requirement can be described.

Given there are \`10\` books in the library

When a user visits the homepage

Then they would see \`10\` books on the page

And each book would contain at least \`name\`, \`author\`, \`price\` and \`rating\`

Listing 1-1

An example of BDD test case

### Prerequisites of TDD

TDD has a strict and crucial prerequisite for developers: how to detect code smells and how to refactor them toward good design. For example, when you find some smelly code (e.g., lack of abstractions or magic numbers) and aren’t sure how to make it better, then TDD alone cannot help you. Even though you are forced to use the orthodox workflow of TDD, you could end up with some unmaintainable tests in addition to poor-quality code.

#### Aware of Code Smell and Refactoring

In his book _Refactoring: Improving the Design of Existing Code_, Martin Fowler listed 68 refactorings. I would recommend this book as almost a mandatory prerequisite for anyone who values clean code and high-quality code. But don’t worry too much; some of the refactorings he mentioned you may have already used in your daily work.

As mentioned earlier, a typical TDD workflow has three steps:

- A test case description requirement (specification).

- Some code to make the test pass.

- Refactor the implementation and tests.

A common misunderstanding is that test code is second tier or doesn’t necessarily have the same importance as production code. I would argue that it is just as important as production code. Maintainable tests are crucial to people who have to make changes later on or add new ones. Every time you refactor, make sure the changes made in the production code are reflected in the test code.

#### Test First or Test Last

The hardest part of applying TDD in your daily workflow is that you have to write tests before you start writing any production code. For most developers, that’s not just different and counterintuitive, but also breaks their own way of working significantly.

Nevertheless, the key to applying TDD is that you should build the fast feedback mechanism first. Once you have it, it doesn’t matter much if you write the test first or last. By fast feedback, I mean that a method or an if-else branch can be tested in a very lightweight and effortless manner. If you add tests after all the functionality has been completed, you are not doing TDD by any means. Because you are missing the essential fast feedback loop – seen as the most important thing in development – you may also be missing the benefits promised by TDD.

By implementing a fast feedback loop, TDD ensures you are always on the right track – safely. It also gives you sufficient confidence to do the further code cleanup. And proper code cleanup can lead to a better code design. Of course, the cleanup does not come automatically; it requires extra time and effort. However, TDD is a great mechanism to protect you from breaking the whole application when you make any changes.

## Techniques That Can Help Implement TDD

For the beginner, it can be challenging when applying TDD as it sometimes feels counterintuitive to test first. In practice, there are common reasons for resistance to TDD:

- For simple tasks, they don’t need TDD.

- For complicated tasks, setting up the TDD mechanism itself can be too difficult.

There are a lot of tutorials and articles out there to describe techniques you should use to do TDD, and some may even involve describing how to split tasks before implementing TDD. However, things discussed in those tutorials are often oversimplified and can be hard to apply to a real-world project directly. For example, in a web application, both the interaction and a considerable portion of business logic now exist in the front end: the UI. The traditional techniques of how to write a unit test to drive back-end logic is already outdated.

### Tasking

Another critical skill required by TDD is splitting a large requirement into smaller chunks through tasking. I would suggest every developer should learn how to split requirements before they even start to write their first test.

There is a classic joke: “how many steps to put an elephant into a fridge?” The answer is three steps:

- Open the fridge.

- Put the elephant in.

- Close it.

When we pick up a task, when we start to think through or discuss all the details, we may soon find we’re trapped by a mountain of technical details and do not know where to start with. Our brain loves explicit and concrete things and hates abstraction – things that are invisible or implicit.

By utilizing some simple tools, we can make the work much more digestible for our brains, and tasking is one of these tools. It can help us divide a big task into smaller ones, which we can then tick off one after another.

For splitting a relatively big task into smaller pieces, a widely used principle is INVEST.

#### Separation Principle – INVEST

The mnemonic INVEST stands for

- Independent

- Negotiable

- Valuable

- Estimable

- Small

- Testable

When splitting a large requirement into smaller tasks, you need to ensure that each task fulfils those features. Firstly, for any given task, you should make it as independent as possible so it can be picked up and done in parallel along with others. Negotiable means it should not be fixed as a contract, and the scope of the task could change based on the trade-off of time and cost. For valuable, each task must provide some business value; the effort to make it should be measurable or has an estimation. Small means a task should be relatively small – a big piece means more unknown features and potentially would make the estimation less accurate. Finally, testable makes sure we know how the done looks like by verifying some key checkpoints.

For instance, when we want to develop a search function for an e-commerce system, we can use the INVEST principle to guide us through the analysis. Searching could be split as a few stories or tasks:

- A user can search products by name.

- A user can search products by branding.

- A user can search products by name and branding.

For user can search products by the name, we can keep using **INVEST** to split one story into a few tasks from a developer’s perspective:

- Maintain the search result in memory (ArrayList + Java Stream API).

- Case-sensitive support.

- Wildcard (regular expression) support.

We can even keep using the same principle to split each item further:

- Write an acceptance test.

- Write code to make the test pass.

- Refactor.

- Write a unit test.

- Write code to make the test pass.

- Refactor.

- And so on.

That would lead us to a well-defined task to hand on and would allow us to verify each step clearly.

#### To-Do list with Post-it

Usually, we can stop at the second round of splitting, since the red-green-refactor is far too detailed in terms of tasking. And too granular tasks means more management effort (tracking those tasks needs more energy). To make the tasks visible, we can put it down on a post-it note and mark a simple tick once it’s done (Figure [1-4](https://learning.oreilly.com/library/view/test-driven-development-with/9781484269725/html/510354_1_En_1_Chapter.xhtml#Fig4)).

![../images/510354_1_En_1_Chapter/510354_1_En_1_Fig4_HTML.png](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781484269725/files/images/510354_1_En_1_Chapter/510354_1_En_1_Fig4_HTML.png)

Figure 1-4

Tasking

By using this simple tool, you can then focus on what you’re going to do and make the progress more accurate when you want to update it to other team members (e.g., in the daily stand-up meeting). By saying a task is 50% done, half of the items on the list are ticked off on the list you made earlier.

## Summary

We walked through the test pyramid and agile testing quadrants and introduced Acceptance Test-Driven Development as the way we write code through this book. When doing ATDD, we’ll keep doing the classic red-green-refactor loop.

Refactoring depends on the sense and experience of identifying code smells. Once you find a code smell, you can then apply the corresponding refactoring technique. And then we may achieve maintainable, human-readable, extendable, and clean code along the way.

TDD always goes along with another powerful practice – tasking. You can use the INVEST principle to help you split a big task into smaller pieces. After the proper splitting, you can gradually improve the basic version and finish the big task iteratively.

In next chapter, we will introduce a concrete example to demonstrate how to apply TDD step by step. Along with that example, we will also cover the fundamental skills needed for implementing TDD, including how to use the jest testing framework and how to do tasking with real-world examples.

## Further Reading

There is extensive debate around TDD – every now and then, you will see people are arguing about whether we need TDD or not or the right way to implement TDD. I found the following articles are really helpful in understanding some of those arguments:

- Uncle Bob has [a great article](https://blog.cleancoder.com/uncle-bob/2016/11/10/TDD-Doesnt-work.html) discussing test-first or test-last approaches. If you haven’t read it yet, I highly recommend you do.

- The latest and most famous debate regarding TDD came from David Heinemeier Hansson (DHH) (author of _Ruby on Rails_), Kent Beck, and Martin Fowler; you can [find more here](https://martinfowler.com/articles/is-tdd-dead/).
