/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Micro1',
    position: 'AI Engineer',
    url: 'https://www.micro1.ai',
    startDate: '2024-02-25',
      highlights: [
      'Utilized advanced RLHF using Pandas, NumPy, Matplotlib, Seaborn, and SciPy on python to enhance LLMs reasoning steps.',
      'Trained AI models to call the appropriate API extension tools, functions, and parameters to effectively fulfill the given prompts.',
      'Deepened AI models’ coding capabilities by introducing new algorithms, enhancing their functionality and efficiency.',
      ],
  },
  {
    name: 'Ericsson',
    position: 'Software Engineer – Scripting & Automation ',
    url: 'https://www.ericsson.com',
    startDate: '2021-09-01',
    endDate: '2022-08-30',
    highlights: [
      'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
    'Implemented scripts to automate recurring weekly processes for teams in Sweden and Poland, reducing manual effort. The\n' +
    'automation included data aggregation, report generation, and system monitoring, achieving timely and accurate execution of tasks.',
    'Executed automated scripts to migrate internal information sources (Wikis) to Confluence. This process included data extraction,\n' +
    'transformation, and loading, ensuring consistency and integrity of migrated content, and improving accessibility and collaboration.',
    'Developed web applications using Python\'s Flask for the backend and ReactJS for the frontend. Implemented user authentication, and\n' +
    'created interactive user interfaces, enhancing the overall user experience and functionality of internal tools.',],
  },
  {
    name: 'Carleton University ARS Lab',
    position: 'Software Engineer – Data Visualization ',
    url: 'https://carleton.ca/vsim/engineering/ars-lab/',
    startDate: '2020-10-01',
    endDate: '2021-04-30',
    highlights: [
        'Developed GIS and visualization tools using Python to study COVID-19 simulations, enabling the forecasting of possible outcomes.\n' +
        'Implemented data processing pipelines and visualization dashboards to provide insightful analysis.',
        'Automated the developed tools to accommodate research team members with no prior programming knowledge, enhancing usability\n' +
        'and accessibility. Created user-friendly interfaces and streamlined workflows to facilitate easy data input and analysis.',
        'Documented technical specifications and project testing methods for future reference. Produced comprehensive guides and manuals\n' +
        'to support ongoing maintenance and further development by other team members.'
    ],
  },
];

export default work;
