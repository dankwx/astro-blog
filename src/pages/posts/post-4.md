---
layout: "../../layouts/PostLayout.astro"
title: "Criando uma rede social"
author: Daniel Kondlatsch
description: "Criando uma... rede social - início"
image:
  url: "https://eternizing-v2.vercel.app/"
  alt: "Eternizing Thumbnail"
pubDate: 2024-07-26
category: ["nextjs", "supabase", "supabase-auth", "RPC"]
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

# Criando uma rede social - início

<p class="postDate">26 de Julho, 2024</p>


Ano passado, em 2023, comecei o projeto "Mirsui", que seria basicamente uma rede social com o propósito de registrar descobertas das pessoas - mais precisamente músicas e canais do YouTube.

A ideia é que as pessoas possam salvar a música ou artista que gostam e deixar explícito e público a data em que já conheciam aquilo.</br>Assim, se uma música viralizar no TikTok por exemplo, você pode mostrar no seu perfil que já tinha descoberto ela anos atrás.

Esse é o resumo mais simples que consigo fazer. Enfim, desisti do projeto pouco tempo depois que comecei - motivos pessoais que me levaram a não ter tanta vontade de continuar algo que ainda tava no zero.

Mas recentemente, comecei o "Mirsui-v2". Ressuscitei a ideia, mas voltei com mais conhecimento e energia, e tô gostando do caminho que tá tomando até agora.

## A stack que escolhi pra esse projeto ambicioso

Pela primeira vez tô usando Supabase em produção, tanto pra database quanto pra autenticação com supabase-auth.
Next.js com TypeScript. Comecei com Google Authentication e Firebase pra storage, mas felizmente migrei pro Supabase.

Uma coisa que tá me ajudando muito são as funções RPC do Supabase. Resumidamente, posso deixar a lógica de consulta como uma function no Supabase, e no meu código só chamar ela passando variáveis. Assim ela me retorna, por exemplo, um select complexo, sem precisar escrever queries gigantes no código - isso separa bem a lógica e contorna algumas limitações da query language do Supabase no frontend.

## O que vem por aí

O projeto ainda tá no começo, mas já tem a base funcionando. Autenticação, registro de músicas, sistema de perfis... tá tomando forma. Nos próximos posts vou compartilhar mais detalhes técnicos e updates conforme o projeto evolui.


</div>
</div>
</main>
</PostLayout>
