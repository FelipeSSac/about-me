<<<<<<< HEAD
#!/usr/bin/env node

'use strict'
const { readFile } = require('fs')
const { join } = require('path')

readFile(join(__dirname, 'info.json'), 'utf8', (err, content) => {
  if (err) throw err
  console.log(content)
})
=======
const aboutMe = {
  name: 'Felipe dos Santos Souza',
  age: 21,
  gitHubUser: 'FelipeSSac',
  gitHubAccount: 'https://github.com/FelipeSSac',
  linkedIn: 'https://www.linkedin.com/in/felipessac/',
  email: 'felipe_adoubs@outlook.com',
  phone: '+55 (12) 99125-6102',
  xp: [
    {
      corporation: 'Mestres da Web',
      since: '07/2021',
      occupation: 'Front end developer'
    }
  ],
  academicEducation: [
    {
      course: 'Computer Technician',
      period:{
        start:'2016/01',
        end:'2018/11'
      },
      school: 'Colégio Antônio Teixeira Fernandes (UNIVAP)'
    },
    {
      course: 'High School',
      period: {
        start:'2016/01',
        end:'2018/11'
      },
      school: 'Colégio Antônio Teixeira Fernandes (UNIVAP)'
    },
    {
      course: 'English language and english culture',
      period: [
        {
          start:'2009/03',
          end:'2012/11'
        },
        {
          start:'2014/02',
          end:'2016/10'
        },
      ],
      school: 'Wizard by Pearson'
    },
    {
      course: 'Front end essentials Hyper Class',
      period: '07/2017',
      school: 'Focus Network'
    }
  ],
  prizes: [
    {
      name: 'Maratona de programação 2018',
      placement: 1,
      date: '2018/07',
      link: 'https://web.univap.br/maratona_programacao/edicoes_anteriores/2018/ranking_junior.php'
    },
    {
      name: 'Olímpiada de programação 2018',
      placement: 4,
      date: '2018/09',
    },
    {
      name: 'Olímpiada de programação 2017',
      placement: 8,
      date: '2017/07',
      link: 'https://web.univap.br/maratona_programacao/edicoes_anteriores/2017/ranking_junior.php'
    }
  ],
  bootcamps: [
    {
      name:'Afya labs',
      school: 'Gama Academy',
      technologies:[
        'Node',
        'React',
        'AWS',
        'Docker'
      ]
    }
  ],
  techSkills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next',
    'Node',
    'HTML5',
    'CSS3',
    'SASS',
    'UX',
    'ES6+',
    'Jest',
    'Testing Library'
  ]
}
>>>>>>> 3db33becb916f1bea5d90ed4a9a6b89860cddbd6
