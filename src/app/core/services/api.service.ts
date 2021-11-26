import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {
  private baseUrl: string;

  public setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }
}
