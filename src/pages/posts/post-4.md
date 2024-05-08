---
layout: "../../layouts/PostLayout.astro"
title: "Eu comecei um novo projeto, e ele é complexo."
author: Astro Learner
description: "I had some challenges, but asking in the community really helped!"
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "Thumbnail of post."
pubDate: 2024-03-18
category: ["next", "prisma"]
---

<style>
  main{
    width: 100%;
    height: 100%;
  }

  .markdownContent{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .markdownContent p{
    margin-top: 1em;
    margin-bottom: 1em;
  }
  /*.markdownBase{*/
  /*  width: 85%;*/
  /*}*/
  .postDate{
    --tw-text-opacity: 1;
    color: rgb(91, 91, 91);
    margin-bottom: 2em;
  }
  .markdownContent p{
    line-height: 1.8em;
    font-size: 1.2rem;
  }

  .markdownContent h2{
    font-size:1.8rem
  }



  .markdownBase img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  .imgContainer{
    display: flex;
    flex-direction: column;
  }

  .imgContainer a{
    font-size: 1em;
    margin: 0em;
    margin-bottom: 1em;
    text-align: center;
    text-decoration: none;
    color: #415a77;
  }

img:last-child{
  width: 100%;
  height: 100%;
}
</style>

<PostLayout>
<main>
<div class="markdownContent">
<div class="markdownBase">

# Eu comecei um novo projeto, e ele é complexo.

Post em breve comm mais detalhes

<p class="postDate">18 de Março, 2024</p>

Eternizing.

</div>
</div>
</main>
</PostLayout>
