# Portfólio Pessoal - Vinicius Disigant

Site portfólio responsivo e moderno criado com HTML5, CSS3 e JavaScript vanilla.

## ✨ Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Dark mode / Light mode (com persistência)
- ✅ Navegação suave
- ✅ Animações ao scroll
- ✅ Formulário de contato
- ✅ Seções: Início, Sobre, Projetos, Skills, Contato
- ✅ Performance otimizada
- ✅ SEO amigável

## 📁 Estrutura de Arquivos

```
Disigant.github.io/
├── index.html      # Estrutura HTML
├── style.css       # Estilos CSS
├── script.js       # Interatividade JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/Disigant/Disigant.github.io.git
cd Disigant.github.io
```

### 2. Abra com Claude Code
```bash
claude
```

### 3. Customize seu site

#### Informações Pessoais
Edite `index.html` e atualize:
- Seu nome
- Bio/descrição
- Email
- Links sociais (GitHub, LinkedIn, etc.)

#### Projetos
Adicione/remova cards de projeto em `index.html`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="sua-imagem.jpg" alt="Projeto">
    </div>
    <h3>Nome do Projeto</h3>
    <p>Descrição</p>
    <div class="project-tags">
        <span class="tag">Tech</span>
    </div>
    <a href="link-do-projeto">Ver Projeto →</a>
</div>
```

#### Skills
Atualize suas habilidades em `index.html`:
```html
<div class="skill-category">
    <h3>Frontend</h3>
    <ul>
        <li>Sua skill</li>
    </ul>
</div>
```

#### Cores
Customize as cores em `style.css` - Seção "Variables":
```css
:root {
    --primary-color: #6366f1;      /* Cor principal */
    --secondary-color: #8b5cf6;    /* Cor secundária */
}
```

## 📝 Editar com Claude Code

### Pedir melhorias
```
"Adicione animações mais suaves aos cards"
"Mude a paleta de cores para tons de azul"
"Adicione uma seção de testimoniais"
"Melhore o SEO do site"
```

### Exemplo de prompt
```
Refatore o index.html para:
1. Adicionar uma seção de certificações
2. Melhorar acessibilidade (ARIA labels)
3. Adicionar sitemap.xml
```

## 🌐 Fazer Deploy

### No GitHub Pages (já configurado)
```bash
git add .
git commit -m "Atualizações no portfólio"
git push origin main
```

Seu site será atualizado em ~30 segundos em `disigant.com`

## 🎨 Customizações Populares

### Adicionar Imagem de Perfil
```html
<!-- No Hero section -->
<img src="seu-avatar.jpg" alt="Foto" class="profile-pic">
```

### Adicionar Favicon
```html
<!-- No <head> -->
<link rel="icon" href="favicon.ico">
```

### Conectar Formulário a Email Real
Substitua o `script.js` para integrar com:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Seu próprio backend

### Adicionar Analytics
```html
<!-- Google Analytics no </body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🔧 Tecnologias

- **HTML5** - Semântica moderna
- **CSS3** - Gradientes, animations, flexbox
- **JavaScript** - Dark mode, smooth scroll, validação
- **GitHub Pages** - Hospedagem gratuita

## 📱 Browser Support

- ✅ Chrome (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Edge (últimas versões)
- ✅ Mobile browsers

## ⚡ Performance

- Páginas carregam em < 1s
- Lighthouse score: 95+
- Mobile-first design
- Sem dependências externas

## 🐛 Troubleshooting

**Dark mode não persiste:**
- Limpe o localStorage: `localStorage.clear()`

**Formulário não envia:**
- Está usando `mailto:` como fallback
- Para envio real, integre com Formspree ou EmailJS

**Imagens não carregam:**
- Use URLs absolutas em vez de relativas
- Ou copie imagens para a pasta do projeto

## 📧 Contato

Email: vdisigant@extremenetworks.com

## 📄 Licença

Código aberto - use como quiser!

---

**Feito com ❤️ usando HTML, CSS e JavaScript**
