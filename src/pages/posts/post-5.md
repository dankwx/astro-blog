---
layout: "../../layouts/PostLayout.astro"
title: "Atualização na minha rede social"
date: 2025-10-21
category: ["Atualizações", "nextjs", "supabase", "frontend"]
description: "Novidades sobre o desenvolvimento da minha rede social."
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

# Atualização na minha rede social

<p class="postDate">21 de Outubro, 2025</p>

Depois de mais de um ano desde que comecei o projeto Mirsui, venho trazer algumas atualizações.<br/><br/>
Primeiro, as mudanças mais notáveis foram na infraestrutura:
Migrei completamente do Firebase pro Supabase. O Firebase serviu bem no início, mas quando precisei fazer queries mais complexas no banco, ficou claro que precisava de algo mais robusto. Agora uso Supabase tanto pra autenticação quanto pro banco de dados.<br/><br/>

A mudança foi certeira e facilitou muito gerenciar o fluxo de dados. Centralizar autenticação e banco num lugar só ajudou demais. As funções RPC e a possibilidade de usar cronjobs facilitaram várias áreas do site - especialmente porque o projeto roda em Next.js e, por estar hospedado na Vercel/web, não dá pra rodar cronjobs nativamente no backend.

Além dessas mudanças técnicas, o site cresceu bastante em features. A função principal continua sendo registrar e salvar músicas, provando a data que você escutou primeiro, mas agora também dá pra criar playlists e apostar pontos pra "prever" o sucesso (ou fracasso) de uma música. Se acertar, ganha pontos; se chegar perto, ganha pontos parciais baseado em quão próximo ficou do resultado real.

## Prophet

"Prophet" é só um placeholder por enquanto pra essa feature de prever sucessos. Ainda não decidi um nome definitivo, mas vale a pena pensar bem nisso - essa é a parte gamificada do site e, mesmo não sendo o hook inicial pra quem descobre o projeto, depois que a galera conhece, é o que mais vicia.

## Progresso atual

O site já tem a maior parte das funcionalidades propostas implementadas, falta principalmente polir o estilo e UX. Por isso já vou adquirir o domínio em breve pra deixar tudo mais profissional.

## Próximos passos

Agora que a base tá sólida, o foco vai ser:
- **Refinamento do design** - melhorar a UI/UX geral, deixar tudo mais intuitivo
- **Performance** - otimizar queries e adicionar caching onde faz sentido
- **Features sociais** -  feed personalizado, talvez até um chat
- **Mobile app** - considerando fazer com React Native pra ter presença mobile nativa

O projeto começou como uma ideia meio aleatória de resolver um problema que eu tinha (provar que escutei uma música antes dela estourar), mas tá evoluindo pra algo bem maior. Ver o sistema de apostas funcionando e pensando em toda a dinâmica de gamificação que dá pra adicionar tá sendo bem legal.

Se quiser testar ou acompanhar o desenvolvimento, pode ir no github do projeto, aqui no footer você acha. Em breve vai ter o domínio oficial. Por enquanto, continuo desenvolvendo e iterando. feedback é bem-vindo!



</div>
</div>
</main>
</PostLayout>
