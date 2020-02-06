// background.js
$(function () {
    particlesJS('particle', {
        "particles": {
            "number": {
                "value": 40, // 정점 개수
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // 정점의 색
            },
            "shape": {
                "type": "circle", // triangle, star, polygon, image, edge
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5 // polygon 설정 시 모서리 개수
                },
                "image": {
                    "src": "icon192.png", // image설정 시 이미지 파일 경로
                    "width": 192,
                    "height": 192
                }
            },
            "opacity": {
                "value": 0.4, // 도형일 때 정점의 투명도 설정
                "random": true,
                "anim": { // 정점의 투명도 변화 애니메이션 설정
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 100, // 정점의 크기 설정
                "random": true, // false - 설정한 크기대로 나옴, true - 설정한 크기를 기준으로 더 크고 더 작은 정점들이 무작위 생성
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false, // 줄 삭제
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 0
            },
            "move": { // 이동 관련 설정
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out", // bounce, out
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble" // repulse, grab, bubble
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse" // remove, bubble, repulse
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 40,
                    "duration": 2,
                    "opacity": 2,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    });
})
