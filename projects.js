const projectsContainer = document.querySelector('.projects-section');

const projectsList = [
  {
    id: 1,
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: 'img/desktop/project-1.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    name: 'Multi-post stories',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: 'img/desktop/project-2.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: 'img/desktop/project-3.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: 'img/desktop/project-4.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      button: 'see project',
      technologies: ['html', 'css', 'javascript'],
    },
];
  
  // open popup window
  const openModalButton = document.querySelectorAll(`.open-popup-btn`);
  const projects = document.querySelectorAll('.project');
  
projectsList.forEach((project, index) => {
  const {
    id,
    name,
    subtitle,
    featuredImage,
    description,
    button,
    technologies,
  } = project;
  projectsContainer.innerHTML += ` 
  <div id=${id} class="project w-[100%] p-4 md:p-[24px] border md:order-1 md:h-[496px] md:gap-x-[2.9rem] border-light-grey-2 bg-white rounded-2xl flex flex-col md:flex-row justify-center items-center"
>
  <!--* project image -->
  <div class="w-full md:w-[50%] h-[50%] md:h-full bg-white">
    <img
      class="w-full h-full object-cover md:hover:scale-110 transition duration-700 ease-in-out"
      src=${featuredImage}
      alt="project-1"
    />
  </div>

  <!--* project info -->
  <div
    class="flex md:w-[50%] md:h-full flex-col justify-around md:justify-start items-start gap-y-4"
  >
    <h2
      class="text-[32px] md:text-[40px] text-dark-blue font-bold mt-3 -mb-2"
    >
      ${name}
    </h2>
    <ul
      class="list-none flex justify-between md:text-lg items-center w-[240px]"
    >
      <li
        class="text-light-dark-blue md:text-lg text-small font-semibold"
      >
      ${subtitle[0]}
      </li>
      <li class="h-2 w-2 bg-light-grey rounded-full"></li>
      <li class="text-light-grey-4 font-semibold text-small">
      ${subtitle[1]}
      </li>
      <li class="h-2 w-2 bg-light-grey rounded-full"></li>
      <li class="text-light-grey-4 font-semibold text-small">
      ${subtitle[2]}
      </li>
    </ul>
    <p class="text-light-teal md:text-base text-[15px]">
      ${description}
    </p>

    <ul class="w-[230px] flex justify-between items-center">
      <li>
        <a
          href="#"
          class="text-light-blue text-xs px-3 py-1 bg-faded-blue rounded-lg"
          >${technologies[0]}</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-light-blue text-xs px-3 py-1 bg-faded-blue rounded-lg"
          >${technologies[1]}</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-light-blue text-xs px-3 py-1 bg-faded-blue rounded-lg"
          >${technologies[2]}</a
        >
      </li>
    </ul>
    <button
      class="inline-block open-popup-btn transition duration-500 ease-in-out text-primary-blue p-4 text-[17px] border border-light-blue rounded-lg mb-[14px] md:enabled:text-light-blue md:enabled:border-[#7F8CFF] md:enabled:bg-white md:hover:bg-light-blue md:hover:text-white md:active:bg-[#2230D2] md:active:text-white md:disabled:bg-[#e5e5e5] md:disabled:text-[#5E6C84] md:disabled:border-[#C1C7D0]"
      >${button}</button
    >
  </div>
</div>`;

openModalButton.forEach((btn, index) =>
  btn.addEventListener('click', () => {
    console.log(`click project ${index}`);

    // if the index of the project matches the index
    // that we have here
    // show me the modal for that project
    projectsList[index]
    if (index === project.id) {
      //...
    }

  })
);
});


const popupContainer = document.createElement('section');
popupContainer.classList.add([
  'h-[70vw]',
  'w-[100vw]',
  'border-2',
  'border-red-700',
]);

popupContainer.innerHTML = `
  <div>
  <h3>Title</h3>
  <p>This is the description</p>
  </div>
`;
