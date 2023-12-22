import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private $isLoading = new BehaviorSubject(true)
  isLoading = this.$isLoading.asObservable()
  constructor() { }

  setLoading(val:boolean) {
    this.$isLoading.next(val)
  }


}
