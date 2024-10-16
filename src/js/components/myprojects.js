import firstproj1 from '../../images/skillset/frameworks/react.png'
import firstproj2 from '../../images/skillset/language/javascript.png'
import firstproj3 from '../../images/skillset/language/html.png'
import firstproj4 from '../../images/skillset/language/css.png'

import secondproj1 from '../../images/skillset/tools/webflow.jpeg'
import secondproj2 from '../../images/skillset/others/memberstack.jpeg'
import secondproj3 from '../../images/skillset/others/zapier.jpeg'
import secondproj4 from '../../images/skillset/others/airtable.jpeg'

import thirdproj1 from '../../images/skillset/frameworks/react.png'
import thirdproj2 from '../../images/skillset/language/javascript.png'
import thirdproj3 from '../../images/skillset/language/html.png'
import thirdproj4 from '../../images/skillset/language/css.png'

const projects = [
    {
        id: 1,
        title: "My Portfolio",
        description: "I created this personal portfolio website using the knowledge I gained from the Meta (Facebook) Front-End Developer Specialization Course. It showcases my personal achievements and projects, bringing together my journey as a developer. ",

        tools1: firstproj1,
        tools2: firstproj2,
        tools3: firstproj3,
        tools4: firstproj4,

        alt1: 'React',
        alt2: 'Javascript',
        alt3: 'HTML5',
        alt4: 'CSS3',

        wireframe: 'https://www.figma.com/design/lCfVIBKySHjEWgvCpRUOoM/Portfolio?node-id=0-1&t=ZMS6X5KCuZF5TiW2-1',
        prototype: 'https://www.figma.com/design/lCfVIBKySHjEWgvCpRUOoM/Portfolio?node-id=81-2&t=qSYMe0U2tf2599Ng-1',
        github: 'https://github.com/Hiraeight/Portfolio-Website',
        live: 'https://john-patrick-felicia.vercel.app/',
    },

    {
        id: 2,
        title: "PUP-EIMS",
        description: "This is a project that I created back in 2021 for my capstone project. I built an online course provider called PUP EIMS (Polytechnic University of the Philippines - Educational Instructional Module System) aimed at empowering both students and faculty members.",

        tools1: secondproj1,
        tools2: secondproj2,
        tools3: secondproj3,
        tools4: secondproj4,

        alt1: 'Webflow',
        alt2: 'Memberstack',
        alt3: 'Zapier',
        alt4: 'Airtable',

        wireframe: '',
        prototype: '',
        github: '',
        live: 'https://pupeims.webflow.io/',
        underConstruction: true,
    },

    {
        id: 3,
        title: "Little Lemon",
        description: "This project is created using HTML, CSS and JavaScript React. A website for little lemon with functional customer reservation. This is the final project prepared by Meta “Facebook” to earn their Front-End Developer Professional Certificate.",

        tools1: thirdproj1,
        tools2: thirdproj2,
        tools3: thirdproj3,
        tools4: thirdproj4,

        alt1: 'React',
        alt2: 'Javascript',
        alt3: 'HTML5',
        alt4: 'CSS3',

        wireframe: 'https://www.figma.com/design/gTg00v2Te5cMmtB4yjU972/Wireframe?node-id=0-1&t=hHgnDWyr0K0AFvGP-1',
        prototype: 'https://www.figma.com/design/HVtEZes8s8DiZlrJV5glOv/Prototype?t=hHgnDWyr0K0AFvGP-1',
        github: 'https://github.com/Hiraeight/Little-Lemon',
        live: 'https://little-lemon-zeta-liard.vercel.app/',
    },
]

export default projects