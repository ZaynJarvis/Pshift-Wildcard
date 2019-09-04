export class NotFound extends Error {
    public status = 404;
    public message;
    public stack;
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
