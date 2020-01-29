declare let hat: {
    name: string;
    price: number;
};
declare let gloves: {
    name: string;
    price: number;
};
declare let umbrella: {
    name: string;
    price: number;
    waterproof: boolean;
};
declare let products: {
    name: string;
    price?: number;
}[];
declare let hat2: {
    name: string;
    price: number;
};
declare let gloves2: {
    name: string;
    price: number;
};
declare let umbrella2: {
    name: string;
    price: number;
    waterproof: boolean;
};
declare let products2: {
    name: string;
    price?: number;
    waterproof?: boolean;
}[];
declare enum Feature {
    WaterProof = 0,
    Insulated = 1
}
declare let hat3: {
    name: string;
    price: number;
};
declare let gloves3: {
    name: string;
    price: number;
};
declare let umbrella3: {
    name: string;
    price: number;
    hasFeature: (feature: any) => boolean;
};
declare let products3: {
    name: string;
    price?: number;
    hasFeature?(Feature: any): boolean;
}[];
declare type Product = {
    name: string;
    price?: number;
    hasFeature?(Feature: any): boolean;
};
declare let products4: Product[];
declare let mirrorShades: {
    name: string;
    price: number;
    finish: string;
};
declare let darkShades: Product;
declare let products5: Product[];
declare type Product2 = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
};
declare let hat4: {
    id: number;
    name: string;
    price: number;
};
declare let gloves4: {
    id: number;
    name: string;
    price: number;
};
declare let umbrella4: {
    id: number;
    name: string;
    price: number;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
};
declare let dataItems: (Product2 | Person)[];
declare type UnionType = {
    id: number | string;
    name: string;
};
declare let dataItems2: UnionType[];
declare let dataItems3: (Product2 | Person)[];
declare function isPerson(testObj: any): testObj is Person;
declare type Employee = {
    company: String;
    dept: String;
};
declare let bob2: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare let dataItems4: (Person & Employee)[];
declare type Employee2 = {
    id: string;
    company: string;
    dept: string;
};
declare type Employee2Person = Person & Employee2;
declare function correlateData(peopleData: Person[], staff: Employee2[]): Employee2Person[];
declare let people4: Person[];
declare let employees4: Employee2[];
declare let dataItems5: Employee2Person[];
declare function writePerson(per: Person): void;
declare function writeEmployee(emp: Employee2): void;
declare type Person6 = {
    id: string;
    name: string;
    city: string;
    contact: number;
};
declare type Employee6 = {
    id: string;
    company: string;
    dept: string;
    contact: string;
};
declare type Employee6Person6 = Person6 & Employee6;
declare let typeTest: number & string;
declare type Person7 = {
    id: string;
    name: string;
    city: string;
    contact: {
        phone: number;
    };
};
declare type Employee7 = {
    id: string;
    company: string;
    dept: string;
    contact: {
        name: string;
    };
};
declare type Employed7Person7 = Person7 & Employee7;
declare let typeTest2: {
    phone: number;
} & {
    name: string;
};
declare let person71: Employed7Person7;
declare let person72: Employed7Person7;
declare type Person8 = {
    id: string;
    name: string;
    city: string;
    getContact(field: string): string;
};
declare type Employee8 = {
    id: string;
    company: string;
    dept: string;
    getContact(field: number): number;
};
declare type Employee8Person8 = Person8 & Employee8;
declare let person81: Employee8Person8;
declare let typeTest3: ((field: string) => string) & ((field: number) => number);
declare let stringParamTypeTest: string;
declare let numberParamTypeTest: number;
