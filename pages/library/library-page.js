import { Component } from "../../framework/components/component.js";
import { canciones } from "../../mocks/canciones.js";
import { playlists } from "../../mocks/playlists.js";
import { podcasts } from "../../mocks/podcasts.js";

export class LibraryPage extends Component {

    canciones = canciones()
    podcasts = podcasts()
    playlist = playlists()
    article

    songlines=[]
    pdcstlines=[]
    listlines=[]

    constructor() {
        super(import.meta.url)
    }
    init() {

        this.article = this.shadowRoot.querySelector('article')
        let elementer = this;
        this.addEventListener('toSongs', function () {
            elementer.appendChildren(elementer.songlines)
        })

        this.canciones.forEach((element,index) => {
            let songline = document.createElement('library-line')
            songline.setAttribute('song', JSON.stringify(element))
            this.songlines.push(songline)
            if(index%8 == 7)
            {
                let hd = document.createElement('div')
                hd.classList.add('transparent')
                let hd2 = document.createElement('h2')
                hd2.innerHTML= 'Lista random ' + (index+1)/8
                hd.appendChild(hd2)
                this.songlines.push(hd)
            }
        });
        this.appendChildren(this.songlines)
    }
    appendChildren(array) {

        this.shadowRoot.querySelector('article').innerHTML =''
        array.forEach(element => {

            this.article.appendChild(element)
        });
    }



}