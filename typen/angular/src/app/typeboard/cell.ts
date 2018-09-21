export class Cell {
    character: string;

    styleClass: String;

    constructor(character: string) {
        this.character = character;
        this.styleClass = 'span-black';
    }

    markRight() {
        this.styleClass = 'span-green';
    }
    markMistake() {
        this.styleClass = 'span-red';
    }
    unMark() {
        this.styleClass = 'span-black';
    }


}