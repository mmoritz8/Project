const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const bookSeed = [
  {
    title: "Wicca Wikka Wut?",
    author: "Mad. M.",
    body:
      "It seems as if something is not right. No way for the single individual to reach people. For instance: what if some random person was chosen by Jesus to be visited? Jesus leaves and that one person is left wordless. No photos satisfy because of photoshop and people would throw him in a mental hospital. Everyone's constantly onto the next thing. Even if we reach out and try to find out, we are lied to and fed scripts. All people right now are over-flooded with the information. Did you watch this year's Democratic Debate? That wasn't a debate! That was legit giving the American People more stupid shit to argue about. But at least now we have more facts and can sound smarter. But really- isn't there just ONE government? If we know that one the short term, having a strong Democratic leader shifts the stance in society more Republican and vice versa... Couldn't we say it just depends on how the Government wants to influence the next generation? That may seem far-fetched, but these are the same people who dressed up as aliens to mentally stress out one guy. They know Social and Psychological Behaviors better than anyone else. So... Why are we all so angry and unhappy?",
    date: new Date(Date.now())
  },
  {
    title: "Gross.",
    author: "Mad. M.",
    body:
      "The Common well-being is not being protected by producers of our food and clothing. Doctors aren't even ALLOWED to talk about diet or nutrition when it comes to your health because they will be sued by the food industry which means to murder us all. What The Health discusses WHO and the nutrition side. Did you know cigarettes have carcinogens? How about chicken?",
    date: new Date(Date.now())
  },
  {
    title: "What's That Scented Soap?",
    author: "Mad. M.",
    body:
      "Our cleaning products containing mysterious chemicals (that are toxic to the human body. As small as a teaspoon can kill you.) under the name of parfum. This umbrella word can mean hundreds of un-disclosed chemicals in our face-wash, shampoos, cleaning supplies, and clothes! But it's not just the big-corporation-industry.",
    date: new Date(Date.now())
  },
  {
    title: "Doc. Doc.",
    author: "Mad. M.",
    body:
      "Hospitals are all guilty not reporting shit doctors (psychopaths included, not just the idiots) due to concerns on their reputation. They pass them around rather than report them because they're too damn worried about how much attention it would bring them. Listen to Dr. Death for that horrifying story.",
    date: new Date(Date.now())
  },
  {
    title: "Medical Devices",
    author: "Mad. M.",
    body:
      "Doctors are not told if medical devices are tested before they actively provide them to people. Nor do most doctors know that companies do NOT look into long-term effects of these products. In their short-term checks with the experimental patients there are reports of them lying to get a product passed! The medical device industry does not have to verify if it even works or is safe to the human body to produce it and tell doctors to sell it and give them bonuses for selling it. Stink is a great Netflix documentary on this topic. Think about it: these are people who need surgeries for back pain, chronic suffering and health emergencies that could mean life or death.",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Nadine, Save US!",
    author: "Mad. M.",
    body:
      "There are no psychological counselors in any hospitals DESPITE years of studies proving emotional health to directly impact your physical health. Stress kills. Truly. Apparently it's the cause behind the aging our skin. In a small child, too much stress can lead to cell-death. Don't get me wrong: stress in healthy doses actually leads to excellence- but toxic amounts will trigger death in kids because the environment is not suitable for survival.",
    date: new Date(Date.now())
  }


];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
