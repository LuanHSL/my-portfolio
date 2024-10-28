export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  messages: {
    en: {
      sectionHero: {
        title: 'Home',
        greetings: 'Hello World',
        apresentation: 'I\'m Luan!',
        occupation: 'Full Stack Developer'
      },
      sectionAboutMe: {
        title: 'About Me',
        subtitle: 'Professional Experience',
        experienceOne: {
          title: 'Jukebox Ag - Full Stack Developer Jr',
          period: 'May 2021 - Apr 2023 | Home Office',
          description: 'I developed and implemented APIs RESTful using the Laravel framework to integrate systems and support new features;<br>' +
            'Collaborated on bug correction, using Jira to track and manage issues;<br>' +
            'Translated user interfaces from Figma to functional code, using Vue.js as the front-end framework.'
        },
        experienceTwo: {
          title: 'Jukebox Ag - Full Stack Developer Pl',
          period: 'Apr 2023 - Oct 2024 | Home Office',
          description: 'I migrated the project from Vue 2 + Vuetify to Vue 3 + Tailwind CSS, refactoring the code to the new project structure;<br>' +
            'I developed and implemented APIs RESTful using the Laravel framework to integrate systems and support new features;<br>' +
            'I migrated the project from Firebase/Firestore to Supabase, optimizing the data architecture and reducing latency in queries.' +
            'This change allowed a better performance and scalability for the system;<br>' +
            'I developed a serverless email sending solution, using Lambda, SES, DynamoDB and EventBridge Schedule;<br>' +
            'I developed integrations with PayPal and Asaas, developing custom payment flows for the platform;<br>' +
            'I managed and mentored a two-developer team, delegating tasks and providing technical support.'
        },
      },
      sectionProjects: {
        title: 'Projects',
        subtitle: 'Abilities',
      },
      sectionContact: {
        title: 'Contact',
        subtitle: 'I\'m available to collaborate on new projects'
      },
      sectionFooter: {
        developerBy: 'Developed by Luan HSL.',
        cnpj: 'CNPJ: 53.648.182/0001-78',
        copyright: 'Copyright © 2024. All rights reserved.'
      },
      button: {
        downloadCV: 'Download CV',
        dark: 'Dark',
        light: 'Light',
        seeDeploy: 'See Deploy',
        seeCode: 'See Code'
      },
      seo: {
        title: 'Luan Henrique - Full Stack Developer',
        description: 'Get to know the work of Luan Henrique, a fullstack developer passionate about creating innovative web solutions.'
      }
    },
    pt: {
      sectionHero: {
        title: 'Inicio',
        greetings: 'Olá Mundo',
        apresentation: 'Sou Luan!',
        occupation: 'Desenvolvedor Full Stack'
      },
      sectionAboutMe: {
        title: 'Sobre Mim',
        subtitle: 'Experiência Profissional',
        experienceOne: {
          title: 'Jukebox Ag - Desenvolvedor Full Stack Jr',
          period: 'Mai 2021 - Abr 2023 | Home Office',
          description: 'Desenvolvi e implementei APIs RESTful utilizando o framework Laravel para integrar sistemas e suportar novas funcionalidades, seguindo o padrão de projeto;<br>' +
            'Colaborei na correção de bugs, utilizando o Jira para rastrear e gerenciar as issues;<br>' +
            'Traduzi interfaces de usuário do Figma para código funcional, utilizando Vue.js como framework front-end.'
        },
        experienceTwo: {
          title: 'Jukebox Ag - Desenvolvedor Full Stack Pl',
          period: 'Abr 2023 - Out 2024 | Home Office',
          description: 'Migrei o projeto do Vue 2 + Vuetify para o Vue 3 + Tailwind CSS, refatorando o código para o novo padrão de projeto;<br>' +
            'Implementei ao projeto o Firebase/Firestore, implementando um banco de dados em tempo real para chat e notificação;<br>' +
            'Migrei o projeto de Firebase/Firestore para Supabase, otimizando a arquitetura de dados e reduzindo a latência nas consultas.' +
            'Essa mudança permitiu um melhor desempenho e escalabilidade para o sistema;<br>' +
            'Desenvolvi uma solução serverless para envio de e-mails em massa, utilizando Lambda, SES, DynamoDB e EventBridge Schedule;<br>' +
            'Implementei as integrações com PayPal e Asaas, desenvolvendo fluxos de pagamento personalizados para a plataforma;<br>' +
            'Gerenciei e mentorei uma equipe de dois desenvolvedores, delegando tarefas e fornecendo orientação técnica.'
        },
      },
      sectionProjects: {
        title: 'Projetos',
        subtitle: 'Habilidades',
      },
      sectionContact: {
        title: 'Contato',
        subtitle: 'Estou disponível para colaborar em projetos novos'
      },
      sectionFooter: {
        developerBy: 'Desenvolvido por Luan HSL.',
        cnpj: 'CNPJ: 53.648.182/0001-78',
        copyright: 'Copyright © 2024. Todos os direitos reservados.'
      },
      button: {
        downloadCV: 'Baixar CV',
        dark: 'Escuro',
        light: 'Claro',
        seeDeploy: 'Ver Deploy',
        seeCode: 'Ver Código'
      },
      seo: {
        title: 'Luan Henrique - Desenvolvedor Full Stack',
        description: 'Conheça o trabalho de Luan Henrique, um desenvolvedor Fullstack apaixonado por criar soluções web inovadoras.'
      }
    }
  }
}))
