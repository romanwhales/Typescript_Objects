let hat = {
    name:"Hat",
    price: 100
}

let gloves = {
    name:"Gloves",
    price: 75
}

let umbrella = {
    name: "Umbrella",
    price:30,
    waterproof: true
}

let products: {name: string, price?:number} [] = [hat,gloves,umbrella]

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))

console.log("Using Optional properties for Irregular Shapes");
let hat2 = {
    name: "Hat",
    price:100
}

let gloves2 = {
    name:"Gloves",
    price: 75
}

let umbrella2 = {
    name: "Umbrella",
    price:30,
    waterproof: true
}

let products2 : {name:string, price?:number, waterproof?:boolean}[] = [hat2,gloves2,umbrella2]
products2.forEach(prod => console.log(`${prod.name}: ${prod.price} Waterproof: ${prod.waterproof}`))

console.log("Has Feature")
enum Feature{
    WaterProof,
    Insulated
}

let hat3 = {
    name:"Hat",
    price:100
}

let gloves3 = {
    name: "Gloves",
    price: 75
}

let umbrella3 = {name: "Umbrella",price:30,hasFeature:(feature) => feature === Feature.WaterProof}
let products3 :{name:string, price?: number, hasFeature?(Feature):boolean}[] = [hat3, gloves3, umbrella3]
products3.forEach(prod => console.log(`${prod.name}: ${prod.price} WaterProof: ${prod.hasFeature?prod.hasFeature(Feature.WaterProof):false}`))

console.log("Using Type aliases")
type Product ={
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
}

let products4: Product[] = [hat3, gloves3,umbrella3]

products4.forEach(prod => console.log(`${prod.name}: ${prod.price} ${prod.hasFeature? prod.hasFeature(Feature.WaterProof):false}`))

let mirrorShades = {
    name: "Sunglasses",
    price: 54,
    finish:"mirrored"
}
let darkShades: Product = {
    name:"Sunglasses",
    price: 54,
    finish: "flat"
}

let products5 : Product[] = [hat3,gloves3,umbrella3,mirrorShades,darkShades]
console.log("\nSuppress Express Property Errors ")
products5.forEach(prod => console.log(`${prod.name}: ${prod.price} ${prod.hasFeature? prod.hasFeature(Feature.WaterProof):false}`))

console.log("Using Shape Type Unions")

type Product2 = {
    id: number,
    name: string,
    price?: number
}

type Person = {
    id:string,
    name: string,
    city: string
}

let hat4 = {id: 1, name:"Hat",price:100}
let gloves4 = {id:2,name: "Gloves",price:75}
let umbrella4 = {id:3,name:"Umbrella",price:30}
let bob = {id: "bsmith",name:"Bob",city:"London"}

let dataItems: (Product2 | Person)[] = [hat4,gloves4,umbrella4,bob]
console.log("\n Using Shaope Type Unions")
dataItems.forEach(item => console.log(`${item.id}, Name: ${item.name}`))

console.log("\n Understanding Union Property Types");
type UnionType = {
    id: number | string
    name: string
}



let dataItems2 : UnionType[] = [hat4,gloves4,umbrella4,bob]
dataItems2.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`))
console.log("Using Type guards for Type Objects\n")
let dataItems3: (Product2 | Person)[] = [hat4,gloves4,umbrella4,bob]
dataItems3.forEach(item => console.log(`ID: ${item.id}, Type: ${typeof(item)}`))

console.log("\n Type Gurading by Checking Properties");
dataItems3.forEach(item => {
    if("city" in item){
        console.log(`Person: ${item.name}: ${item.city}`)
    }else{
        console.log(`Product2: ${item.name}: ${item.price}`)
    }
})

console.log("Type Guarding with a Type Predicate Function")
function isPerson(testObj: any):testObj is Person{
    return testObj.city !== undefined
}

dataItems3.forEach(item => {
    if (isPerson(item)){
        console.log(`Person: ${item.name}: ${item.city}`)
    }else{
        console.log(`Product: ${item.name}: ${item.price}`)
    }
})

console.log("Using Type Intersections");

type Employee = {
    company: String,
    dept: String
}

let bob2 = {id:"bsmith",name:"Bob",city:"London",company:"Acme Co",dept:"Sales"}

let dataItems4: (Person & Employee)[] = [bob2]

dataItems4.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`)
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`)
})

type Employee2 = {
    id: string,
    company: string,
    dept: string
}

type Employee2Person = Person & Employee2

function correlateData(peopleData: Person[],staff: Employee2[]): Employee2Person[]{
    const defaults = {company:"None",dept:"None"}
    return peopleData.map(p => ({...p,...staff.find(s => s.id === p.id) || {...defaults,id:p.id}}))
}

let people4: Person[] = [
    {id: "bsmith","name":"Bob Smith",city:"London"},
    {id:"ajones",name:"Alice Jones",city:"Paris"},
    {id:"dpeters",name:"Dora Peters",city:"New York"}
]

let employees4: Employee2[] = [
    {id:"bsmith",company:"Acme co",dept:"Sales"},
    {id:"dpeters",company:"Acme Co",dept:"Development"}
]

let dataItems5: Employee2Person[] = correlateData(people4,employees4)
console.log("\nUsing Intersection for Data Correlation")

dataItems5.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`)
    console.log(`Employee2 : ${item.id}, ${item.company}, ${item.dept}`)
})

function writePerson(per: Person): void{
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`)
}

function writeEmployee(emp:Employee2):void{
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`)
}

console.log("Intersection Merging \n")

dataItems5.forEach(item => {
    writePerson(item)
    writeEmployee(item)
})

type Person6 = {
    id: string,
    name: string,
    city: string,
    contact: number
}

type Employee6 = {
    id: string,
    company: string,
    dept: string,
    contact: string
}

type Employee6Person6 = Person6 & Employee6;

let typeTest = ({} as Employee6Person6).contact

type Person7 = {
    id: string,
    name: string,
    city: string,
    contact: {phone:number}
}

type Employee7 = {
    id: string,
    company: string,
    dept: string,
    contact: {name: string}
}

type Employed7Person7 = Person7 & Employee7

let typeTest2 = ({} as Employed7Person7).contact

let person71: Employed7Person7 = {
    id: "bsmith",name:"Bob Smith",city:"London",company:"Acme Co",dept:"Sales",contact:{name:"Alice",phone:6512346543}
}

let person72: Employed7Person7 = {
    id:"dpeters",name:"Dora Peters",city:"New York",company:"Acme Co",dept:"Development",contact:{name:"Alice",phone: 78347834}
}

type Person8 = {
    id: string,
    name: string,
    city: string,
    getContact(field: string): string
}

type Employee8 = {
    id: string,
    company: string,
    dept:string,
    getContact(field:number): number
}

type Employee8Person8 = Person8 & Employee8

let person81: Employee8Person8 = {
    id: "bsmith",
    name:"Bob Smith",
    city:"London",
    company: "Acme Co",
    dept: "Sales",
    getContact(field: string | number):any{
        return typeof field === "string" ? "Alice" : 78347834
    }
}

let typeTest3 = person81.getContact
let stringParamTypeTest = person81.getContact("Alice");
let numberParamTypeTest = person81.getContact(123);

console.log(`Contact: ${person81.getContact("Alice")}`)
console.log(`Contact: ${person81.getContact(12)}`)
