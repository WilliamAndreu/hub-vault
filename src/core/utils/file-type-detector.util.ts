
export class FileTypeDetectorUtil {
  // Listas de extensiones de archivos admitidas
  private imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.svg'];
  private docExtensions = ['.ppt', '.pptx', '.doc', '.docx', '.xls', '.xlsx'];
  private codeExtensions = ['.css', '.html', '.php', '.c', '.cpp', '.h', '.hpp', '.js'];
  private miscExtensions = ['.pdf', '.pages', '.ai', '.psd', '.tiff', '.dxf', '.svg', '.eps', '.ps', '.ttf', '.xps', '.zip', '.rar'];

  // Método para detectar el tipo de archivo
  detectFileType(url: string): string {
    const extension = this.extractExtension(url);

    if (this.imageExtensions.includes(extension)) {
      return 'image';
    } else if (this.docExtensions.includes(extension)) {
      return 'doc';
    } else if (this.codeExtensions.includes(extension)) {
      return 'code';
    } else if (this.miscExtensions.includes(extension)) {
      return 'misc';
    } else {
      return 'unknown';
    }
  }

  // Método para extraer la extensión del archivo
  private extractExtension(url: string): string {
    const lastDotIndex = url.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      return url.substring(lastDotIndex).toLowerCase();
    }
    return '';
  }
}
