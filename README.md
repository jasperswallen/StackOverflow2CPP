# StackOverflow2CPP
**Converts StackOverflow questions to CPlusPlus.com**

This is a proof of concept demonstrating how a website can essentially be turned into a different website with simple CSS changing and blocking.
Essentially, it blocks all content from sstatic and replaces it with a custom stylesheet. Additionally, since Chrome supports the `content` CSS tag, it is able to insert fake content. Any extension could theoretically do this maliciously.


To-do:
- [x] Add fake elements to search box
- [ ] Need to add fake elements to replicate extra nav elements and user login
- [ ] Make this work well on every StackOverflow page (not just questions)
- [ ] Upload to Chrome Web Store
- [ ] Potentially port this to Safari/Firefox? 
