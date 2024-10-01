// script.js

//index swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        navigation: { // 내비게이션 추가 (옵션)
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // 슬라이드 전환 시간 (밀리초)
            disableOnInteraction: false, // 사용자가 상호작용 해도 autoplay 유지
        },
        breakpoints: { // 반응형 설정
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
});


//login
function goLogin() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("ps").value;

    // Implement your login logic here
    if (id && password) {
        alert("ログイン中..."); // Placeholder alert for login
        // Actual login process (e.g., API call) would go here
    } else {
        alert("アカウントとパスワードを入力してください"); // Alert for empty fields
    }
}


//join



// cm

var fc = fc || {
    theme: {
        assetUrl: "https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/148/assets/229/"
    },
    user: {
        profiles: {},
        plan: { code: "" },
        memberNumber: ""
    }
};


if ($('#ageVerification').length) {
    $(function(){
        $('.js-next-button').on('click', function() {
            var checkprop = $('#ageVerification').prop('checked');
            if (checkprop) {
                $('#ageVerification').removeClass('is-invalid');
            } else {
                $('#ageVerification').addClass('is-invalid');
                return false;
            }
        });
        $('input').keypress(function(e) {
            if (e.which === 13) {
                $('.js-next-button').click();
                return false;
            }
        })
    });
}


$(function () {
    const substr = ["すべて"];
  const newstr = ["ALL"];
  document.querySelectorAll('ul.category-list a ,ul.category-list span').forEach((p, index) => {
    Array.from(p.childNodes).filter(node => node.nodeType === Node.TEXT_NODE).forEach(text => {
      let value = text.nodeValue;
      for (let i = 0; i < substr.length; i++) {
        value = value.replace(new RegExp(substr[i], 'g'), newstr[i]);
      }
      text.nodeValue = value;
    });
  });
});


//cm_view
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}

    //commnet cm_view
    function addComment() {
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentsList = document.getElementById('comments-list');
            const newComment = createCommentElement(commentText);
            commentsList.appendChild(newComment);
            commentInput.value = ''; // 댓글 입력 필드 초기화
        } else {
            alert('コメントを入力してください。');
        }
    }

    function createCommentElement(commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const commentContent = document.createElement('p');
        commentContent.textContent = commentText;
        commentDiv.appendChild(commentContent);

        const replyButton = document.createElement('button');
        replyButton.classList.add('reply-button');
        replyButton.textContent = 'コメント登録';
        replyButton.onclick = function() {
            showReplyInput(commentDiv);
        };
        commentDiv.appendChild(replyButton);

        const repliesDiv = document.createElement('div');
        repliesDiv.classList.add('reply');
        commentDiv.appendChild(repliesDiv);

        return commentDiv;
    }

    function showReplyInput(commentDiv) {
        if (!commentDiv.querySelector('.reply-input')) {
            const replyInput = document.createElement('textarea');
            replyInput.classList.add('reply-input');
            replyInput.placeholder = 'コメントを入力してください。';
            replyInput.rows = 2;

            const submitReplyButton = document.createElement('button');
            submitReplyButton.classList.add('submit-button');
            submitReplyButton.textContent = 'コメント登録';
            submitReplyButton.onclick = function() {
                addReply(replyInput.value.trim(), commentDiv);
            };

            commentDiv.appendChild(replyInput);
            commentDiv.appendChild(submitReplyButton);
        }
    }

    function addReply(replyText, commentDiv) {
        if (replyText) {
            const repliesDiv = commentDiv.querySelector('.reply');
            const replyElement = document.createElement('p');
            replyElement.textContent = replyText;
            repliesDiv.appendChild(replyElement);
        } else {
            alert('コメントを入力してください。');
        }
    }

	

    //index modal
    function memberDescriptions(member){
        var setumei = "";
        if(member == "Minji") setumei = "「リーダーでメインボーカル、愛らしくてポジティブなエネルギーを持つメンバー。」";
        else if (member == "Hanni") setumei = "「オーストラリア出身のメンバーで、独特の魅力と才能を持っているメンバー。」";
        else if (member == "Danielle") setumei = "かわいらしいビジュアルと優れたラップスキルを持つメンバー。";
        else if (member == "Haerin") setumei = "落ち着いていても強いカリスマを持つメンバー。";
        else if (member == "Hyein") setumei = "末っ子メンバーで、天真爛漫な魅力を持っているメンバー。";
        
        return setumei;
    }
    
    function openModal(member) {
        const modal = document.getElementById("myModal");
        const modalImage = document.getElementById("modalImage");
        const caption = document.getElementById("caption");
        const description = document.getElementById("description");
    
        modal.style.display = "block"; // 모달 표시
        modalImage.src = `img/${member}.jpg`; // 이미지 로드
        caption.innerHTML = member; // 멤버 이름
        description.innerHTML = memberDescriptions(member); // 설명
    }
    
    function closeModal(event) {
        const modal = document.getElementById("myModal");
        modal.style.display = "none"; // 모달 닫기
    }
    
    
   // profile img swiper
   const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1, // 한 번에 하나의 슬라이드 보여주기
    centeredSlides: true, // 중앙 정렬
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//cm_wirte 

function validateForm() {
    const title = document.forms["cm"]["t_title"].value;
    const contents = document.forms["cm"]["contents"].value;

    if (title === "") {
        alert("タイトルを入力してください。"); // タイトル 입력 메시지
        return false;
    }
    if (contents === "") {
        alert("内容を入力してください。"); // 内容 입력 메시지
        return false;
    }

    return true; // 모든 검사를 통과하면 제출
}