---
layout: "../../layouts/PostLayout.astro"
title: Linux daily driver..
author: Astro Learner
description: "descricao etc etc"
image:
  url: "https://docs.astro.build/assets/arc.webp"
  alt: "Thumbnail of Astro arcs."
pubDate: 2024-02-26
category: ["windows", "linux"]
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


</style>

<PostLayout>
<main>
<div class="markdownContent">
<div class="markdownBase">

# Linux daily driver..

<p class="postDate">26 de Fevereiro, 2024</p>

Sempre fui um nômade em relação a sistemas operacionais. Sempre mudando pelos mesmos motivos: entre a satisfação de usar Linux com sua capacidade enorme de personalização e principalmente por ser opensource, e a praticidade do Windows..

## Não tinha mais necessidade

Por muito tempo fui defensor do Linux pela possibilidade de fazer N coisas com uma sensação de liberdade, programas sem telemetria e aplicativos específicos que só conseguia usar no Linux (principalmente relacionados a terminal). Mas tem algo que, quanto mais o tempo passa, mais tira a necessidade do Linux como sistema operacional instalado definitivamente, o WSL.

Mesmo conhecendo o WSL há um tempo, tinha minhas dúvidas e receio de não usar os aplicativos onde devem ser utilizados originalmente, no próprio sistema. Mas com o tempo esse preconceito passou e percebi: ter a possibilidade de usar o Windows e também poder rodar aplicativos Linux, sem precisar de dual boot, me colocou num ambiente confortável.
## Outro problema (pessoal) ao usar Linux

Uma dificuldade que tinha usando Linux como daily driver é que não consigo ficar em apenas uma distro. Sempre é assim: faço distro hopping por umas 5 distros diferentes, fico com algumas delas, mas no máximo em algumas semanas depois sinto vontade de abandonar e resetar tudo em outra distro.

Por mais que eu curta reconfigurar tudo denovo do início, isso sempre consome muito tempo, e não é pra algo que agrega tanto assim.. um ciclo vicioso

## As primeiras coisas que fiz ao voltar pro Windows

A volta ao Windows não foi difícil, instalei os drivers, WSL, configurei e adicionei SSH pro terminal, baixei o VSCode com as extensões relacionadas a container e WSL e falando sobre programação, tava tudo prontinho já

Depois, desativei todos os serviços de telemetria possíveis do Windows e criei regras pra proibir o menu inicial de ter acesso à internet(minha mania pessoal, satisfatório fazer isso)

## E foi isso

Ter a possibilidade de ter todos meus programas e jogos num lugar só tira o desconforto e coloca um fim no dilema de sacrificar um bom ambiente dev por um local pra jogos. Juntar tudo em um lugar só é o maior conforto que uma pessoa que passa muito do seu tempo no PC e usa pra trabalhar pode ter

No fim das contas, não abandonei linux reaal real, ele tá ali no WSL quando eu preciso, é o melhor dos dois mundo.

</div>
</div>
</main>
</PostLayout>
