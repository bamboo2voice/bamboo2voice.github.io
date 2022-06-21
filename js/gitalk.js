var gitalk = new Gitalk({
  clientID: 7b922a089cd739796e32,
  clientSecret: 2b89942dc3f2b54aeb0a5df559942b814783f2ff,
  repo: https://github.com/bamboo2voice/bamboo2voice.github.io,
  owner: bamboo2voice,
  admin: bamboo2voice,
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')