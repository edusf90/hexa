const d1 = Date.now()
const d2 = '2026-07-05'

const diffInMs = new Date(d2) - new Date(d1)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

document.getElementById('dias').innerHTML = diffInDays.toFixed(0)

function dimensaoTela() {
  var heightTela = window.innerHeight
  var widthTela = window.innerWidth

  document.getElementById('pag_processos').style.minHeight = heightTela + 'px'
}
