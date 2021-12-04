import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl,} from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core';

type TSaveHtmlType = 'resUrl' | 'url' | 'script' | 'style';
type TSaveHtmlPipeResponse = SafeResourceUrl | SafeUrl | SafeScript | SafeStyle | SafeHtml;

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(
    value: string,
    args?: TSaveHtmlType
  ): TSaveHtmlPipeResponse {
    switch (args) {
      case 'resUrl':
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
      case 'url':
        return this.sanitized.bypassSecurityTrustUrl(value);
      case 'script':
        return this.sanitized.bypassSecurityTrustScript(value);
      case 'style':
        return this.sanitized.bypassSecurityTrustStyle(value);
      default:
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
  }
}
