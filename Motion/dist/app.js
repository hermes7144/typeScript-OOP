import { PageComponent } from './components/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/gALGg2Vu9AI');
        video.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note title', 'Note Content');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('Todo title', 'Hard Work');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
//# sourceMappingURL=app.js.map