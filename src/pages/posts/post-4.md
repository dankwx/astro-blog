---
layout: "../../layouts/PostLayout.astro"
title: "Meu mais novo maior projeto."
author: dankwx
description: "Criando uma... rede social."
image:
  url: "https://eternizing-v2.vercel.app/"
  alt: "Thumbnail"
pubDate: 2024-07-26
category: ["next", "supabase", "supabase-auth"]
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

# Meu mais novo maior projeto

Talvez eu esteja um pouco tarde em dizer que comecei, pois dei início a este projeto já tem umas duas semanas.. mas se
comparar o tempo que ele pode levar para terminar, estou na hora certa.

Ano passado, 2023, comecei um projeto "eternizing", no qual seria basicamente uma rede social, com o propósito de "eternizar"
descobertas das pessoas, mais precisamente musicas e canais de youtube.

Dessa forma, as pessoas podem salvar a música ou o artista que elas gostam, e deixar explícito e público a data em que elas já
conheciam essa tal.</br>Assim, se uma música viralizasse no TikTok por exemplo, ela poderia mostrar que em seu perfil, ela já tinha
reinvindicado essa música anos atras.

Essa é o resumo mais simples que posso fazer, mas emfim, eu desisti desse projeto pouco tempo depois que comecei, motivos pessoais
que levaram a eu não ter tanta vontade em continuar algo que ainda estava no zero.

Mas agora, há pouco tempo, comecei o "eternizing-v2". Ressucitei essa idéia, mas voltei com mais conhecimento e vontade, e estou
gostando do caminho que está levando até então.

## A stack que eu escolhi pra esse projeto ambicioso

Pela primeira vez estou usando Supabase para produção, tanto para database como para autenticação com supabase-auth.
Next com Typescript. Comecei com Google Authentication e Google Firebase para armazenamento, mas felizmente migrei para Supabase.

<p class="postDate">26 de Julho, 2024</p>

Eternizing.

</div>
</div>
</main>
</PostLayout>
