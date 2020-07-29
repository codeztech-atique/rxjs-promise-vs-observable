import { interval, Observable} from 'rxjs'

const breadAvaiable = false;

function PromiseExample() {
  return new Promise((resolve, reject) => {
     if(breadAvaiable) {
       resolve('Bread is available into the market !!!');
     } else {
       reject('Sorry! Bread is not available.');
     }
  });
}

console.log("Example of Promise --->");

PromiseExample().then((data) => {
   console.log(data);
   console.log("Example of Observable ---> ");
   console.log("Works like FM -----> ");
}).catch((err) => {
   console.log(err);
   console.log("Example of Observable ---> ");
    console.log("Works like FM -----> ");
})

function ListenMusic(): Observable<any> {
  return interval(1000);
}

ListenMusic().subscribe((data) => {
  console.log(data);
})