// 시간 출력
function updateTime() {
  const now = new Date()
  document.getElementById('time').textContent = now.toLocaleTimeString()
}
setInterval(updateTime, 1000)
updateTime()
document.addEventListener('DOMContentLoaded', () => {
  // 다크 모드
  const toggleBtn = document.getElementById('toggle-dark-mode')
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode')
      toggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ 라이트 모드'
        : '🌙 다크 모드'
    })
  }

  // 타이핑 반복 효과
  const typingTarget = document.getElementById('typing-text')
  const text = 'WELCOME'
  let i = 0
  let isDeleting = false

  function typeLoop() {
    if (typingTarget) {
      if (isDeleting) {
        typingTarget.textContent = text.substring(0, i--)
      } else {
        typingTarget.textContent = text.substring(0, i++)
      }

      if (!isDeleting && i === text.length + 1) {
        setTimeout(() => {
          isDeleting = true
          typeLoop()
        }, 1000)
        return
      }

      if (isDeleting && i < 0) {
        isDeleting = false
        i = 0
      }

      setTimeout(typeLoop, isDeleting ? 80 : 150)
    }
  }

  typeLoop()
})
