---
layout: "../../layouts/PostLayout.astro"
title: "O que me levou a escolher entre Astro e não Next.js"
pubDate: 02-16-2024
description: "Por que eu escolhi Astro.js"
author: "Daniel Kondlatsch"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

<style>
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  main p{
    line-height: 1.8em;
    font-size: 1.2rem;
  }

  main h2{
    font-size:1.8rem
  }

</style>

<PostLayout>
<main>

Quando a idéia de criar esse blog me veio a cabeça, eu sabia que teria uma escolha difícil entre
qual framework escolher, e eram apenas duas opções, baseado na quantidade de elogios que via
na internet, **Astro.js** e **Next.js**.

## A grande dúvida

Foi uma escolha difícil, porque Next.js é um framework muito sólido, maduro e com
uma grande comunidade já estabelecida. Eu já tinha usado Next.js uma vez, em um projeto de faculdade, mas acabei
não concluindo porque meu professor da época instruiu todos alunos a usarem PHP com Laravel,
para ficar mais normalizado todos trabalhos, então fui obrigado a deixar minha Dashboard bem
feita e polida em Next.js pra trás.(Mas foi a última vez que usei PHP na minha vida).

Durante o processo de criação desse meu projeto, não encontrei problema nenhum, e achei a 
curva de aprendizado do Next.js muito confortável. Mas é ai que entra o grande ponto
da questão. Se eu utilizei o Next.js gostei e me adaptei rápido, por que eu acabei
escolhendo Astro, mesmo sendo menos conhecido?

## O motivo da decisão

Depois de pensar por um tempo, destrinchei minhas necessidades no que, quais ferramentas
e como utilizaria elas para o projeto, foi aí que tive a clareza e tomei minha decisão,
baseado na minha necessidade.

O framework que eu deseja tinha que atender a certos pontos:

1. **Suporte SSR**: Como meu principal foco e ponto principal na criação do meu blog é
performance, sem dúvidas utilizar sites estáticos é a melhor opção neste cenário.

2. **Suporte React**: Sou um desenvolvedor que utiliza React em todos meu projetos,
então ter suporte a React era o cenário ideal.

3. **Documentação**: Como eu não tinha experiência sólida em ambos os frameworks, ter
uma boa documentação para eu tirar minhas dúvidas caso precise era essencial,
para evitar dificuldades no meio do caminho.

4. **Suporte Markdown**: Até então nunca tinha utilizado arquivos .md na criação de sites,
mas depois de pensar e analisar casos na internet, vi que para a criação de um webiste como
um blog, é uma grande utilidade ter a criação de conteúdo através de arquivos .md, ainda mais
se tratando de um site SSR.

Se parar para analisar, tanto Astro como Next atendem muito bem todos estes pontos.

Mas isso não me deixou mais indeciso. A sacada foi ver o que cada framework oferece **além**
do que eu realmente estava precisando.\
Simplificando: Preciso de um site que seja rápido, e tenha suporte a arquivos .md, não
vai ser algo com mímina interatividade, se existir.

Aí que eliminei o Next.js da minha escolha. Pois vi que seria um "overkill" utilizar 
ele pra um simples projeto, eu não utilizaria rotas dinâmicas ou SSR no meu projeto, e todas
outras ferramentas que ele oferece para a criação de um website complexo pra vendas e etc.\
**Fiquei com Astro**.

## Como eu me saí aprendendo Astro do zero

Comecei. Abri a documentação no site deles e comecei com a criação.\
Surpreendemente, foi muito mais fácil que qualquer outro framework que utilizei.

Aliás, um dos pontos que tinha levantado era o suporte com React, mas...\
Não utilizei. Eu que estou a quase 3 anos apenas utilizando React em meus projetos, resolvi
utilizar os arquivos .astro.

O motivo disso é a facilidade de criar toda coisa que eu precisava, performático e prático,
sem sentir falta do React. Me adaptei muito rápido com a sintaxe do Astro e consegui
criar minha aplicação e todas funcionalidades que desejava com facilidade.

## O que brilhou meus olhos

Parece que o Astro se encaixou perfeitamente e supriu todas minhas necessidades,
nada poderia ser melhor. Mas além disso, outras coisas me deixaram confiante nessa
escolha, como por exemplo esse gráfico de comparação com outros frameworks:

<img src="https://marinegeo.github.io/assets/img/MarineGEO_logo.png" alt="MarineGEO circle logo" style="height: 100px; width:100px;"/>



## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

</main>
</PostLayout>
