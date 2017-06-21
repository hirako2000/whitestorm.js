import {OrthographicCamera as OrthographicCameraNative} from 'three';
import {CameraComponent} from '../../core/CameraComponent';
import {system} from '../../polyfill';

/**
 * @class OrthographicCamera
 * @category components/cameras
 * @description Camera with orthographic projection.
 * @param {Object} [params] - The parameters object.
 * @memberof module:components/cameras
 * @extends CameraComponent
 * @example <caption>Create an OrthographicCamera and set it as app's camera</caption>
 * const camera = new OrthographicCamera({
 *   camera: {
 *     far: 10000
 *   },
 *
 *   position: {
 *     y: 50
 *   }
 * });
 *
 * app.camera = camera;
 */
class OrthographicCamera extends CameraComponent {
  /**
   * Default values for parameters
   * @member {Object} module:components/cameras.OrthographicCamera#defaults
   * @static
   * @default <pre>
   * {
   *   camera: {
   *     near: 1,
   *     far: 1000,
   *     left: system.window.innerWidth / -2,
   *     right: system.window.innerWidth / 2,
   *     top: system.window.innerHeight / 2,
   *     bottom: system.window.innerHeight / -2
   *   }
   * }</pre>
   */
  static defaults = {
    ...CameraComponent.defaults,

    camera: {
      near: 1,
      far: 1000,
      left: system.window.innerWidth / -2,
      right: system.window.innerWidth / 2,
      top: system.window.innerHeight / 2,
      bottom: system.window.innerHeight / -2
    }
  };

  constructor(params = {}) {
    super(params, OrthographicCamera.defaults);
  }

  build(params = {}) {
    return this.applyBridge({camera: new OrthographicCameraNative(
      params.camera.left,
      params.camera.right,
      params.camera.top,
      params.camera.bottom,
      params.camera.near,
      params.camera.far
    )}).camera;
  }
}

export {
  OrthographicCamera
};
