---
title: "The mighty `Git`osaurus"
date: "2020-10-02"
tags: ["Web Development", "Computer Science"]
summary: "In this article, I aim to explain what Git and services like GitHub, GitLab, and Bitbucket are."
---

#### What is Git?

Have you ever made an experiment? I bet you did, even if you are not aware of it. Think of a 5 year old that is going to play with her watercolor set, but only has 3 primary colors (yellow, red, blue). She sticks her brush into red and forgets to clean it before sticking it to somewhere else and sticks it to blue. She doesn't care and keeps on painting, but at one point she realizes, at the place where red and green kinda merged, she has another color: purple! She's a smart cookie. Now she understands that she can get different colors by mixing them. She cleans her brush, now mixes red and yellow, gets orange. After another cleaning session, she mixes blue and yellow and has green. She adds some more yellow to it, and she gets light green! Experimenting got her an infinite amount of colors, but she only started with three.

Most experiments take time, some more than the others. Researchers have lab notebooks that they use when keeping track of their experiments. If something is being changed, the 4 great w's need to be recorded: what, why, when, and by whom? Until something goes wrong you'll never understand why you keep records of these. But when it does, they become your only evidence, pieces of the puzzle to help you understand what went wrong, so the next time you'll do it better.

Developing software is also some sort of experimenting, you need to add some pieces, and they might not work all the time. Or even if they do work, you might not be happy with their performance or decide to do something else instead. So software developers also need some sort of lab notebooks and theirs is even cooler (I'll tell why a little bit later), and it is called a **version control system**. So every step of their experiment becomes a **version** of a software.

A **[version control system](https://en.wikipedia.org/wiki/Version_control)** tracks the changes and keeps every version, and facilitates collaboration between developers by making it possible to contribute new code with the confidence of knowing you can recover any version at any given time. Also, you can easily see what changes were made at what time, by whom and possibly why.

Oh, I said a very cool thing there: **with the confidence of knowing you can recover any version at any given time**. That is what makes their lab notebook way cooler than any other, you can take a step back. With any other experiment, at the end of the experiment, your resources are mostly gone. The 5 year old smart cookie mentioned in the first paragraph cannot isolate the yellow paint back from the orange. The yellow paint that is mixed with red to make the orange paint is a part of some other color now. If she wants to repeat her color experiments, she has to ask for more paint. But programmers have the freedom to write a block of code, not like it, and take it back.

The developer community is also very cool for other reasons, and one of them is the open-source project concept. **[An open-source project](https://en.wikipedia.org/wiki/Open-source_software)** is maintained by many people, and all people are free to use, study, modify, and distribute the project itself. It is something humans do for humans. The open-source software projects can be maintained by many people who are all around the world that don't know each other, and this is all possible because of the version control systems (and many people advocating for it!).

So let's come back to our real purpose, which is explaining Git. **[Git](https://en.wikipedia.org/wiki/Git)** is the most used (and loved) version control system software developers use. It can also be called a **[distributed version control system (DVCS)](https://en.wikipedia.org/wiki/Distributed_version_control)**, which simply means that it doesn't rely on a single location for a backup, but is distributed to every developer's local computer that is working on that project. When you use git, you can contribute to projects from any time zone, and you can always keep track of what is done, by whom, when, and why, also take the previous versions back if you need to. **[A git repository](<https://en.wikipedia.org/wiki/Repository_(version_control)>)** is a folder that encompasses everything associated with that project. The copy of the repository is stored in a server, and also a local copy where you can change things is kept on your computer.

#### How to use Git

You can just download git from [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and initialize a git repo from the command line. Just change the current directory to the repo you want to use version control, then use the 'git init' command. This adds a local Git repository to the project. Now you can start using git on your computer.

These are the basic git commands:

- `git init`: initializes a brand new git repository
- `git add`: takes a snapshot of the changes that are made (stages a change).
- `git commit`: saves the previously taken snapshot to the project history, wants a verbal explanation of the changes being made.
- `git status`: shows the status of changes. If you changed things inside a file that was being tracked but didn't stage them the status will be **modified**, if you staged them but didn't commit them it will be **staged**, or if you create a new file, as it didn't exist in the previous snapshot it will be **untracked**.
- `git branch`: shows the branches being worked on locally.
- `git push`: updates the remote repository with any commits that are made locally.
- `git pull`: updates the local repository with any updates from the remote repository.
- `git merge`: merges changes made in one branch to another. A developer might be developing a feature on a branch and might merge the feature with the main repository when it's completed.
- `git clone`: creates a local clone of a project that exists as a remote repository.

#### GitHub, GitLab, Bitbucket

[GitHub](https://github.com/), [GitLab](https://gitlab.com/explore), and [Bitbucket](https://bitbucket.org/product/) are websites that host Git repositories, and you don't need them to use git, but they sure are useful.

The services like GitHub, GitLab and Bitbucket are needed when you are collaborating with other people because you'll need a repository to keep in a central computer within everybody's reach. They also add other features like creating pull requests, reviewing code, and deploying.

#### Workflow

The workflow of Git is branch-based. Each feature should be developed in its own branch, and the branch names should be descriptive and must indicate the work being done. Changes made on any branch that is not the main branch don't affect the main branch, so you can experiment safely. Anything on the main branch, on the other hand, is deployable. When you finish a feature you merge your branch with the main branch, and the process continues like that.

A project will consist of many branches. Each branch will consist of numerous commits, and each commit will be considered as a single, separate unit of change. Each commit will be associated with a message indicating why that particular change was made. When the feature is done, the person or people who work on that branch will open a pull request to merge it with the main branch, and it will be reviewed by a person in the team. The code will be discussed and if additional work is needed (a bug fix or maybe something missing) the developer can fix it in your branch and push the change.

#### Resources:

1. https://git-scm.com/
2. [GitHub- Git handbook](https://guides.github.com/introduction/git-handbook/)
3. [Atlassian- Tutorials](https://www.atlassian.com/git/tutorials/what-is-git)
4. https://www.freecodecamp.org/
5. Wikipedia- , [GitHub](https://en.wikipedia.org/wiki/GitHub), [GitLab](https://en.wikipedia.org/wiki/GitLab), [Bitbucket](https://en.wikipedia.org/wiki/Bitbucket)
