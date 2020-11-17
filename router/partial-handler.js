

const routes =;

function router(name, to) {

    let route = findRoute(name);
    render(route, to)
}

function render(route, container) {
    container.innerHTML = "<h1>Cargando...</h1>";
    try {
        let promise = fetch(route.url);
        let response = await promise;

        if (response.ok) {
            let texto = await response.text();
            container.innerHTML = texto;
        } else {
            container.innerHTML = "<h1>Falla en la respuesta</h1>";
        }
    } catch (exc) {
        container.innerHTML = "<h1>Falla de conexión</h1>";
    }
}

findRoute(name)
{



}