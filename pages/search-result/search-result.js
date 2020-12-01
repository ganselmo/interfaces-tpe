import { Component } from "../../framework/components/component.js";
import { canciones } from "../../mocks/canciones.js";
import { playlists } from "../../mocks/playlists.js";
import { podcasts } from "../../mocks/podcasts.js";

export class SearchResultPage extends Component {

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
        this.addEventListener('toPodcasts', function () {
            elementer.appendChildren(elementer.pdcstlines)
        })
        this.addEventListener('toPlaylists', function () {
            elementer.appendChildren(elementer.listlines)
        })
        this.canciones.forEach(element => {
            let songline = document.createElement('song-line')
            songline.setAttribute('song', JSON.stringify(element))
            this.songlines.push(songline)
        });
        this.podcasts.forEach(element => {
            let pdcstline = document.createElement('podcast-line')
            pdcstline.setAttribute('pcst', JSON.stringify(element))
            this.pdcstlines.push(pdcstline)
        });
        this.playlist.forEach(element => {
            let listline = document.createElement('list-line')
            listline.setAttribute('list', JSON.stringify(element))
            this.listlines.push(listline)
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