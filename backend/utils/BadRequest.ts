export class BadRequest extends Error {
    public status = 400;
    public message;
    public stack;
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
