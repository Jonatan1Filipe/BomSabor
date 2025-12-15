// Dados simulados
const recipes = [
  {
    id: 1,
    title: 'Bolo de Chocolate Cremoso',
    description: 'Um bolo de chocolate irresistível com cobertura cremosa',
    image: 'img/bolo-chocolate.jpg',
    prepTime: 60,
    servings: 8,
    difficulty: 'Médio',
    category: 'Sobremesas',
    rating: 5,
    ingredients: [
      '2 xícaras de farinha de trigo',
      '1 xícara de cacau em pó',
      '2 xícaras de açúcar',
      '3 ovos',
      '1 xícara de leite',
      '1/2 xícara de óleo',
      '1 colher de sopa de fermento'
    ],
    steps: [
      'Preaqueça o forno a 180°C',
      'Em uma tigela, misture os ingredientes secos',
      'Em outra tigela, bata os ovos com o açúcar',
      'Adicione o leite e o óleo à mistura de ovos',
      'Misture os ingredientes secos com os líquidos',
      'Despeje em forma untada e leve ao forno por 40 minutos',
      'Deixe esfriar antes de desenformar'
    ]
  },
  {
    id: 2,
    title: 'Massa Carbonara Tradicional',
    description: 'Receita autêntica italiana de carbonara',
    image: 'img/carbonara.jpg',
    prepTime: 30,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Massas',
    rating: 5,
    ingredients: [
      '400g de espaguete',
      '200g de bacon em cubos',
      '4 gemas de ovo',
      '100g de queijo parmesão ralado',
      'Pimenta-do-reino a gosto',
      'Sal a gosto'
    ],
    steps: [
      'Cozinhe o espaguete em água fervente com sal',
      'Enquanto isso, frite o bacon até ficar crocante',
      'Bata as gemas com o queijo ralado',
      'Escorra a massa e misture com o bacon',
      'Desligue o fogo e adicione a mistura de ovos',
      'Mexa rapidamente para criar um molho cremoso',
      'Finalize com pimenta-do-reino e mais queijo'
    ]
  },
  {
    id: 3,
    title: 'Salada Vegetariana Colorida',
    description: 'Salada fresca e nutritiva com ingredientes variados',
    image: 'img/salada.jpg',
    prepTime: 15,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Vegetariano',
    rating: 4,
    ingredients: [
      '1 alface crespa',
      '2 tomates',
      '1 pepino',
      '1 cenoura ralada',
      '1/2 repolho roxo',
      'Azeite de oliva',
      'Limão',
      'Sal e pimenta'
    ],
    steps: [
      'Lave bem todos os vegetais',
      'Rasgue a alface com as mãos',
      'Corte os tomates e o pepino',
      'Rale a cenoura',
      'Fatie finamente o repolho roxo',
      'Misture tudo em uma tigela',
      'Tempere com azeite, limão, sal e pimenta'
    ]
  },
  {
    id: 4,
    title: 'Torta de Morango',
    description: 'Torta delicada com creme e morangos frescos',
    image: 'img/torta-morango.jpg',
    prepTime: 90,
    servings: 10,
    difficulty: 'Difícil',
    category: 'Sobremesas',
    rating: 5,
    ingredients: [
      '200g de biscoito maisena',
      '100g de manteiga',
      '500g de morangos',
      '200ml de creme de leite',
      '200g de cream cheese',
      '1/2 xícara de açúcar',
      'Gelatina de morango'
    ],
    steps: [
      'Triture os biscoitos e misture com a manteiga derretida',
      'Forre o fundo de uma forma com a mistura',
      'Leve à geladeira por 30 minutos',
      'Bata o cream cheese com o creme de leite e açúcar',
      'Espalhe sobre a base de biscoito',
      'Arrume os morangos por cima',
      'Prepare a gelatina e cubra os morangos',
      'Leve à geladeira por 4 horas'
    ]
  },
  {
    id: 5,
    title: 'Pizza Margherita Caseira',
    description: 'Pizza clássica italiana feita em casa',
    image: 'img/pizza.jpg',
    prepTime: 45,
    servings: 4,
    difficulty: 'Médio',
    category: 'Massas',
    rating: 5,
    ingredients: [
      '500g de farinha de trigo',
      '10g de fermento biológico',
      '300ml de água morna',
      '1 colher de sopa de azeite',
      '1 colher de chá de sal',
      'Molho de tomate',
      'Muçarela',
      'Manjericão fresco'
    ],
    steps: [
      'Misture o fermento com água morna e deixe descansar',
      'Adicione a farinha, sal e azeite',
      'Sove a massa por 10 minutos',
      'Deixe descansar por 1 hora',
      'Abra a massa em formato circular',
      'Espalhe o molho de tomate',
      'Adicione a muçarela e manjericão',
      'Asse em forno bem quente por 15 minutos'
    ]
  },
  {
    id: 6,
    title: 'Sopa de Legumes Cremosa',
    description: 'Sopa reconfortante e saudável',
    image: 'img/sopa.jpg',
    prepTime: 40,
    servings: 6,
    difficulty: 'Fácil',
    category: 'Rápido',
    rating: 4,
    ingredients: [
      '2 batatas',
      '2 cenouras',
      '1 abobrinha',
      '1 cebola',
      '2 dentes de alho',
      '1 litro de caldo de legumes',
      'Creme de leite',
      'Sal e pimenta'
    ],
    steps: [
      'Pique todos os legumes em cubos',
      'Refogue a cebola e o alho',
      'Adicione os legumes e refogue por 5 minutos',
      'Acrescente o caldo de legumes',
      'Cozinhe até os legumes ficarem macios',
      'Bata tudo no liquidificador',
      'Volte ao fogo, adicione o creme de leite',
      'Tempere com sal e pimenta'
    ]
  },
  {
    id: 7,
    title: 'Frango Grelhado com Legumes',
    description: 'Prato saudável e saboroso para o almoço',
    image: 'img/salmao.jpg',
    prepTime: 35,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Rápido',
    rating: 5,
    ingredients: [
      '4 filés de frango',
      '2 abobrinhas',
      '2 pimentões',
      '1 cebola roxa',
      'Azeite de oliva',
      'Alho',
      'Ervas finas',
      'Sal e pimenta'
    ],
    steps: [
      'Tempere o frango com sal, pimenta e ervas',
      'Deixe marinar por 30 minutos',
      'Corte os legumes em tiras',
      'Grelhe o frango por 6-8 minutos de cada lado',
      'Em outra panela, refogue os legumes com azeite e alho',
      'Tempere os legumes com sal e pimenta',
      'Sirva o frango com os legumes ao lado'
    ]
  },
  {
    id: 8,
    title: 'Risoto de Cogumelos',
    description: 'Risoto cremoso e aromático',
    image: 'img/risoto.jpg',
    prepTime: 50,
    servings: 4,
    difficulty: 'Médio',
    category: 'Massas',
    rating: 5,
    ingredients: [
      '2 xícaras de arroz arbóreo',
      '300g de cogumelos variados',
      '1 cebola',
      '1 litro de caldo de legumes',
      '100ml de vinho branco',
      'Queijo parmesão',
      'Manteiga',
      'Azeite'
    ],
    steps: [
      'Refogue a cebola picada no azeite',
      'Adicione o arroz e torre por 2 minutos',
      'Adicione o vinho branco e deixe evaporar',
      'Vá adicionando o caldo quente aos poucos',
      'Em outra panela, salteie os cogumelos',
      'Quando o arroz estiver cremoso, adicione os cogumelos',
      'Finalize com manteiga e parmesão',
      'Mexa bem e sirva imediatamente'
    ]
  }
];

// Estado da página
let currentPage = 'home';
let currentRecipeId = null;
let filters = {
  category: 'Todas',
  difficulty: 'Todas',
  maxTime: 120
};
let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
let userComments = JSON.parse(localStorage.getItem('userComments') || '{}');

// Roteador
function navigate(page, id = null) {
  currentPage = page;
  currentRecipeId = id;
  
  // Atualizar o hash da URL
  if (id) {
    window.location.hash = `${page}/${id}`;
  } else {
    window.location.hash = page;
  }
  
  // Atualiza o link do nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${page}`) {
      link.classList.add('active');
    }
  });
  
  // Renderiza a página
  renderPage();
  
  // Scrolla para o topo da página
  window.scrollTo(0, 0);
}

// Renderização da página
function renderPage() {
  const mainContent = document.getElementById('mainContent');
  
  switch (currentPage) {
    case 'home':
      renderHomePage(mainContent);
      break;
    case 'receitas':
    case 'categorias':
      renderRecipesPage(mainContent);
      break;
    case 'receita':
      renderRecipeDetail(mainContent);
      break;
    case 'adicionar':
      renderAddRecipePage(mainContent);
      break;
    case 'sobre':
      renderAboutPage(mainContent);
      break;
    default:
      renderHomePage(mainContent);
  }
}

// Página Home
function renderHomePage(container) {
  const featuredRecipes = recipes.slice(0, 3);
  
  container.innerHTML = `
    <!-- Hero -->
    <section class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/hero.jpg');">
      <div class="hero-content">
        <h1>Descubra Receitas Incríveis para o Dia a Dia</h1>
        <p>Passo a passo simples para cozinhar como um chef!</p>
        <a href="#receitas" class="btn btn-hero">
          Explorar Receitas
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- Featured Recipes -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Receitas em Destaque</h2>
          <p>As receitas mais populares da semana</p>
        </div>
        <div class="recipe-grid">
          ${featuredRecipes.map(recipe => renderRecipeCard(recipe)).join('')}
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="section" style="background: var(--color-gray-light);">
      <div class="container">
        <div class="section-header">
          <h2>Categorias</h2>
          <p>Explore receitas por categoria</p>
        </div>
        <div class="categories-grid">
          ${renderCategories()}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-wrapper">
      <div class="cta-section">
        <div class="container">
          <h2>Compartilhe suas Receitas!</h2>
          <p>Tem uma receita especial? Compartilhe com nossa comunidade!</p>
          <a href="#adicionar" class="btn btn-cta">
            Adicionar Receita
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

// Página Receita
function renderRecipesPage(container) {
  const filteredRecipes = getFilteredRecipes();
  const currentPageNum = 1;
  const recipesPerPage = 6;
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const displayRecipes = filteredRecipes.slice(0, recipesPerPage);
  
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h1>Todas as Receitas</h1>
          <p>Encontre a receita perfeita para você</p>
        </div>

        <div class="filters-container">
          <!-- Filters -->
          <aside class="filters">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              Filtros
            </h3>

            <div class="filter-group">
              <label>Categoria</label>
              <select id="categoryFilter" onchange="updateFilters()">
                <option value="Todas">Todas</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Massas">Massas</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Rápido">Rápido</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Dificuldade</label>
              <div class="difficulty-buttons">
                <button class="difficulty-btn active" data-difficulty="Todas" onclick="setDifficulty('Todas')">Todas</button>
                <button class="difficulty-btn" data-difficulty="Fácil" onclick="setDifficulty('Fácil')">Fácil</button>
                <button class="difficulty-btn" data-difficulty="Médio" onclick="setDifficulty('Médio')">Médio</button>
                <button class="difficulty-btn" data-difficulty="Difícil" onclick="setDifficulty('Difícil')">Difícil</button>
              </div>
            </div>

            <div class="filter-group">
              <label>Tempo máximo: <span id="timeValue">120</span> min</label>
              <input type="range" id="timeFilter" min="15" max="120" step="15" value="120" oninput="updateTime(this.value)">
              <div class="range-labels">
                <span>15 min</span>
                <span>120 min</span>
              </div>
            </div>

            <button class="btn btn-secondary" onclick="resetFilters()">Limpar Filtros</button>
          </aside>

          <!-- Recipes -->
          <div>
            ${filteredRecipes.length === 0 ? 
              '<div class="empty-state"><p>Nenhuma receita encontrada com os filtros selecionados.</p></div>' :
              `<div class="recipe-grid" id="recipesGrid">
                ${displayRecipes.map(recipe => renderRecipeCard(recipe)).join('')}
              </div>
              ${totalPages > 1 ? `<div class="pagination" id="pagination"></div>` : ''}`
            }
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Seta ou define os valores do filtro
  document.getElementById('categoryFilter').value = filters.category;
  document.getElementById('timeFilter').value = filters.maxTime;
  document.getElementById('timeValue').textContent = filters.maxTime;
  
  // Seta ou define o botão de dificuldade
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.difficulty === filters.difficulty);
  });
}

// Página detalhada de Receita
function renderRecipeDetail(container) {
  const recipe = recipes.find(r => r.id === currentRecipeId);
  if (!recipe) {
    container.innerHTML = '<div class="container"><div class="empty-state"><p>Receita não encontrada</p></div></div>';
    return;
  }
  
  const isSaved = savedRecipes.includes(recipe.id);
  const recipeComments = userComments[recipe.id] || [];
  
  container.innerHTML = `
    <div class="recipe-detail">
      <div class="container">
        <a href="#receitas" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar
        </a>

        <!-- Recipe Header -->
        <div class="recipe-header">
          <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.title}">
          </div>

          <div class="recipe-info">
            <h1>${recipe.title}</h1>
            <p class="recipe-description">${recipe.description}</p>

            <div class="recipe-stats">
              <div class="stat-item">
                <div class="stat-icon" style="background: rgba(76, 175, 80, 0.2);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div class="stat-text">
                  <p>Tempo</p>
                  <p>${recipe.prepTime} min</p>
                </div>
              </div>

              <div class="stat-item">
                <div class="stat-icon" style="background: rgba(255, 152, 0, 0.2);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div class="stat-text">
                  <p>Porções</p>
                  <p>${recipe.servings}</p>
                </div>
              </div>

              <div class="stat-item">
                <div class="stat-icon" style="background: rgba(76, 175, 80, 0.2);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div class="stat-text">
                  <p>Dificuldade</p>
                  <p>${recipe.difficulty}</p>
                </div>
              </div>
            </div>

            <div class="rating">
              ${renderStars(recipe.rating)}
              <span style="color: #666; margin-left: 10px;">(${recipe.rating}.0)</span>
            </div>

            <div class="recipe-actions">
              <button class="btn btn-outline ${isSaved ? 'saved' : ''}" onclick="toggleSaveRecipe(${recipe.id})">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                ${isSaved ? 'Salva' : 'Salvar Receita'}
              </button>

              <button class="btn btn-outline" onclick="window.print()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Imprimir
              </button>
            </div>
          </div>
        </div>

        <!-- Recipe Content -->
        <div class="recipe-content">
          <!-- Ingredients -->
          <div class="ingredients-box">
            <h3>Ingredientes</h3>
            <ul class="ingredients-list">
              ${recipe.ingredients.map((ing, idx) => `
                <li>
                  <input type="checkbox" id="ing-${idx}" onchange="this.nextElementSibling.classList.toggle('checked')">
                  <label for="ing-${idx}">${ing}</label>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Steps -->
          <div class="steps-box">
            <h3>Modo de Preparo</h3>
            <ol class="steps-list">
              ${recipe.steps.map((step, idx) => `
                <li>
                  <div class="step-number">${idx + 1}</div>
                  <div class="step-text">${step}</div>
                </li>
              `).join('')}
            </ol>
          </div>
        </div>

        <!-- Comments -->
        <div class="comments-box">
          <h3>Avaliações e Comentários</h3>

          <form class="comment-form" onsubmit="submitComment(event, ${recipe.id})">
            <h4>Deixe sua avaliação</h4>
            
            <div class="rating-input">
              <label>Sua nota</label>
              <div class="star-rating" id="userRating">
                ${[1,2,3,4,5].map(n => `
                  <button type="button" onclick="setRating(${n})">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </button>
                `).join('')}
              </div>
            </div>

            <textarea id="commentText" placeholder="Compartilhe sua experiência com esta receita..." required></textarea>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 15px;">Enviar Avaliação</button>
          </form>

          <div class="comments-list">
            ${renderComments(recipeComments)}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Adicionar página de Receita
function renderAddRecipePage(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <a href="#receitas" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar
        </a>

        <div class="section-header">
          <h1>Adicionar Nova Receita</h1>
          <p>Compartilhe sua receita com a comunidade</p>
        </div>

        <div class="form-container">
          <!-- Form -->
          <div class="form-box">
            <form id="addRecipeForm" onsubmit="submitRecipe(event)">
              <h3 class="section-title">Informações Básicas</h3>

              <div class="form-group">
                <label for="title">Título da Receita *</label>
                <input type="text" id="title" placeholder="Ex: Bolo de Chocolate" required>
              </div>

              <div class="form-group">
                <label for="description">Descrição</label>
                <textarea id="description" rows="3" placeholder="Uma breve descrição da sua receita..."></textarea>
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label for="prepTime">Tempo (minutos) *</label>
                  <input type="number" id="prepTime" placeholder="30" required>
                </div>

                <div class="form-group">
                  <label for="servings">Porções *</label>
                  <input type="number" id="servings" placeholder="4" required>
                </div>
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label for="difficulty">Dificuldade</label>
                  <select id="difficulty">
                    <option>Fácil</option>
                    <option>Médio</option>
                    <option>Difícil</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="category">Categoria</label>
                  <select id="category">
                    <option>Sobremesas</option>
                    <option>Massas</option>
                    <option>Vegetariano</option>
                    <option>Rápido</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="image">URL da Imagem</label>
                <input type="url" id="image" placeholder="https://...">
              </div>

              <h3 class="section-title" style="margin-top: 30px;">Ingredientes</h3>
              <div id="ingredientsList">
                <div class="dynamic-item">
                  <input type="text" placeholder="Ingrediente 1" class="ingredient-input">
                </div>
              </div>
              <button type="button" class="btn-add" onclick="addIngredient()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Adicionar Ingrediente
              </button>

              <h3 class="section-title" style="margin-top: 30px;">Modo de Preparo</h3>
              <div id="stepsList">
                <div class="dynamic-item">
                  <div style="width: 32px; height: 40px; background: var(--color-accent); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600;">1</div>
                  <textarea rows="2" placeholder="Passo 1" class="step-input"></textarea>
                </div>
              </div>
              <button type="button" class="btn-add" onclick="addStep()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Adicionar Passo
              </button>

              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 30px;">
                Publicar Receita
              </button>
            </form>
          </div>

          <!-- Preview -->
          <div class="preview-box">
            <h3>Preview da Receita</h3>
            <img id="previewImage" class="preview-image" style="display: none;" alt="Preview">
            <h4 id="previewTitle">Título da Receita</h4>
            <p id="previewDescription" style="color: #666; margin-bottom: 20px;">Descrição da receita</p>

            <div class="preview-stats">
              <div class="preview-stat">
                <p>Tempo</p>
                <p id="previewTime">- min</p>
              </div>
              <div class="preview-stat">
                <p>Porções</p>
                <p id="previewServings">-</p>
              </div>
              <div class="preview-stat">
                <p>Nível</p>
                <p id="previewDifficulty">Fácil</p>
              </div>
            </div>

            <div id="previewIngredients" style="margin-bottom: 20px;"></div>
            <div id="previewSteps"></div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Adiciona uma preview da receita nova
  setupFormPreview();
}

// Página Sobre
function renderAboutPage(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 800px;">
        <h1 style="margin-bottom: 30px;">Sobre o Bom Sabor</h1>
        
        <p style="margin-bottom: 20px; line-height: 1.8;">
          Bem-vindo ao <strong>Bom Sabor</strong>, sua plataforma favorita para descobrir e compartilhar receitas incríveis!
        </p>
        
        <p style="margin-bottom: 20px; line-height: 1.8;">
          Nossa missão é tornar a culinária acessível para todos, oferecendo receitas simples e passo a passo detalhados que qualquer pessoa pode seguir.
        </p>
        
        <p style="margin-bottom: 40px; line-height: 1.8;">
          Seja você um iniciante na cozinha ou um chef experiente, aqui você encontrará inspiração para suas próximas criações culinárias.
        </p>
        
        <h3 style="margin-bottom: 20px;">Por que escolher Bom Sabor?</h3>
        
        <ul style="list-style: disc; padding-left: 30px; line-height: 2;">
          <li>Receitas testadas e aprovadas pela comunidade</li>
          <li>Instruções claras e detalhadas</li>
          <li>Filtros inteligentes para encontrar a receita perfeita</li>
          <li>Compartilhe suas próprias receitas</li>
          <li>Salve suas receitas favoritas</li>
        </ul>
      </div>
    </section>
  `;
}

// Funções auxiliares
function renderRecipeCard(recipe) {
  return `
    <a href="#receita/${recipe.id}" class="recipe-card" onclick="navigate('receita', ${recipe.id}); return false;">
      <div class="recipe-card-image">
        <img src="${recipe.image}" alt="${recipe.title}">
        <div class="recipe-card-overlay">
          <span class="btn">Ver Receita</span>
        </div>
      </div>
      <div class="recipe-card-body">
        <h3>${recipe.title}</h3>
        <div class="recipe-meta">
          <div class="recipe-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${recipe.prepTime} min</span>
          </div>
          <span class="difficulty-badge">${recipe.difficulty}</span>
        </div>
        <div class="rating">
          ${renderStars(recipe.rating)}
        </div>
      </div>
    </a>
  `;
}

function renderStars(rating) {
  return Array(5).fill(0).map((_, i) => 
    `<span class="star ${i < rating ? 'filled' : ''}">★</span>`
  ).join('');
}

function renderCategories() {
  const categories = [
    { name: 'Sobremesas', color: '#FF9800', icon: '🍰' },
    { name: 'Massas', color: '#4CAF50', icon: '🍕' },
    { name: 'Vegetariano', color: '#4CAF50', icon: '🥗' },
    { name: 'Rápido', color: '#FF9800', icon: '⚡' }
  ];
  
  return categories.map(cat => `
    <a href="#receitas" class="category-card" onclick="filterByCategory('${cat.name}'); return false;">
      <div class="category-icon" style="background: ${cat.color}20;">
        <span style="font-size: 32px;">${cat.icon}</span>
      </div>
      <h4>${cat.name}</h4>
    </a>
  `).join('');
}

function renderComments(comments) {
  const defaultComments = [
    { author: 'Maria Silva', rating: 5, text: 'Ficou perfeito! Toda a família adorou.', date: '2 dias atrás' },
    { author: 'João Santos', rating: 4, text: 'Muito bom, mas aumentei um pouco o tempo de cozimento.', date: '1 semana atrás' }
  ];
  
  const allComments = [...comments, ...defaultComments];
  
  return allComments.map(comment => `
    <div class="comment-item">
      <div class="comment-header">
        <div>
          <p class="comment-author">${comment.author}</p>
          <p class="comment-date">${comment.date}</p>
        </div>
        <div class="rating">
          ${renderStars(comment.rating)}
        </div>
      </div>
      <p class="comment-text">${comment.text}</p>
    </div>
  `).join('');
}

// Função de filtrar
function getFilteredRecipes() {
  return recipes.filter(recipe => {
    if (filters.category !== 'Todas' && recipe.category !== filters.category) return false;
    if (filters.difficulty !== 'Todas' && recipe.difficulty !== filters.difficulty) return false;
    if (recipe.prepTime > filters.maxTime) return false;
    return true;
  });
}

function updateFilters() {
  filters.category = document.getElementById('categoryFilter').value;
  renderRecipesPage(document.getElementById('mainContent'));
}

function setDifficulty(difficulty) {
  filters.difficulty = difficulty;
  renderRecipesPage(document.getElementById('mainContent'));
}

function updateTime(value) {
  filters.maxTime = parseInt(value);
  document.getElementById('timeValue').textContent = value;
  renderRecipesPage(document.getElementById('mainContent'));
}

function resetFilters() {
  filters = { category: 'Todas', difficulty: 'Todas', maxTime: 120 };
  renderRecipesPage(document.getElementById('mainContent'));
}

function filterByCategory(category) {
  filters.category = category;
  navigate('receitas');
}

// Ações nas receitas
function toggleSaveRecipe(id) {
  const index = savedRecipes.indexOf(id);
  if (index > -1) {
    savedRecipes.splice(index, 1);
  } else {
    savedRecipes.push(id);
  }
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  renderRecipeDetail(document.getElementById('mainContent'));
}

let currentRating = 0;

function setRating(rating) {
  currentRating = rating;
  document.querySelectorAll('#userRating svg').forEach((star, idx) => {
    if (idx < rating) {
      star.setAttribute('fill', '#FF9800');
      star.setAttribute('stroke', '#FF9800');
      star.classList.add('filled');
    } else {
      star.setAttribute('fill', 'none');
      star.setAttribute('stroke', '#ddd');
      star.classList.remove('filled');
    }
  });
}

function submitComment(event, recipeId) {
  event.preventDefault();
  
  if (currentRating === 0) {
    alert('Por favor, selecione uma nota');
    return;
  }
  
  const text = document.getElementById('commentText').value;
  
  if (!userComments[recipeId]) {
    userComments[recipeId] = [];
  }
  
  userComments[recipeId].unshift({
    author: 'Você',
    rating: currentRating,
    text: text,
    date: 'Agora'
  });
  
  localStorage.setItem('userComments', JSON.stringify(userComments));
  
  currentRating = 0;
  renderRecipeDetail(document.getElementById('mainContent'));
}

// Adicionar funções nas receitas
function addIngredient() {
  const list = document.getElementById('ingredientsList');
  const count = list.children.length + 1;
  
  const div = document.createElement('div');
  div.className = 'dynamic-item';
  div.innerHTML = `
    <input type="text" placeholder="Ingrediente ${count}" class="ingredient-input">
    <button type="button" class="btn-remove" onclick="this.parentElement.remove(); updatePreview();">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  list.appendChild(div);
  updatePreview();
}

function addStep() {
  const list = document.getElementById('stepsList');
  const count = list.children.length + 1;
  
  const div = document.createElement('div');
  div.className = 'dynamic-item';
  div.innerHTML = `
    <div style="width: 32px; height: 40px; background: var(--color-accent); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600;">${count}</div>
    <textarea rows="2" placeholder="Passo ${count}" class="step-input"></textarea>
    <button type="button" class="btn-remove" onclick="this.parentElement.remove(); updateStepNumbers(); updatePreview();">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  list.appendChild(div);
  updatePreview();
}

function updateStepNumbers() {
  document.querySelectorAll('#stepsList .dynamic-item').forEach((item, idx) => {
    item.querySelector('div').textContent = idx + 1;
    item.querySelector('textarea').placeholder = `Passo ${idx + 1}`;
  });
}

function setupFormPreview() {
  const form = document.getElementById('addRecipeForm');
  form.addEventListener('input', updatePreview);
}

function updatePreview() {
  const title = document.getElementById('title').value || 'Título da Receita';
  const description = document.getElementById('description').value || 'Descrição da receita';
  const prepTime = document.getElementById('prepTime').value || '-';
  const servings = document.getElementById('servings').value || '-';
  const difficulty = document.getElementById('difficulty').value;
  const image = document.getElementById('image').value;
  
  document.getElementById('previewTitle').textContent = title;
  document.getElementById('previewDescription').textContent = description;
  document.getElementById('previewTime').textContent = prepTime + ' min';
  document.getElementById('previewServings').textContent = servings;
  document.getElementById('previewDifficulty').textContent = difficulty;
  
  const previewImage = document.getElementById('previewImage');
  if (image) {
    previewImage.src = image;
    previewImage.style.display = 'block';
  } else {
    previewImage.style.display = 'none';
  }
  
  // Ingredientes
  const ingredients = Array.from(document.querySelectorAll('.ingredient-input'))
    .map(input => input.value.trim())
    .filter(val => val);
  
  if (ingredients.length > 0) {
    document.getElementById('previewIngredients').innerHTML = `
      <h4 style="font-size: 0.9rem; margin-bottom: 10px;">Ingredientes:</h4>
      <ul style="font-size: 0.85rem; color: var(--color-gray-dark); padding-left: 20px;">
        ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    `;
  } else {
    document.getElementById('previewIngredients').innerHTML = '';
  }
  
  // Passo a passo
  const steps = Array.from(document.querySelectorAll('.step-input'))
    .map(input => input.value.trim())
    .filter(val => val);
  
  if (steps.length > 0) {
    document.getElementById('previewSteps').innerHTML = `
      <h4 style="font-size: 0.9rem; margin-bottom: 10px;">Modo de Preparo:</h4>
      <ol style="font-size: 0.85rem; color: var(--color-gray-dark); padding-left: 20px;">
        ${steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    `;
  } else {
    document.getElementById('previewSteps').innerHTML = '';
  }
}

function submitRecipe(event) {
  event.preventDefault();
  alert('Receita adicionada com sucesso!');
  navigate('receitas');
}

// Newsletter
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('newsletterMsg');
    msg.textContent = 'Obrigado por se inscrever!';
    setTimeout(() => {
      msg.textContent = '';
      e.target.reset();
    }, 3000);
  });
  
  // Mudanças na hash da URL
  window.addEventListener('hashchange', function() {
    const hash = window.location.hash.slice(1);
    const [page, id] = hash.split('/');
    navigate(page || 'home', id ? parseInt(id) : null);
  });
  
  // Carregamento inicial baseado no hash da URL
  const hash = window.location.hash.slice(1);
  const [page, id] = hash.split('/');
  navigate(page || 'home', id ? parseInt(id) : null);
});
