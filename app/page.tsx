const whatsapp = "https://wa.me/5514988044964?text=Ol%C3%A1%21%20Vi%20o%20card%C3%A1pio%20no%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";

const menu = [
  {
    id: "acai",
    title: "Açaí",
    eyebrow: "Monte do seu jeito",
    items: [
      { name: "Açaí 330 ml", price: "R$ 25,00", description: "Açaí, leite condensado e 2 frutas à sua escolha." },
      { name: "Açaí 440 ml", price: "R$ 32,00", description: "Açaí, leite condensado, 2 frutas e 2 acompanhamentos à sua escolha." },
    ],
    note: "Frutas: banana, morango, kiwi, manga e uva. Acompanhamentos: granola, sucrilhos, paçoca, marshmallow, amendoim e confeti.",
  },
  {
    id: "roletas",
    title: "Roletas",
    eyebrow: "Para compartilhar",
    items: [
      { name: "Roleta Tropical", price: "R$ 35,00", description: "3 frutas, 1 acompanhamento e 1 creme." },
      { name: "Roleta de Açaí", price: "R$ 36,00", description: "Uma combinação caprichada de açaí e acompanhamentos." },
    ],
  },
  {
    id: "gelados",
    title: "Milk-shakes e sorvetes",
    eyebrow: "Refresque seu dia",
    items: [
      { name: "Milk-shake de sorvete 440 ml", price: "R$ 20,00", description: "Consulte os sabores disponíveis." },
      { name: "Milk-shake de açaí 440 ml", price: "R$ 25,00", description: "Cremoso e feito na hora." },
      { name: "Sorvetes", price: "+ de 30 opções", description: "Consulte os sabores com a nossa equipe." },
    ],
  },
  {
    id: "doces",
    title: "Churros espanhol",
    eyebrow: "Doces",
    items: [
      { name: "Porção com 10 unidades", price: "R$ 20,00", description: "Acompanha doce de leite e brigadeiro." },
      { name: "Adicionais", price: "R$ 3,00 cada", description: "Brigadeiro, creme de wafer, creme de cookies ou creme de avelã." },
    ],
  },
  {
    id: "salgados",
    title: "Crepes",
    eyebrow: "Feitos na hora",
    items: [
      { name: "Frango com catupiry", price: "R$ 15,00" },
      { name: "Frango com queijo", price: "R$ 15,00" },
      { name: "Presunto e queijo", price: "R$ 13,00" },
      { name: "Pizza", price: "R$ 15,00" },
      { name: "Calabresa com queijo", price: "R$ 13,00" },
      { name: "Queijo", price: "R$ 13,00" },
    ],
  },
  {
    id: "lanches",
    title: "Lanches naturais",
    eyebrow: "Leves e saborosos",
    items: [
      { name: "Frango", price: "R$ 12,00", description: "Patê de frango, queijo, tomate, cenoura ralada e alface." },
      { name: "Salame", price: "R$ 15,00", description: "Salame, queijo, tomate, cenoura ralada e alface." },
      { name: "Presunto e queijo", price: "R$ 12,00", description: "Presunto, queijo, tomate, cenoura ralada e alface." },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    eyebrow: "Para acompanhar",
    items: [
      { name: "Água sem gás", price: "R$ 4,00" },
      { name: "Água com gás", price: "R$ 5,00" },
      { name: "Refrigerante lata", price: "R$ 6,00" },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <img src="/logo-top.png" alt="Açaiteria Top Sorveteria" />
          <span>Açaiteria Top</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="button small" href={whatsapp} target="_blank" rel="noreferrer">Pedir agora</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">O sabor mais TOP de Pratânia</p>
          <h1>Seu momento mais gostoso começa aqui.</h1>
          <p className="lead">Açaí caprichado, sorvetes, crepes e muito mais. Escolha seus favoritos e peça pelo WhatsApp.</p>
          <div className="hero-actions">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Fazer meu pedido</a>
            <a className="text-link" href="#cardapio">Ver cardápio <span>↓</span></a>
          </div>
          <div className="quick-info">
            <span><b>Todos os dias</b> 13h às 22h</span>
            <span><b>Entrega em Pratânia</b> R$ 2,00</span>
          </div>
        </div>
        <div className="hero-gallery" aria-label="Produtos em destaque">
          <img className="hero-main" src="/acai-copo.jpg" alt="Copo de açaí com frutas e confetes" />
          <img className="hero-float" src="/roleta-acai.jpg" alt="Roleta de açaí com frutas e acompanhamentos" />
          <span className="fresh-badge">feito com<br/><strong>carinho</strong></span>
        </div>
      </section>

      <section className="categories" aria-label="Categorias do cardápio">
        {menu.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
      </section>

      <section className="menu-section" id="cardapio">
        <div className="section-heading">
          <div><p className="kicker">Escolha o seu</p><h2>Nosso cardápio</h2></div>
          <p>Preços atualizados e muita coisa gostosa esperando por você.</p>
        </div>
        <div className="menu-grid">
          {menu.map((section, index) => (
            <article className={`menu-card ${index < 2 ? "featured" : ""}`} id={section.id} key={section.id}>
              <p className="card-eyebrow">{section.eyebrow}</p>
              <h3>{section.title}</h3>
              <div className="items">
                {section.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <div><h4>{item.name}</h4>{item.description && <p>{item.description}</p>}</div>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
              {section.note && <p className="card-note">{section.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="feature-strip">
        <img src="/crepes.jpg" alt="Crepes feitos na hora" />
        <div>
          <p className="kicker">Do doce ao salgado</p>
          <h2>Tem opção para todo mundo.</h2>
          <p>Peça sozinho, divida com a família ou monte aquela combinação do seu jeito.</p>
          <a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
        </div>
      </section>

      <section className="contact" id="contato">
        <div>
          <p className="kicker">Fale com a gente</p>
          <h2>Bateu a vontade?</h2>
          <p>Estamos na Rua Capitão Maneco, Centro, Pratânia - SP.</p>
        </div>
        <div className="contact-cards">
          <a href={whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp</span><b>(14) 98804-4964</b></a>
          <a href="https://www.instagram.com/acaiteria_e_sorveteria_top/" target="_blank" rel="noreferrer"><span>Instagram</span><b>@acaiteria_e_sorveteria_top ↗</b></a>
          <div><span>Pagamento</span><b>Cartões, Pix e dinheiro</b></div>
        </div>
      </section>

      <footer>
        <img src="/logo-top.png" alt="" />
        <p>© Açaiteria Top Sorveteria · Pratânia, SP</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fazer pedido pelo WhatsApp">Pedido pelo WhatsApp</a>
    </main>
  );
}
