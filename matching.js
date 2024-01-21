const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn witt Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const matches=sentence.match(/sumit/gi);
const totalMatch=matches ? matches.length : 0;
console.log(`The word "Sumit" was found ${totalMatch} times in the sentence`);

const position=sentence.search(/sumit/i);
console.log(`The first position of Sumit at ${position}`);