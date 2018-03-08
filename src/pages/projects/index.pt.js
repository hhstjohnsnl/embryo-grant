import React from 'react'
import Projects from '../projects'

const messages = {
  title: 'Projetos em destaque'
}

const projects = [
  {
    title: 'Panthera',
    url: 'https://panthera.dlbn.co',
    description: (
      <div>
        <p>Panthera é um serviço de desenvolvimento de websites focado em simplicidade e agilidade. O processo leva no máximo 3 dias, desde a contratação até a entrega.</p>
        <p>O cliente só precisa gastar 30 minutos em uma chamada de voz para que possamos entender como desenvolver o site e seu conteúdo. É ideal para profissionais autônomos e pequenas empresas.</p>
      </div>
    )
  },
  {
    title: 'TRIPBY',
    url: 'http://tripby.org',
    description: (
      <div>
        <p>TRIPBY é um projeto de redução de danos que foca em fornecer informações sobre drogas psicoativas.</p>
        <p>A versão atual foi desenvolvida há vários anos atrás no WordPress. Agora estou trabalhando para lançar uma nova versão como um webapp progressivo em <a href="https://reactjs.org/">React</a> + <a href="https://www.apollographql.com/">Apollo</a> e usando o <a href="https://www.graph.cool/">Graphcool</a> como backend.</p>
      </div>
    )
  },
  {
    title: 'Corinthians-Guarulhos',
    url: 'http://corinthiansguarulhos.com',
    description: (
      <div>
        <p>Time de vôlei em São Paulo.</p>
        <p>No website, o usuário pode consultar próximas partidas, competições que o clube está participando, membros da equipe e notícias.</p>
        <p>O website foi feito usando o <a href="https://www.gatsbyjs.org/">Gatsby</a> e todo o conteúdo é gerenciado através do <a href="https://www.contentful.com/">Contentful CMS</a>. Toda vez que um artigo é criado ou atualizado, uma pipeline é ativada para compilar as páginas e fazer redeploy do website.</p>
        <p>O projeto foi desenvolvido junto com o <a href="http://quartzostudio.com">Quartzo Studio</a>, que forneceu as especificações de UI/UX.</p>
      </div>
    )
  },
  {
    title: 'Softin Sistemas',
    url: 'http://softin.com.br',
    description: (
      <div>
        <p>Empresa de software em Joinville, SC.</p>
        <p>O website mostra os principais produtos e serviços da empresa. Também permite que potenciais clientes solicitem um orçamento através de um formulário. O formulário é diretamente conectado com uma lista do <a href="https://mailchimp.com">MailChimp</a></p>
        <p>Neste projeto eu tive o prazer de trabalhar com um artista que desenhou ilustrações e ícones originais que compõem o website. Desenvolvido com o <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>
      </div>
    )
  }
]

export default (props) => <Projects messages={messages} projects={projects} />
