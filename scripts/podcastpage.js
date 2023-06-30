const podcasts = [
    {
        name: 'Laugh out loud with Bobby Lee',
        date: '30 June 2023',
        image: './assets/image2p.jpg',
        audio: './assets/audio/audio1.mp3'
    },
    {
        name: 'Anatomy of a Murder',
        date: '20 June 2023',
        image: './assets/image3p.jpeg',
        audio: './assets/audio/audio2.mp3'
    },
    {
        name: 'Laugh out loud with Bobby Lee',
        date: '10 June 2023',
        image: './assets/image2p.jpg',
        audio: './assets/audio/audio4.mp3'
    },
    {
        name: 'Anatomy of a Murder',
        date: '1 June 2023',
        image: './assets/image3p.jpeg',
        audio: './assets/audio/audio3.mp3'
    },
  ];

  function populatePodcastListing() {
    const podcastListing = document.getElementById('podcastListing');
    podcastListing.innerHTML = '';

    podcasts.forEach((podcast, index) => {
      const podcastBox = document.createElement('div');
      podcastBox.classList.add('podcast-box');
      podcastBox.addEventListener('click', () => showPodcast(index));

      const podcastImage = document.createElement('img');
      podcastImage.src = podcast.image;

      const podcastName = document.createElement('span');
      podcastName.textContent = podcast.name;

      const podcastDate = document.createElement('span');
      podcastDate.textContent = podcast.date;

      podcastBox.appendChild(podcastImage);
      podcastBox.appendChild(podcastName);
      podcastBox.appendChild(podcastDate);

      podcastListing.appendChild(podcastBox);
    });
  }

  populatePodcastListing();

  function showPodcast(index) {
    const podcastPlayer = document.getElementById('podcastPlayer');
    podcastPlayer.innerHTML = '';

    const podcast = podcasts[index];

    const podcastImage = document.createElement('img');
    podcastImage.src = podcast.image;
    podcastImage.alt = podcast.name;

    const podcastName = document.createElement('h2');
    podcastName.textContent = podcast.name;

    const podcastDate = document.createElement('span');
    podcastDate.textContent = podcast.date;

    const audioPlayer = document.createElement('audio');
    audioPlayer.controls = true;
    audioPlayer.src = podcast.audio;

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => showPodcast(index === 0 ? podcasts.length - 1 : index - 1));

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => showPodcast(index === podcasts.length - 1 ? 0 : index + 1));

    const navigationButtons = document.createElement('div');
    navigationButtons.classList.add('navigation-buttons');
    navigationButtons.appendChild(prevButton);
    navigationButtons.appendChild(nextButton);

    podcastPlayer.appendChild(podcastImage);
    podcastPlayer.appendChild(podcastName);
    podcastPlayer.appendChild(podcastDate);
    podcastPlayer.appendChild(audioPlayer);
    podcastPlayer.appendChild(navigationButtons);
  }

  showPodcast(0);