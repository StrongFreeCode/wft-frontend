// types.js

/**
 * @typedef {Object} Image
 * @property {number} id
 * @property {string} url
 */

/**
 * @typedef {Object} Place
 * @property {number} id
 * @property {string} nombre
 * @property {string} time
 * @property {string} descripcion
 * @property {Image[]} images
 */

/**
 * @typedef {Object} ExcursionElement
 * @property {number} id
 * @property {string} nombre
 * @property {string} url
 * @property {string} descripcion
 * @property {string} descripcion_resumen
 * @property {Date} fecha_inicio
 * @property {string} hora_salida
 * @property {Date} fecha_fin
 * @property {string} hora_regreso
 * @property {string} precio_entrada
 * @property {number} precio_final
 * @property {number} capacidad_max
 * @property {Place[]} places
 * @property {Image[]} images
 * @property {Date} created_at
 * @property {Date} updated_at
 */

/**
 * @typedef {Object} Links
 * @property {string} first
 * @property {string} last
 * @property {null} prev
 * @property {null} next
 */

/**
 * @typedef {Object} Meta
 * @property {number} current_page
 * @property {number} from
 * @property {number} last_page
 * @property {Link[]} links
 * @property {string} path
 * @property {number} per_page
 * @property {number} to
 * @property {number} total
 */

/**
 * @typedef {Object} Link
 * @property {null | string} url
 * @property {string} label
 * @property {boolean} active
 */

/**
 * @typedef {Object} Excursion
 * @property {ExcursionElement[]} excursions
 * @property {Links} links
 * @property {Meta} meta
 */