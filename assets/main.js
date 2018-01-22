// Primary execution
console.log('hello world!')
main()

// Functions
function main() {
  const canvas = document.querySelector('#canvas')
  // initialize GL context
  const gl = canvas.getContext('webgl')

  // Only continue if WebGL is available and working
  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it')
    return
  }

  // Set clear color to opaque black
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  // Clear the color buffer with specified clear clearColor
  gl.clear(gl.COLOR_BUFFER_BIT)
}
