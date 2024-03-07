// import website from './assets/website.jpeg'
const now = Date.now()
const Birthdate = new Date('May 3, 2000')
const age = ((now - Birthdate)/(3.154e10))
export const about_me =[
    {
        title: 'general',
        info : `My name is Aristide Jean Loens. Aged ${Math.floor(age)} years old. Born and Raised in Haiti. I completed my High school in the College Canado Haiti. And now I am currently majoring in Mathmatics and Computer Science at The RUDN university.`
    },
    {
        title: 'Competences',
        info: 'I master some technologies like HTML, CSS, JavaScript, typeScript, React.js, Node.js, MySQL, PostgreSQL, MongoDB, Postman and so on... In the projects section I listed some projects that can confirm my competence with those technologies. I have also a good background in terms of foreign languages since I master Haitian Creole, French and English. I also know the russian language in a B2 level.'
    },
    {
        title: 'goals',
        info: 'My goals are quite simple. Being the best in whatever I am doing. Try to bring something new to the world. And if I am smart enough, I would become a great scientist or engineer.'
    }
]


export const my_projects = [
    {
        title: 'MyPortfolio(This website)',
        link: '',
        frontend_link: '',
        backend_link:'',
        image: new URL('./assets/website.jpeg', import.meta.url).href,
        technologies:['React.js', 'material-ui']

    },
    {
        title: 'chat_app',
        link: 'https://i-ajlan.github.io/chat_app_frontEnd/',
        frontend_link:'https://github.com/i-ajlan/chat_app_frontEnd',
        backend_link:'https://github.com/i-ajlan/chat_app_api',
        image: new URL('./assets/website.jpeg', import.meta.url).href,
        technologies:['react','vite','supabase', 'node', 'express', 'socket.io']
    },
    {
        title: 'Insta_like',
        link: 'https://i-ajlan.github.io/insta-like/',
        frontend_link:'https://github.com/i-ajlan/insta-like',
        backend_link:'',
         image: new URL('./assets/website.jpeg', import.meta.url).href,
        technologies:['React.js', 'vite', 'React-router-dom']
    },  
    {
        title: 'Insta_like',
        link: 'https://i-ajlan.github.io/insta-like/',
        frontend_link:'https://github.com/i-ajlan/insta-like',
        backend_link:'',
         image: new URL('./assets/website.jpeg', import.meta.url).href,
        technologies:['React.js', 'vite', 'React-router-dom']
    },  
    {
        title: 'Insta_like',
        link: 'https://i-ajlan.github.io/insta-like/',
        frontend_link:'https://github.com/i-ajlan/insta-like',
        backend_link:'',
         image: new URL('./assets/website.jpeg', import.meta.url).href,
        technologies:['React.js', 'vite', 'React-router-dom']
    },  
]


