export class CancionesService {

    constructor() {
    }

    getCanciones() {
        return fetch('mocks/canciones.json').then(
            response => {
                if (response.ok) {
                    return response.text()

                }
            }
        )
    }

}