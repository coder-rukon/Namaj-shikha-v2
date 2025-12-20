import * as FileSystem from 'expo-file-system/legacy';

class AudioFileHandler {
  constructor(fileName) {
    this.folder = FileSystem.documentDirectory + 'audio/';
    this.fileName = fileName;
  }

  async ensureDir() {
    const dirInfo = await FileSystem.getInfoAsync(this.folder);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(this.folder, {
        intermediates: true,
      });
    }
  }

  async fileExists() {
    const fileUri = this.folder + this.fileName;
    const info = await FileSystem.getInfoAsync(fileUri);
    return info.exists ? fileUri : null;
  }

  async downloadFile(serverUrl) {
    await this.ensureDir();

    const existingFile = await this.fileExists();
    if (existingFile) {
      console.log('Using local file:', existingFile);
      return existingFile;
    }

    const remoteUrl = serverUrl + this.fileName;
    const localUri = this.folder + this.fileName;

    console.log('Downloading:', remoteUrl);

    const download = await FileSystem.downloadAsync(
      remoteUrl,
      localUri
    );

    return download.uri;
  }
}

export default AudioFileHandler;