require("dotenv/config");

const projects = [
  {
    title: "Eleições utilizando Blockchain",
    description:
      "Projeto para disciplina da faculdade chamada Projeto e Implementação de Sistemas Distribuídos, a aplicação utiliza um Smart Contract para fazer o sistema de eleição, o acesso para o Smart Contract é realizado através de um uma página cliente utilizando a biblioteca React.js, e a interface para acesso à blockchain é feita através de uma API Rest. Projeto foi feito em equipe com 4 pessoas, os autores são, Jonas Freire, Christian Lira, Pedro Araújo e Amaury Tavares.",
    url: "https://github.com/St4rVation/Blockchain-Based-Elections",
    thumbnail_url: `${process.env.BACKEND_API_URL}/public/gears.png`
  },
  {
    title: "Web Site pessoal",
    description:
      "Página web para divulgação de projetos pessoais, utilizando no frontend React.js e no backend Node.js com Express, o deploy da aplicação é realizado utilizando o Heroku.",
    url: "https://github.com/JonasFreireAlcantara/my-own-website-frontend",
    thumbnail_url: `${process.env.BACKEND_API_URL}/public/website-jonas.png`
  },
  {
    title: "Gerador de Slide",
    description:
      "Script para geração de slide utilizando a biblioteca python-pptx que gera apresentação de slides no formato power point, este projeto foi necessário para automatizar as atividades da minha igreja, onde precisávamos criar os slides contendo as letras das músicas, esse projeto objetiva a automatização e facilidade do processo.",
    url: "https://github.com/JonasFreireAlcantara/Power-Point-Presentation",
    thumbnail_url: `${process.env.BACKEND_API_URL}/public/screenshot_slide.png`
  },
  {
    title: "Espaço da Tecnologia",
    description:
      "Blog criado do zero utilizando React, Node, Express, Mongoose, Cloudinary, Disqus, etc. Para desenvolvimento de um blog que tem por objetivo divulgações de conhecimentos na área de tecnologia.",
    url: "https://espacodatecnologia.herokuapp.com",
    thumbnail_url: `${process.env.BACKEND_API_URL}/public/espaco-da-tecnologia.png`
  }
];

module.exports = {
  index(req, res) {
    return res.json({ projects });
  }
};
