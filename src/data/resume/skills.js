const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Blockchain Development', 'Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Dart',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'HTML/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Blockchain Development','Web Development', 'Javascript'],
  },
  {
    title: 'Spring Boot',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Maven',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'REST API',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'NumPy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Vercel',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Blockchain Development','Web Development', 'Javascript'],
  },
  {
    title: 'UNIX',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Django',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'CI/CD',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'SQLite',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ORM',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Web App Development',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Prompt Engineering',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'Machine Learning',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Fine-tuning',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Data Science',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GIS',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Scripting',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Agile Development',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Data Structures',
    competency: 4,
    category: ['Computer Science'],
  },
  {
    title: 'Distributed Systems',
    competency: 3,
    category: ['Computer Science'],
  },
  {
    title: 'Test Driven Development',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Solidity',
    competency: 3,
    category: ['Blockchain Development', 'Languages'],
  },
  {
    title: 'Ether.js',
    competency: 3,
    category: ['Blockchain Development', 'Javascript'],
  },
  {
    title: 'Web3.js',
    competency: 3,
    category: ['Blockchain Development', 'Javascript'],
  },
  {
    title: 'Hardhat',
    competency: 2,
    category: ['Blockchain Development', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#f4a261',
  '#e76f51',
  '#2a9d8f',
  '#e9c46a',
  '#264653',
  '#3a86ff',
  '#8338ec',
  '#ff006e',
  '#fb5607'
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
