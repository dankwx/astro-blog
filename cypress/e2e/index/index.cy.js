describe("Testes na página index", () => {
  beforeEach(() => {
    // Carrega a página '/' antes dos testes
    cy.visit("http://localhost:8080/");
  });

  it("Deve carregar a página corretamente", () => {
    // Verifica se o título da página está correto
    cy.title().should("eq", "Daniel Kondlatsch - dankwx");

    /* Cada página recebe um layout, esse layout sempre recebe um parâmetro title, ou seja, se a página
    index não tiver o exato "Daniel Kondlatsch - dankwx", isso significa que outra página está sendo
    carregada */

    // Verifica se as principais sections da home page estão presentes
    cy.get(".apresentationSection").should("exist");

    cy.get(".postSection").should("exist");

    cy.get(".personalSection").should("exist");
  });

  it("Deve verificar se os posts são clicáveis", () => {
    // Clique no primeiro post
    cy.get(".card").first().click();

    // Verifica se após o clique no card, a url atual contém /posts/, se sim, significa que está em um post
    cy.url().should("include", "/posts/");
  });
});
