---
layout: "../../layouts/PostLayout.astro"
title: "Eu criei um Sistema de Registro de Vendas completo funcional(básico)"
author: Astro Learner
description: "I had some challenges, but asking in the community really helped!"
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "Thumbnail of Astro rays."
pubDate: 2024-03-06
category: ["next.js", "postgresql"]
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

# Eu criei um Sistema de Registro de Vendas completo e funcional (básico)

<p class="postDate">6 de Março, 2024</p>

Se você leu a sessão Sobre deste site, sabe que desde criança eu criava blogspots pra várias coisas que gostava.
Uma vez tentei criar um blogspot pra promover a empresa do meu pai. Claro, como eu ainda era criança, meu conhecimento na época não era suficiente pra conseguir um resultado legal, e acabei deixando de lado.

O desejo de inovar a empresa do meu pai já vem de um bom tempo. Mas desta vez resolvi fazer algo diferente (e mais útil).
Criei um Sistema de Registro de Vendas, pois meu pai desde sempre anota seus registros de vendas de serviços e compras pro estoque com... notinhas de papel.

Vendo isso, tomei a iniciativa e criei este projeto usando Next.js e Shadcn UI. O resultado final ficou assim:

![Tornearia Pettres](../../../public/pettres.png)

## O que eu aprendi

Eu tinha usado Next.js apenas uma vez antes, e o motivo da escolha pra este projeto é claro: me permite alta escalabilidade e rotas dinâmicas, tudo o que um sistema de registro de vendas precisa.

Também usei PostgreSQL pra armazenar as credenciais de login junto com NextAuth.js, e criei um middleware simples pra impedir qualquer tentativa de acesso sem uma sessão ativa.

Definitivamente a parte mais complicada foi a criação do middleware. Foi a última feature que implementei e a mais demorada - fiquei uns 2 dias testando vários tipos e lógicas diferentes. Mas o que importa é que consegui, e claro, aprendi um conceito muito útil e importante (com segurança não se brinca).

## Shadcn UI

Outra coisa que usei foi o framework de UI Shadcn, e me surpreendi com a facilidade de implementar os componentes, alterá-los com vários temas e defaults.

Eu nunca tinha usado muito frameworks que usam Tailwind, mas desta vez agradeço por ter tentado de novo. Sendo sincero, talvez daqui pra frente eu use apenas Tailwind e aposente, por ora, o SCSS. Ambos são ótimos mas curti como trabalhei com Tailwind.

Enfim, a criação deste sistema de vendas me deu uma experiência com conceitos que eu conhecia mas não tinha aplicado em algo real, que tinha necessidade de utilizá-los. Quebrou certos preconceitos com essas tecnologias, e mais conhecimento pro meu acervo. 

## Conclusão

No final das contas, consegui criar algo útil que vai facilitar a vida do meu pai e modernizar um pouco o negócio dele. O projeto tá básico ainda, mas funcional, e isso já é uma vitória. No futuro adiciono relatórios, gráficos e outras features mais avançadas. Por enquanto, serve bem, palavras dele(mas ainda guarda notinhhas).

</div>
</div>
</main>
</PostLayout>
