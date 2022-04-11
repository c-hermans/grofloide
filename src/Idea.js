class Idea {
    constructor(title, comments) {
        this.title = title;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

export default Idea;