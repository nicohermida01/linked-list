import { log, time } from './scripts/log.js'
import LinkedList from './scripts/linkedList.js'

const linkedList = new LinkedList()

const addNodeBtn = document.getElementById('addNodeBtn')
const deleteNodeBtn = document.getElementById('deleteNodeBtn')

const addNodeInput = document.getElementById('addNodeInput')
const deleteNodeInput = document.getElementById('deleteNodeInput')

const playgroundLog = document.getElementById('playgroundLog')
const playgroundScreen = document.getElementById('playgroundScreen')

addNodeBtn.addEventListener('click', () => {
	if (addNodeInput.value) {
		linkedList.addNode(addNodeInput.value)
		updateList()
		displayLogMessage('Nodo creado correctamente!', 'success')
	} else {
		displayLogMessage(`[AGREGAR NODO ERROR] Debes ingresar un dato.`, 'error')
	}

	addNodeInput.value = ''
})

deleteNodeBtn.addEventListener('click', () => {
	if (deleteNodeInput.value) {
		const elementRemoved = linkedList.removeElement(deleteNodeInput.value)
		if (elementRemoved === -1) {
			displayLogMessage('No se ha encontrado el dato ingresado.', 'normal')
		} else {
			updateList()
			displayLogMessage('Nodo eliminado correctamente!', 'success')
		}
	} else {
		displayLogMessage(
			`[ELIMINAR NODO ERROR] Debes ingresar el dato a eliminar.`,
			'error'
		)
	}

	deleteNodeInput.value = ''
})

function displayLogMessage(msg, type) {
	const p = document.createElement('p')
	p.innerText = msg
	p.classList.add(type)

	playgroundLog.appendChild(p)
}

function updateList() {
	playgroundScreen.innerHTML = ''

	const nodesFormatted = linkedList.getNodesFormatted()

	nodesFormatted.forEach(element => {
		playgroundScreen.appendChild(element)
	})
}
