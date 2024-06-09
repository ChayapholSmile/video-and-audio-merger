document.addEventListener("DOMContentLoaded", () => {
    const videoInput = document.getElementById('videoInput');
    const audioInput = document.getElementById('audioInput');
    const mergeButton = document.getElementById('mergeButton');
    const resultVideo = document.getElementById('resultVideo');

    mergeButton.addEventListener('click', () => {
        if (videoInput.files.length > 0 && audioInput.files.length > 0) {
            const videoFile = videoInput.files[0];
            const audioFile = audioInput.files[0];

            const videoURL = URL.createObjectURL(videoFile);
            const audioURL = URL.createObjectURL(audioFile);

            resultVideo.src = videoURL;

            resultVideo.addEventListener('play', () => {
                const audio = new Audio(audioURL);
                audio.play();

                resultVideo.addEventListener('pause', () => {
                    audio.pause();
                });

                resultVideo.addEventListener('ended', () => {
                    audio.pause();
                });
            });
        } else {
            alert('Please select both video and audio files');
        }
    });
});
