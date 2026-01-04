import * as FileSystem from 'expo-file-system/legacy';

class AudioFileHandler {
  constructor(fileName) {
    this.folder = FileSystem.documentDirectory + 'audio/';
    this.fileName = fileName;
  }
  async getDirectory() {
    await this.ensureDir();
    return this.folder;
  }

  async ensureDir() {
    const dirInfo = await FileSystem.getInfoAsync(this.folder);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(this.folder, {
        intermediates: true,
      });
    }
  }

  async fileUri() {
    const fileUri = this.folder + this.fileName;
    const info = await FileSystem.getInfoAsync(fileUri);
    return info.exists ? fileUri : null;
  }

  async downloadFile2(serverUrl) {
    await this.ensureDir();

    const remoteUrl = serverUrl + this.fileName;
    const localUri = this.folder + this.fileName;

    console.log('Downloading:', remoteUrl);

    const download = await FileSystem.downloadAsync(
      remoteUrl,
      localUri
    );

    return download.uri;
  }
  async downloadFile(serverUrl, setProgress) {
    await this.ensureDir();

    const existingFile = await this.fileUri();
    if (existingFile) return existingFile;

    const file = new FileSystem.File(this.folder + this.fileName);

    await file.downloadAsync(serverUrl + this.fileName, {
      onProgress: ({ loaded, total }) => {
        if (total > 0 && setProgress) {
          setProgress(loaded / total);
        }
      },
    });

    return file.uri;
  }
  async startDownloadFile(serverUrl, setProgress = null){
      const fileUri = this.folder + this.fileName;
      // Use downloadResumable from legacy if you want progress
      const downloadResumable = FileSystem.createDownloadResumable(
          serverUrl + this.fileName,
          fileUri,
        {},
        ({ totalBytesWritten, totalBytesExpectedToWrite }) => {
            if (totalBytesExpectedToWrite > 0 && setProgress) {
                setProgress(totalBytesWritten / totalBytesExpectedToWrite);
            }
        }
      );
      const result = await downloadResumable.downloadAsync();
      return result.uri;
  }
}

export default AudioFileHandler;