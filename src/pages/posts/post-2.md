---
layout: "../../layouts/PostLayout.astro"
title: O que me fez desistir do Linux e voltar para o Windows
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

# O que me fez desistir do Linux e voltar para o Windows

<p class="postDate">26 de Fevereiro, 2024</p>

Finalmente a hora chegou, estou escrevendo este post usando Windows.

Sempre fui um "nômade" em relação a sistemas operacionais. Sempre mudando pelos mesmos motivos, entre a satistação de usar Linux
com sua capacidade enorme de personalização, e ser open-source, e entre a praticidade e abrangente quantidade de aplicativos feitos para Windows.

## Não tinha mais necessidade

Por muito tempo fui defensor do Linux pela possibilidade de fazer n coisas com uma sensação de liberdade e programas sem telemetria,
por aplicativos específicos que eu só conseguia utilizar no Linux (principalmente relacionados a terminal), mas tem algo que 
quanto mais tempo passa, mais tira a necessidade do Linux como sistema operacional instalado definitivamente, assim digamos, que é o WSL.

Mesmo conhecendo o WSL a um tempo, tinha minhas dúvidas e receio de não usar os aplicativos onde devem inicialmente serem utilizados, no próprio sistema,
mas com o passar do tempo esse preconceito foi passando e, percebi, ter a possibilidade de utilizar o Windows e também poder utilizar aplicativos Linux, sem precisar
de dual boot, me fez entrar em um ambiente confortável e que, finalmente agora posso dizer que, provavelmente não irei retornar ao Linux por um bom tempo e um 
bom motivo. 

## Outro problema (pessoal) relacionado autilizar o Linux

Uma coisa que tenho dificuldade quando estava utilizando Linux é que eu não consigo realmente ficar em apenas uma distribuição,
sempre é assim: faço uma distro hopping por umas 5 distribuições, e fico com algumas destas 5, mas, no máximo em algumas semanas depois,
me sinto na necessidade de resetar todo meu ambiente e testar outra distro. Por mais que eu me sinta bem reconfigurando todo meu sistema novamente,
isso sempre me consome muito tempo para algo que não realmente me agrega. O motivo desta minha mania é clara: não consigo ficar muito tempo com uma personalização
e quero mudar completamente para outra, também completamente diferente, mudando de Gnome para KDE e etc, assim ficando nesse ciclo vicioso. E o motivo desse vício também é muito claro: a ampla possibilidade de personalização que o Linux oferece me distrai e faz querer ter o conjunto perfeito que agrade meus olhos. E utilizando o Windows, não sinto essa vontade, mais um ponto positivo.

## As primeiras coisas que fiz ao voltar pro Windows

A volta ao Windows não foi difícil, instalei os drivers, o WSL, configurei e adicionei SSH pro terminal, baixei o VSCode e as instalações relacionadas a container
e WSl, e falando sobre programação, estava tudo pronto para desenvolver.s

Já depois, desativei todos serviços de telemetria possíveis do Windows, criei regras para proibir o menu inicial a ter acesso a internet(sinceramente, não há necessidade dos widgets
que o windows oferece).

## Até outro momento, Linux

Ter a possibilidade de ter todos meus programas e jogos num local só tira o desconforto e o coloca um fim no dilema de sacrificar um bom ambiente de desenvolvimento
e local para jogos, unificar tudo em um lugar só é o mais conforto que uma pessoa que passa muito do seu tempo no computador e o usa para trabalhar pode ter.

**TL:DR**: Voltei ao Windows pela praticidade e possibilidade de ter tudo em um lugar só com o apoio do WSL.

👋

</div>
</div>
</main>
</PostLayout>
