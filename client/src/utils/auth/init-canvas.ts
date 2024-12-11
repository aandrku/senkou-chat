const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
var innerWidth = window.innerWidth
var innerHeight = window.innerHeight
const numberOfDots = 70 
var Dots: Dot[]


const initCanvas = () => {
	window.addEventListener("load", resizeCanvas)
	window.addEventListener("resize", resizeCanvas)

	ctx.clearRect(0, 0, innerWidth, innerHeight)

	Dots = []

	for (let i = 0; i < numberOfDots; i++) {
		let dot = new Dot()
		Dots.push(dot)
	}

	animate()

}

const animate = () => {
	ctx.clearRect(0, 0, innerWidth, innerHeight)

	Dots.forEach(dot => {
		dot.update()
	})

	requestAnimationFrame(animate)

}

class Dot {
	x: number
	y: number
	op: number
	dop: number
	dx: number
	dy: number
	width: number
	height: number


	constructor() {
		this.x = Math.random() * innerWidth
		this.y = Math.random() * innerHeight
		this.op = Math.random()
		this.dop = 0.002
		this.dx = Math.random() - 0.5
		this.dy = Math.random() - 0.5
		this.width = Math.random() * 5 + 2
		this.height = this.width
	}

	draw(): void {
		ctx.fillStyle = `rgb(136, 8, 172, ${this.op})`
		ctx.fillRect(this.x, this.y, this.width, this.height)
	}

	update(): void {
		if (this.x <= 0 || this.x + this.width >= innerWidth) {
			this.dx = -this.dx
		}
		if (this.y <= 0 || this.y + this.height >= innerHeight) {
			this.dy = -this.dy
		}
		if (this.op >= 1.0 || this.op <= 0.0) {
			this.dop = -this.dop
		}

		this.x = this.x + this.dx
		this.y = this.y + this.dy
		this.op = this.op + this.dop
		this.draw()
	}

}

const resizeCanvas = () => {
	innerWidth = window.innerWidth
	innerHeight = window.innerHeight
	canvas.width = innerWidth
	canvas.height = innerHeight
}

export default initCanvas
