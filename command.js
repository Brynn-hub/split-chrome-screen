class ShortCut {
  constructor() {
    this.fullWidth = window.screen.availWidth;
  }

  splitScreenLeft = () => {
    return {
      left: 0,
      width: this.fullWidth / 2
    }
  }

  splitScreenRight = () => {
    return {
      left: this.fullWidth / 2,
      width: this.fullWidth / 2
    }
  }

  splitScreenFull = () => {
    return {
      left: 0,
      width: this.fullWidth
    }
  }

  covert(command) {
    return command.split('-').reduce((accumulator, currentValue, currentIndex) => {
      if (!currentIndex) {
        return accumulator + currentValue;
      } else {
        return accumulator + currentValue.slice(0, 1).toUpperCase() + currentValue.slice(1);
      }
    });
  }

  excute(command) {
    return this[this.covert(command)];
  }
}
