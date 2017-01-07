import * as React from 'react'
import * as THREE from 'three'
import * as THREESTLLoader from 'three-stl-loader'

interface ModelRendererProps {
  models?: string[],
  width?: number,
  height?: number,
  style?: any,
  wireframe?: boolean
}

export class ModelRenderer extends React.Component<ModelRendererProps, void> {
  public canvas: any
  public renderer: any
  public camera: any
  public scene: any
  public loader: any

  constructor (props: any) {
    super(props)
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.y = 50

    let geometry = new THREE.BoxGeometry(50, 50, 50)
    let material = new THREE.MeshNormalMaterial()
    if (this.props.wireframe) {
      material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    } else {
      material = new THREE.MeshStandardMaterial({
        color: 0xff8800,
        roughness: 0.95,
        metalness: 0.0
      })
    }
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 0
    mesh.position.y = 0
    mesh.position.z = 0
    this.scene.add(mesh)

    var STLLoader = new THREESTLLoader(THREE)
    this.loader = new STLLoader()
    this.updateModels(props.models || [])

    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
    this.scene.add(light)
  }

  componentDidMount () {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true
    })

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false)
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
    this.camera.updateProjectionMatrix()
    window.addEventListener('resize', () => {
      this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false)
      this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
      this.camera.updateProjectionMatrix()
    })

    setInterval(() => {
      this.updateRendering()
    }, 10)
  }

  updateModels (models: string[]) {
    models.forEach((model) => {
      this.loader.load(model, (geometry: any) => {
        var meshMaterial = null
        if (this.props.wireframe) {
          meshMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
        } else {
          meshMaterial = new THREE.MeshStandardMaterial({
            color: 0xff8800,
            roughness: 0.95,
            metalness: 0.0
          })
        }
        //if (geometry.hasColors) {
        //  meshMaterial = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors })
        //}
        var mesh = new THREE.Mesh(geometry, meshMaterial)
        mesh.position.set(0.5, 0.2, 0)
        mesh.rotation.set(- Math.PI / 2, Math.PI / 2, 0)
        mesh.scale.set(0.3, 0.3, 0.3)
        mesh.castShadow = true
        mesh.receiveShadow = true
        this.scene.add(mesh)
      })
    })
  }

  updateRendering () {
    this.camera.position.x = 100 * Math.sin(Date.now() / 1000)
    this.camera.position.z = 100 * Math.cos(Date.now() / 1000)
    this.camera.lookAt(this.scene.position)
    this.renderer.render(this.scene, this.camera)
    this.renderer.setClearColor(0, 0)
  }

  render () {
    return <canvas className="model-renderer" ref={(c) => {this.canvas = c}} style={this.props.style} />
  }
}
