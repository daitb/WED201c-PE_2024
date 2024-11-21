
		const videolist=[
			"VIdeo/SnapTik.Net_7436420343344008449.mp4",
			"VIdeo/Download (3).mp4",
			"VIdeo/Download (5).mp4",
		];

		let currentVideoIndex = 0;
		const videoPlayer = document.getElementById("video-player");

		function previousVideo(){
			currentVideoIndex--;
			if(currentVideoIndex < 0){
				currentVideoIndex = videolist.length-1;
			}
			loadVideo();
		}

		function nextVideo(){
			currentVideoIndex++;
			if(currentVideoIndex >= videolist.length){
				currentVideoIndex = 0;
			}
			loadVideo();
		}

		function loadVideo() {
			// Thêm lớp 'hidden' để làm mờ video hiện tại
			videoPlayer.classList.add("hidden");
		
			// Chờ 500ms để hoàn thành hiệu ứng mờ đi (tương ứng với transition ở CSS)
			setTimeout(() => {
				videoPlayer.src = videolist[currentVideoIndex]; // Thay đổi nguồn video
				videoPlayer.play(); // Phát video mới
		
				// Loại bỏ lớp 'hidden' để làm video mới xuất hiện
				videoPlayer.classList.remove("hidden");
			}, 500);
		}
