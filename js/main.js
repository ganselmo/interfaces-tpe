"use strict"
import { CommentComponent } from '../components/app-comment/comment.js';
import { EquComponent } from '../components/app-equ/equ.js';
import { FilterComponent } from '../components/app-filters/app-filter/filter.js';
import { FiltersComponent } from '../components/app-filters/filters.js';
import { PlanComponent } from '../components/app-plan/plan.js';
import { BuscadorComponent } from '../components/buscador/buscador.js';
import { SliderComponent } from '../components/app-slider/slider.js';
import { CustomTest } from '../components/custom-test/test.js'
import { ContextMenuComponent } from '../components/context-menu/context-menu.js';
import { MusicMenuComponent } from '../components/music-menu/music-menu.js';
import { HeaderComponent } from '../components/spoiler-header/header.js'
import { ModeComponent } from '../components/app-mode/mode.js';
import { OptionsComponent } from '../components/app-options-mov/options-mov.js';
import { PlayerComponent } from '../components/app-player/player.js';
import { ContentWrapperComponent } from '../components/content-wrapper/content-wrapper.js';
import { AccordComponent } from '../components/app-acord/acord.js';
import { CommentInsertComponent } from '../components/app-comment-insert/comment-insert.js';
import { CommentReplyComponent } from '../components/app-comment-reply/comment-reply.js';
import { SongComponent } from '../components/app-song/song.js';

//Pages
import { LandingPage } from '../pages/landing/landing.js';
import { ProfilePage } from '../pages/profile/profile.js';
import { HelpPage } from '../pages/help/help.js';
import { SearchResultPage } from '../pages/search-result/search-result.js';
import { LineListComponent } from '../components/line-list/line-list.js';
import { LineSongComponent } from '../components/line-song/line-song.js';
import { LinePodcastComponent } from '../components/line-podcast/line-podcast.js';
import { LineLibraryComponent } from '../components/line-library/line-library.js';
import { LibraryPage } from '../pages/library/library-page.js';
import { VolumenComponent } from '../components/app-volumen-mov/volumen-mov.js';
import { DescriptionPage } from '../pages/description/description.js';



document.addEventListener("DOMContentLoaded", async function () {

    //COMPONENTS
    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-plan', PlanComponent);
    window.customElements.define('context-menu', ContextMenuComponent);
    window.customElements.define('app-comment', CommentComponent);
    window.customElements.define('app-buscador', BuscadorComponent);
    window.customElements.define('app-filters', FiltersComponent);
    window.customElements.define('app-filter', FilterComponent);
    window.customElements.define('app-slider', SliderComponent);
    window.customElements.define('app-player', PlayerComponent);
    window.customElements.define('app-options-mov', OptionsComponent);
    window.customElements.define('app-mode', ModeComponent);
    window.customElements.define('content-wrapper', ContentWrapperComponent);
    window.customElements.define('app-accord', AccordComponent);
    window.customElements.define('list-line', LineListComponent);
    window.customElements.define('song-line', LineSongComponent);
    window.customElements.define('podcast-line', LinePodcastComponent);
    window.customElements.define('library-line',LineLibraryComponent)
    window.customElements.define('music-menu', MusicMenuComponent);
    window.customElements.define('app-comment-insert', CommentInsertComponent);
    window.customElements.define('app-comment-reply', CommentReplyComponent);
    window.customElements.define('app-song', SongComponent);
    window.customElements.define('app-volumen', VolumenComponent);


    //PAGES
    window.customElements.define('landing-page', LandingPage);
    window.customElements.define('profile-page', ProfilePage);
    window.customElements.define('help-page', HelpPage);
    window.customElements.define('search-page', SearchResultPage);
    window.customElements.define('library-page',LibraryPage);
    window.customElements.define('description-page',DescriptionPage)
})
