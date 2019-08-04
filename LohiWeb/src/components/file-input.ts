
export class FileInput {
  public fileList: FileList|null = null;

  private fileContent: String[][] = [];

  onSelectFile(e: Event) {
    if (this.fileList) {
      this.fileContent = [];
      for (let index = 0; index < this.fileList.length; index++) {
        this.readFile(this.fileList[index]);
      }
      console.log(this.fileContent);
    }
  }

  readFile(file: File) {
    const fileReader = new FileReader();

    fileReader.onload = e => {
      let result = e.target.result;

      this.fileContent.push(result.replace(/[\r\n]+/g, ' ').split(' '));
    }
    fileReader.onerror = () => {
      throw new Error('Error loading file');
    }

    fileReader.readAsText(file);
  }
}