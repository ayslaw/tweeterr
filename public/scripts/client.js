/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
 ]
 
 const createTweetElement = function(info) {
  let date = new Date(tweet.created_at).toLocaleDateString();
  return `
  <article class="tweet-header wrapper">
        <header>
          <!-- <div class="left">             -->
            <img class="left" id="pic" src="https://vanillicon.com/v2/5f202e7ab75f00af194c61cc07ae6b0c.svg">
            <h1 class="left">Groovy Bandz</h1>
          <!-- </div> -->
          <h5 class="right">@GroovyBandz</h5>
        </header>
        <p class="message">
          I can't wait until the new SpiderMan comes out!
        </p>
        <footer class="tweet-footer">
          <div>
            <p class="left" ${date}</p>
          </div>
          <div>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
            <i class="fas fa-flag"></i>
          </div>
        </footer>
      </article> `
 }