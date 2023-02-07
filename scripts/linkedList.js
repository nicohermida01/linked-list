import ListNode from './listNode.js'

export default class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	/**
	 * It adds an element at the end of the list
	 * @param {*} data
	 */
	addNode(data) {
		// if the list is empty then add an element and it will be head
		// if the list is not empty then iterate to the end of the list and add an element at the end of the list

		const newNode = new ListNode(data)

		let currentNode = this.head

		if (currentNode === null) {
			this.head = newNode
		} else {
			while (currentNode.next) {
				currentNode = currentNode.next
			}

			currentNode.next = newNode
		}

		this.size++
	}

	/**
	 * It inserts an element at the given index in a list
	 * @param {*} data
	 * @param {*} index
	 */
	insertAt(data, index) {
		// if the index is zero we add an element at the front of the list and make it head
		// if the index is the last position of the list we append the element at the end of the list
		// if the index is between 0 or size -1 we iterate over to the index and add an element at that index
	}

	/**
	 * It removes and returns an element from the list from the specified index
	 * @param {*} index
	 */
	removeFrom(index) {
		// if the index is 0 then we remove the head and make the next node head of the list
		// if the index is size -1 then we remove the last element from the list and make prev the last element
		// if it's in between 0 to size -1 we remove the element by using prev and the current node
	}

	/**
	 * This method removes element from the list. It returns the removed element, or if it's not found it returns -1
	 * @param {*} data
	 */
	removeElement(data) {
		let currentNode = this.head
		let prevNode = null

		while (currentNode !== null) {
			if (currentNode.data === data) {
				if (prevNode === null) {
					this.head = currentNode.next
				} else {
					prevNode.next = currentNode.next
				}

				this.size--
				return currentNode.data
			}

			prevNode = currentNode
			currentNode = currentNode.next
		}

		return -1
	}

	/**
	 * It returns the index of a given element if the element is in the list, or if it's not found it returns -1
	 * @param {*} data
	 */
	indexOf(data) {}

	/**
	 * It returns true if the list is empty
	 */
	isEmpty() {
		return this.size === 0
	}

	/**
	 * It returns the size of list
	 */
	getSize() {
		return this.size
	}

	getNodesFormatted() {
		const nodesFormatted = []
		let currentNode = this.head

		while (currentNode !== null) {
			const divNode = document.createElement('div')
			divNode.classList.add('node')
			divNode.innerHTML = `
				<div class="node-data">${currentNode.data}</div>
				<div class="node-link"></div>
			`
			if (currentNode.next !== null) {
				divNode.innerHTML += '<i class="fa-solid fa-arrow-right-long"></i>'
			}

			nodesFormatted.push(divNode)

			currentNode = currentNode.next
		}

		return nodesFormatted
	}
}
