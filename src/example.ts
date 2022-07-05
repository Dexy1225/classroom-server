import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

let students = [
    {
        'Name': 'Nick',
        'Id': '1',
        'Assignment1': '80',
        'Assignment2': '90',
        'Assignment3': '100'
    },
    {
        'Name': 'Winston',
        'Id': '2',
        'Assignment1': '94',
        'Assignment2': '77',
        'Assignment3': '100'
    },
    {
        'Name': 'Calvin',
        'Id': '3',
        'Assignment1': '66',
        'Assignment2': '77',
        'Assignment3': '88'
    },
    {
        'Name': 'Julian',
        'Id': '4',
        'Assignment1': '68',
        'Assignment2': '77',
        'Assignment3': '68'
    },
    {
        'Name': 'Timur',
        'Id': '5',
        'Assignment1': '100',
        'Assignment2': '92',
        'Assignment3': '94'
    },
    {
        'Name': 'Katherine',
        'Id': '6',
        'Assignment1': '90',
        'Assignment2': '88',
        'Assignment3': '89'
    },
    {
        'Name': 'Kristine',
        'Id': '7',
        'Assignment1': '77',
        'Assignment2': '77',
        'Assignment3': '77'
    }
];


app.get("/", (req: Request, res: Response) => {
    console.log("Hello world");
    res.send("Welcome to the Classroom");
  });

app.get('/students', (req: Request, res:Response) =>{
    res.json(students);
});

app.get('/students/:id', (req: Request, res:Response) =>{  
    let id = parseInt(req.params.id) - 1;
    res.json(students[id]);
    
});

app.get('/students/:id/:assign_num', (req: Request, res:Response) =>{ 
    let id = parseInt(req.params.id) - 1;
    let student: any = students[id];
    let a: string= 'Assignment' + req.params.assign_num;
    res.json(student[a]);
    //console.log(students[1].Assignment3)
});


app.post('/students/:id/:assign_num', (req: Request, res:Response) =>{
    const isValid = false;
    let new_grade = res.json(req.body.grade); //pasing {"grade": 66} as body
    //let id = parseInt(req.params.id) - 1;
    //let student: any = students[id];
    //let a: string= 'Assignment' + req.params.assign_num;
    //student[a] = new_grade;
    res.json(new_grade);
})



app.listen(2000);