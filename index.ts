import './style.css';

import { of, map, Observable } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

//works as timer observable
let customTimer = (time)=>{
  return new Observable((observer)=>{
     setTimeout(()=>observer.next(0),time)
  })
}

//works as of  observable
let customOf = (...args)=>{
  return new Observable((observer)=>{
    args.forEach((value)=>{
      observer.next(value)
    })
  })
}



new Observable((observer)=>{
  observer.next(10)
  observer.next(20)
  observer.complete()
}).pipe(
  mergeMap((value:number)=>customOf(1,2,3)),
  tap(val=>console.log(val))
).subscribe(()=>{})


