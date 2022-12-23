// select projects container
const projectsContainer = document.querySelector('.projects-section');

const projectsList = [
  {
    id: 0,
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: './img/desktop/project-1.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
    modalDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    modalButtons: ['see live', 'see source'],
  },
  {
    id: 1,
    name: 'Multi-post stories',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: './img/desktop/project-2.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
    modalButtons: ['see live', 'see source'],
    modalDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    id: 2,
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: './img/desktop/project-3.jpg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
    modalButtons: ['see live', 'see source'],
    modalDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    id: 3,
    name: 'Tonic',
    subtitle: ['canopy', 'back end dev', '2015'],
    featuredImage: './img/desktop/project-4.jpg',
    button: 'see project',
    technologies: ['html', 'css', 'javascript'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modalButtons: ['see live', 'see source'],
    modalDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
];

projectsList.forEach((project) => {
  const {
    id,
    name,
    subtitle,
    featuredImage,
    description,
    button,
    technologies,
    modalDescription,
    modalButtons,
  } = project;
  
  projectsContainer.innerHTML += `
  <div id=${id} class="project w-[100%] p-4 z-2 md:p-[24px] border md:order-1 md:h-[496px] md:gap-x-[2.9rem] border-light-grey-2 bg-white rounded-2xl flex flex-col md:flex-row justify-center items-center"
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

  <!-- modal -->
  <div class="z-10 md:z-50 hidden modal-wrapper absolute top-[${window.scrollY}px] left-0">
    <div class="modal-content bg-white z-10 rounded-2xl py-[18px] px-4">
      <header class='flex justify-between items-center'>
        <h3 class="font-bold text-[32px] self-end">${name}</h3>
        <button class='close-popup'>
          <img class="h-[12px] w-[12px]" src='./img/close_3.png' alt='close button'/>
        </button>
      </header>

      <!-- modal subtitle -->
      <div class="text-[13px] font-semibold mt-[22px] flex justify-between items-center w-[75%] md:w-[260px] text-light-grey-4">
        <span class="uppercase text-[#344563]">${subtitle[0]}</span>
        <span class="h-[10px] w-[10px] bg-light-grey rounded-full"></span>
        <span class="capitalize">${subtitle[1]}</span>
        <span class="h-[10px] w-[10px] rounded-full bg-light-grey"></span>
        <span>${subtitle[2]}</span>
      </div>

      <div class="image-wrapper mt-[20px]">
        <img class="object-cover" src=${featuredImage} alt="project image"/>
      </div>

      <div class="modal__bottom-section md:flex">
        <div class="text-wrapper">
          <p class="mt-[12px] text-[15px] text-[#344563] leading-6">
            ${modalDescription}
          </p>
        </div>

        <div class="modal__bottom-left-section">
          <div class="mt-[12px]">
            <span class="text-light-blue text-xs px-3 py-1 bg-faded-blue rounded-lg">${technologies[0]}</span>
            <span class="text-light-blue ml-[8px] text-xs px-3 py-1 bg-faded-blue rounded-lg">${technologies[1]}</span>
            <span class="text-light-blue ml-[8px] text-xs px-3 py-1 bg-faded-blue rounded-lg">${technologies[2]}</span>
          </div>

          <!-- modal buttons -->
          <ul class="mt-[49px] modal-buttons w-full flex justify-between ">
            <li class=" md:cursor-pointer items-center rounded-lg border border-[#6070FF] py-[20px] px-[22px]">
              <a class="text-[15px] font-medium flex justify-between text-[#396DF2] w-[136px]">
                <span class="capitalize">${modalButtons[0]}</span> 
                <img class="ml-[13px]" src="./img/see-live.png"/>
              </a>
            </li>
            <li class=" md:cursor-pointer  rounded-lg border border-[#6070FF] py-[20px] px-[22px] ml-[14px]">
              <a class="text-[15px] font-medium flex justify-between items-center text-[#396DF2] w-[136px]">
                <span class="capitalize">${modalButtons[1]}</span> 
                <img class="ml-[13px]" src="./img/github-modal.png"/>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>`;
});

const modals = document.querySelectorAll('.modal-wrapper');
const openPopupButtons = document.querySelectorAll('.open-popup-btn');
const closePopupButons = document.querySelectorAll('.close-popup');

openPopupButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.add('show-modal');
  });
});

closePopupButons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.remove('show-modal');
  });
});
