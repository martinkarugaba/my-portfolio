const projectsSection = document.querySelector('.projects-section');

const projectsList = [
  {
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    'featured-image': 'img/desktop/project-1.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see prooject',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-post stories',
    subtitle: ['canopy', 'back end dev', '2015'],
    'featured-image': 'img/desktop/project-2.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see prooject',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    'featured-image': 'img/desktop/project-3.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see prooject',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    'featured-image': 'img/desktop/project-4.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see prooject',
    technologies: ['html', 'css', 'javascript'],
  },
];

projectsList.forEach((project) => {
  //const { name, subtitle, img, description, button, badges } =
  //  project;
  projectsSection.innerHTML += `<h3>${project.name}</h3>`;
});

console.log('projects section');